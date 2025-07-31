const express = require("express");
const router = express.Router();
const { SignUp, Login } = require("../controllers/UserController");

router.post("/Signup", SignUp);
router.post("/Login", Login);

module.exports = router;
