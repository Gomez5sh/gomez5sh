const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function singUp(req, res) {
  const user = new User();

  const {
    nickname,
    name,
    lastname,
    email,
    password,
    repeatPassword,
  } = req.body;
  user.nickname = nickname;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ meessage: "Passwords are mandatory" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ meessage: "Passwords don't match" });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({ meessage: "Password encryption error" });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ meessage: "The user already exists" });
            } else {
              if (!userStored) {
                res.status(404).send({ meessage: "User creation error" });
              } else {
                res.status(200).send({ userStored });
              }
            }
          });
        }
      });
    }
  }
}
module.exports = {
  singUp,
};
