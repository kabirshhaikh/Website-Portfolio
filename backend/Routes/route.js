const express = require("express");
const router = express.Router();
const experienceController = require("../Controller/Experience");
const multer = require("../Multer/Multer");

router.post(
  "/post-job-experience",
  multer.single("image"),
  experienceController.uploadJobExperience
);

router.get("/get-all-experiences", experienceController.getAllExperiences);

module.exports = router;
