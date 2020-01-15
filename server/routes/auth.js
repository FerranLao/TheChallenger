import express from "express";
import {
  signUp,
  login,
  userConfirmation,
  autoLogin
} from "../controllers/auth";
import upload from "../cloudinary/cloudinary";

const router = express.Router();

router.get("/confirm/:validationCode", userConfirmation);

router.post("/signUp", signUp);

router.post("/login", login);

router.post("/autolog", autoLogin);

module.exports = router;
