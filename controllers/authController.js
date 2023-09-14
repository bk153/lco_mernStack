const User = require("../models/user");
const { validationResult } = require("express-validator");

//- SignUp
exports.signup = (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array()[0].msg });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save the user in DB.",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

//-SignOut
exports.signout = (req, res) => {
  res.json({
    message: "User signOut",
  });
};
