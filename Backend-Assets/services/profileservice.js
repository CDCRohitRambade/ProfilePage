const User = require("../models/User");
const MenteeProfile = require("../models/menteeProfile");
const MentorProfile = require("../models/mentorProfile");

const createProfile = async (userId, role, profileData) => {
  const user = await User.findOne({ _id: userId, role });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role === "mentor") {
    return MentorProfile.findByIdAndUpdate(user.details._id, profileData, {
      new: true,
    });
  }

  if (user.role === "mentee") {
    return MenteeProfile.findByIdAndUpdate(user.details._id, profileData, {
      new: true,
    });
  }
};

const getAllMentors = async () => {
  try {
    return User.find({ role: "mentor" }).populate({
      path: "details",
      model: "MentorProfile",
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching mentors");
  }
};

module.exports = { createProfile, getAllMentors };
