// handler function for TESTING
import { rest } from "msw";

const baseURL = "https://shot-caller-api.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            pk: 6,
            username: "davey",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 6,
            profile_image: "https://res.cloudinary.com/davey/image/upload/v1/media/shot_caller_react/images/default_profile_lxlutc"
            })
      );
    }),

    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];