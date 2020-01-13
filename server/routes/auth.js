import express from "express";
import { signUp, login, userConfirmation } from "../controllers/auth";

const router = express.Router();


router.get("confirm/:id", userConfirmation);

router.post("/signUp", signUp);

router.post("/login", login);

module.exports = router;
