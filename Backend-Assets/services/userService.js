const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const admin = require("firebase-admin");
const { errorHandler } = require("../utils/error.js");
require("dotenv").config();

//Firebase SDK setup
const serviceAccount = require("../config/serviceAccountKey.json");
const firebaseConfig = require("../config/firebaseConfig.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});

async function createUser(
  username,
  email,
  password,
  country,
  phonenumber,
  role
) {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw errorHandler(400, "User already exists");
    }
    user = new User({
      username,
      email,
      password,
      country,
      phonenumber,
      role,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    let user = await User.findOne({ email });
    if (!user) {
      throw errorHandler(404, "User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw errorHandler(401, "Invalid credentials");
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function authenticateGoogleUser(idToken) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email, picture } = decodedToken;
    const user = await User.findOne({ email });

    if (user) {
      return { token: user.generateAuthToken(), name, email, picture };
    } else {
      return { idToken, name, email, picture };
    }
  } catch (error) {
    console.error(error);
    throw errorHandler(401, "Authentication failed");
  }
}

async function createUserFromGoogleCallback(
  idToken,
  name,
  country,
  phonenumber,
  role,
  picture
) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email } = decodedToken;

    const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);

    const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
      country,
      phonenumber,
      role,
      profilePicture: picture,
    });

    await newUser.save();
    return {
      token: newUser.generateAuthToken(),
      name: newUser.username,
      email,
      picture,
    };
  } catch (error) {
    console.error(error);
    throw errorHandler(401, "Authentication failed");
  }
}

module.exports = {
  createUser,
  loginUser,
  authenticateGoogleUser,
  createUserFromGoogleCallback,
};
