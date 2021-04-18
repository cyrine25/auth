const User = require("../model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    //check user exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json([{ msg: "user already exist" }]);
    }
    //create a new user
    user = new User({ name, lastName, email, password });
    //hash password
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(password, salt);
    //save the new user
    await user.save();
    //login the user token
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    //send {token,user} to the client
    res.send({
      token,
      user: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        
      },
    });
  } catch (error) {
    console.error(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "bad credential email" }]);
    }
    const testPass = await bcrypt.compare(password, user.password);
    if (!testPass) {
      return res.status(400).json([{ msg: "invalid password" }]);
    }
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    res.send({
      token,
      user: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
const getAuthUser = async (req, res) => {
  res.send(req.user);
};
module.exports = { register, login, getAuthUser };
