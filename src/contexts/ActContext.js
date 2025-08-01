/* Context file used to set the Act for the Scenes page
 * It is used on APP.js and passed to the ScenesPage to filter
   the scenes by Act */
import { createContext, useContext,  useState } from "react";

export const ActContext = createContext();
export const SetActContext = createContext();
export const useActContext = () => useContext(ActContext);
export const useSetActContext = () => useContext(SetActContext);

export const ActProvider = ({ children }) => {
    const [act, setAct] = useState("");

    return (
        <ActContext.Provider value={act}>
          <SetActContext.Provider value={setAct}>
            {children}
          </SetActContext.Provider>
        </ActContext.Provider>
    )
}