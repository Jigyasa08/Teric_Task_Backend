const express = require("express");
const router = express.Router();

const { postLogin, postRegister } = require("../controllers/user-controller");

router.post("/register", postRegister);

router.post("/login", postLogin);

module.exports = router;
