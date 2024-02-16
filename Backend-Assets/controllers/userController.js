const User = require("../models/User");
const userService = require("../services/userService");

async function signup(req, res, next) {
  const { username, email, password, country, phonenumber, role } = req.body;
  try {
    const user = await userService.createUser(
      username,
      email,
      password,
      country,
      phonenumber,
      role
    );
    const token = user.generateAuthToken();
    const userResponse = user.getUserData();
    res.json({ ...userResponse, token });
  } catch (error) {
    next(error);
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    const token = user.generateAuthToken();
    const userResponse = await User.findById(user.id).populate({
      path: "details",
      model: "MentorProfile",
    });
    console.log(userResponse);
    res.json({ userResponse, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
}

async function googleApi(req, res) {
  const { idToken } = req.body;
  try {
    const result = await userService.authenticateGoogleUser(idToken);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ success: false, error: "Authentication failed" });
  }
}

async function googleApiCallback(req, res) {
  const { idToken, name, country, phonenumber, role, picture } = req.body;
  try {
    const result = await userService.createUserFromGoogleCallback(
      idToken,
      name,
      country,
      phonenumber,
      role,
      picture
    );
    res.json(result);
  } catch (error) {
    res.status(401).json({ success: false, error: "Authentication failed" });
  }
}

module.exports = { signup, signin, googleApi, googleApiCallback };
