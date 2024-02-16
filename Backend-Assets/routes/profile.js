const {createProfile, getAllMentors} = require("../controllers/profilecontroller");
const { Router } = require("express");

const router = Router();

router.post("/create-profile", createProfile);
router.get("/all-mentors", getAllMentors);

module.exports = router;
