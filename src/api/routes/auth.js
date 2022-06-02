const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.post("/delete", authController.delete);

module.exports = router;
