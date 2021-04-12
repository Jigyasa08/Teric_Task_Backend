const User = require("../models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const postRegister = async (req, res) => {
  const phoneExists = await User.findOne({ phone: req.body.phone });
  if (phoneExists) {
    return res.status(400).json({ msg: "Phone Number is already registered" });
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );

  const user = new User({
    phone: req.body.phone,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const postLogin = async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) {
    return res.status(400).send({ msg: "This Phone Number is not registered" });
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send({ msg: "Invalid Password" });
  }
  res.send("User logged in");
};

module.exports = { postRegister, postLogin };
