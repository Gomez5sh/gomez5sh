const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const User = require("../models/user");

function signUp(req, res) {
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
  user.email = email.toLowerCase;
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

function signIn(req, res) {
  const params = req.body;
  const email = params.email.toLowerCase();
  const password = params.password;

  User.findOne({ email }, (err, userStored) => {
    if (err) {
      res.status(500).send({ meessage: "Server Error" });
    } else {
      if (!userStored) {
        res.status(404).send({ meessage: "User not found" });
      } else {
        bcrypt.compare(password, userStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ meessage: "Server  Error" });
          } else if (!check) {
            res.status(404).send({ meessage: "Password is not correct" });
          } else {
            if (!userStored.active) {
              res.status(200).send({ code: 200, meessage: "User not actived" });
            } else {
              res.status(200).send({
                accessToken: jwt.createAccessToken(userStored),
                refreshToken: jwt.createRefreshToken(userStored),
              });
            }
          }
        });
      }
    }
  });
}

module.exports = {
  signUp,
  signIn,
};
