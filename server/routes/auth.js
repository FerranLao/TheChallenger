import express from "express";
import { signUp, login, userConfirmation } from "../controllers/auth";
import upload from '../cloudinary/cloudinary'

const router = express.Router();

router.get("/confirm/:validationCode", userConfirmation);

router.post("/signUp", upload.single("photo"),signUp);

router.post("/login", login);


module.exports = router