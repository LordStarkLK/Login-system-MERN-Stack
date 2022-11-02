const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "jbldsjbsdjbbfjbs6sdfgvhjsdh";

const User = require("./model/user");

mongoose.connect(
  "mongodb+srv://LordStarkLK:xgDTUxiDUA7OtsR4@nodetute.o8gnihd.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const register = asyncHandler(async (req, res) => {
  const { username, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);

  try {
    const response = await User.create({ username, password, email });
    return res.json({ status: "succsess" });
  } catch (error) {
    console.log("error");
    if (error.code === 11000) {
      return res.json({ status: "error", error: "duplicate" });
    }
    throw error;
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.json({ status: "error", message: "User Dosent Exist" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);
    return res.json({ status: "succsess",data:token });
  } else {
    return res.json({ status: "error", message: "Wrong Password" });
  }
});

module.exports = {
  register,
  login,
};
