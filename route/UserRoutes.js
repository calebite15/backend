const express = require("express");
const SignUp = require("../controllers/UserController");

const router = express.Router();

router.post("/", SignUp);

module.exports = router;
