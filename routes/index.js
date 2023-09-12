const express = require("express");
const router = express.Router();
const authroutes = require("./auth");

router.use("/auth", authroutes);

module.exports = router;
