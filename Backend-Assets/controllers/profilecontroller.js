const profileService = require("../services/profileservice");

const createProfile = async (req, res) => {
  // const userId = req.params.id;
  const { role , userId } = req.body;
console.log(userId);
  try {
    const updatedProfile = await profileService.createProfile(
      userId,
      role,
      req.body
    );
    res.json({ data: updatedProfile });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllMentors = async (req, res) => {
  try {
    const mentors = await profileService.getAllMentors();
    res.status(200).json({ data: mentors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProfile, getAllMentors };
