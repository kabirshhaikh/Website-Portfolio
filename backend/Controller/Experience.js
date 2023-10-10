const express = require("express");
const multer = require("multer");
const ExperienceModel = require("../Model/ExperienceModel");

const uploadJobExperience = async (req, res, next) => {
  const {
    jobName,
    jobPlace,
    jobPosition,
    jobDuration,
    jobResponsibility,
    imageUrl,
  } = req.body;

  const fileExtension = imageUrl.split(".").pop().toLowerCase();
  const image = {
    data: imageUrl,
    contentType: `image/${fileExtension}`,
  };

  const newExperience = new ExperienceModel({
    jobName,
    jobDuration,
    jobPlace,
    jobPosition,
    image,
    jobResponsibility,
  });

  const savedExperience = await newExperience.save();

  if (!savedExperience) {
    res
      .status(500)
      .json({ message: "Unable to post a new experience in the database" });
  } else {
    res.status(201).json({
      message: "New experience stored sucessfully in the database",
      savedExperience,
    });
  }
};

const getAllExperiences = async (req, res, next) => {
  try {
    const experienceFromDatabase = await ExperienceModel.find();
    if (!experienceFromDatabase) {
      res.status(500).json({ message: "Unable to find experiences." });
    } else {
      res
        .status(201)
        .json({ message: "Experiences found", experienceFromDatabase });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  uploadJobExperience,
  getAllExperiences,
};
