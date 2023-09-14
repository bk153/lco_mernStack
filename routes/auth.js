const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signout, signup } = require("../controllers/authController");

// ExpressValidator custom Messages, is kept after the routes and before the controller..
router.post(
  "/signup",
  [
    check("name").isLength({ min: 3 }).withMessage("should have minimum 3 chars"),
    check("email").isEmail().withMessage("Invalid e-mail address"),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
