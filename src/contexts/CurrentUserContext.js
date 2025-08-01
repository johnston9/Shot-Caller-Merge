/* Context file used to fetch the current user
 * Interceptors used to keep a user loged in
 * Fix needed - affected by the Gmail mobile browser issue
 * A fix is needed for the Gmail mobile browser issue as it is
   affecting the axiosReq interceptor 
   So it's original catch block is now commented out
 * TokenContext, RedirectContext and SigninContext are just being used here to 
 * investigate this issue
 * The Gmail mobile browser issue seems to be all requests 
   getting 401 so the token refresh is being rejected */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import axios from "axios"
import { axiosInstance, axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";
import axios from "axios";
import useHostName from "../hooks/useHostName";
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config";

export const SigninContext = createContext();
export const SetSigninContext = createContext();
export const useSignin = () => useContext(SigninContext);
export const useSetSignin = () => useContext(SetSigninContext);

export const RedirectContext = createContext();
export const SetRedirectContext = createContext();
export const useRedirect = () => useContext(RedirectContext);
export const useSetRedirect = () => useContext(SetRedirectContext);

export const TokenContext = createContext();
export const SetTokenContext = createContext();
export const useToken = () => useContext(TokenContext);
export const useSetToken = () => useContext(SetTokenContext);

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// npm install -g heroku heroku login -i
// davejohnston9@gmail.com
// Chasing9%
// heroku logs --tail
// git push heroku main
// git rm .env --cached
// git commit -m "Stopped tracking .env File"
// xxxxx setToken, setRedirect and setSignin

export const CurrentUserProvider = ({ children }) => {
  const host = useHostName();
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [signin, setSignin] = useState(null);
  const history = useHistory();

  const fetchUserRole = async (userId) => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_BASE_URL}${localStorage.getItem(
          "projectSlug"
        )}/users/${JSON.parse(localStorage.getItem("user"))?.pk}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleMount = async () => {
    /* function to fetch the current user data */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        // client code
        const { data } = await axiosRes.get("dj-rest-auth/user/");
        setCurrentUser(data);
      } else {
        // my code
        if (localStorage.getItem("accessToken")) {
          const { data } = await axiosInstance.get("dj-rest-auth/user/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          });

          const userDataResult = await fetchUserRole();

          setCurrentUser(JSON.parse(localStorage?.getItem("user")));
        }
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // works for client server
  if (host === CLIENT_PROGRAM_HOSTNAME) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
      axiosReq.interceptors.request.use(
        /* function to intercept all requests and refresh the token */
        async (config) => {
          if (shouldRefreshToken()) {
            try {
              const { data } = await axios.post("/dj-rest-auth/token/refresh/");
              setToken(data);
              setSignin(`inter`);
            } catch (err) {
              setSignin(`inter error`);
              console.log(err);
            }
            // original catch block - commented out for Gmail mobile issue
            // catch (err) {
            //   setCurrentUser((prevCurrentUser) => {
            //     if (prevCurrentUser) {
            //       history.push("/signin");
            //     }
            //     return null;
            //   });
            //   removeTokenTimestamp();
            //   return config;
            // }
          }
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
      );

      axiosRes.interceptors.response.use(
        /* function to intercept responses if they are 401
           to refresh the token */
        (response) => response,
        async (err) => {
          if (err.response?.status === 401) {
            try {
              await axios.post("/dj-rest-auth/token/refresh/");
            } catch (err) {
              setSignin(`interRes error`);
              setCurrentUser((prevCurrentUser) => {
                if (prevCurrentUser) {
                  history.push(`${localStorage.getItem("projectSlug")}/signin`);
                }
                return null;
              });
              removeTokenTimestamp();
            }
            return axios(err.config);
          }
          return Promise.reject(err);
        }
      );
    }, [history]);
  }

  //OLD CODE THAT HAD TO BE REPLACES
  // useMemo(() => {
  //   axiosReq.interceptors.request.use(
  //     async (config) => {
  //       if (shouldRefreshToken()) {
  //         try {
  //           const {data} = await axios.post("/dj-rest-auth/token/refresh/");
  //           setToken(data);
  //         } catch (err) {
  //           setCurrentUser((prevCurrentUser) => {
  //             if (prevCurrentUser) {
  //               history.push("/signin");
  //             }
  //             return null;
  //           });
  //           removeTokenTimestamp();
  //           return config;
  //         }
  //       }
  //       return config;
  //     },
  //     (err) => {
  //       console.log(`inter req 3 error `);
  //       return Promise.reject(err);
  //     }
  //   );

  //   axiosRes.interceptors.response.use(
  //     (response) => response,
  //     async (err) => {
  //       if (err.response?.status === 401) {
  //         try {
  //           await axios.post("/dj-rest-auth/token/refresh/");
  //         } catch (err) {
  //           setCurrentUser((prevCurrentUser) => {
  //             if (prevCurrentUser) {
  //               history.push("/signin");
  //             }
  //             return null;
  //           });
  //           removeTokenTimestamp();
  //         }
  //         return axios(err.config);
  //       }
  //       return Promise.reject(err);
  //     }
  //   );
  // }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <TokenContext.Provider value={token}>
          <SetTokenContext.Provider value={setToken}>
            <RedirectContext.Provider value={redirect}>
              <SetRedirectContext.Provider value={setRedirect}>
                <SigninContext.Provider value={signin}>
                  <SetSigninContext.Provider value={setSignin}>
                    {children}
                  </SetSigninContext.Provider>
                </SigninContext.Provider>
              </SetRedirectContext.Provider>
            </RedirectContext.Provider>
          </SetTokenContext.Provider>
        </TokenContext.Provider>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
