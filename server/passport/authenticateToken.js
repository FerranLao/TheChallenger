import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { findUserByNameOrEmail } from "../bdd/user";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await findUserByNameOrEmail(payload.name);
      done(null, user);
    } catch (e) {
      console.log(e)
      done(e, null);
    }
  })
);
