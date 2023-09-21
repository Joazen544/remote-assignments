const express = require("express");
const userController = require("../controllers/userController");
const sendHomePage = require("../controllers/sendHomePage");
const router = express.Router();

router.get("/", sendHomePage);
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
