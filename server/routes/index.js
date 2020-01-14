const express = require("express");
const router = express.Router();
const { baseRoute, firstToken, userLogged } = require("../handlers/auth");

router.get("/", baseRoute);
router.post("/token", firstToken);
router.post("/userLog", userLogged);

module.exports = router;
