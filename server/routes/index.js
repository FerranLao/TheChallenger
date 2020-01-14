const express = require("express");
const router = express.Router();
const { baseRoute, primerToken, userLoged } = require("../handlers/auth");

router.get("/", baseRoute);
router.post("/token", primerToken);
router.post("/userLog", userLoged);

module.exports = router;
