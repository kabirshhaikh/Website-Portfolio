const express = require("express");
const router = express.Router();
const experienceController = require("../Controller/Experience");
const upload = require("../Multer/MulterConfig");

router.post(
  "/post-job-experience",
  upload.single("image"),
  experienceController.uploadJobExperience
);

router.get("/get-all-experiences", experienceController.getAllExperiences);
router.post("/send-email", experienceController.sendEmail);

module.exports = router;
