import express from "express";
import { createChallenge } from "../controllers/challenges";
const router = express.Router();

router.post("/create", createChallenge);

module.exports = router;
