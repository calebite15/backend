const express = require("express");
const router = express.Router();
const { SignUp, Login } = require("../controllers/UserController");

router.post("/User", SignUp);
router.post("/Login", Login);

module.exports = router;
