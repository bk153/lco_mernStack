const express = require("express");
const router = express.Router();
const { signout } = require("../controllers/authController");

router.get("/signout", signout);

module.exports = router;
