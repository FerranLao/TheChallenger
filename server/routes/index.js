const express = require('express');
const router = express.Router();
const { baseRoute } = require("../handlers/auth")

router.get('/', baseRoute);

module.exports = router;
