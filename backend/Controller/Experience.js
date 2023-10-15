const ExperienceModel = require("../Model/ExperienceModel");
const Email = require("../Model/Email");
const nodemailer = require("nodemailer");
const fs = require("fs");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "kabir28051998@outlook.com",
    pass: "17227860Stallion10@",
  },
});

const uploadJobExperience = async (req, res, next) => {
  const { jobName, jobPlace, jobPosition, jobDuration, jobResponsibility } =
    req.body;

  const imageData = fs.readFileSync(req.file.path).toString("base64");

  const newExperience = new ExperienceModel({
    jobName,
    jobDuration,
    jobPlace,
    jobPosition,
    image: {
      data: fs.readFileSync(req.file.path),
      contentType: req.file.mimetype,
    },
    jobResponsibility,
  });

  try {
    const savedExperience = await newExperience.save();

    if (!savedExperience) {
      res
        .status(500)
        .json({ message: "Unable to post a new experience in the database" });
    } else {
      res.status(201).json({
        message: "New experience stored successfully in the database",
        savedExperience,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }

  // Remove the temporary file after processing
  fs.unlinkSync(req.file.path);
};

const getAllExperiences = async (req, res, next) => {
  try {
    const experienceFromDatabase = await ExperienceModel.find();
    if (!experienceFromDatabase) {
      res.status(500).json({ message: "Unable to find experiences." });
    } else {
      const experiencesWithBase64Images = experienceFromDatabase.map(
        (experience) => {
          return {
            ...experience._doc,
            image: {
              ...experience._doc.image,
              data: experience._doc.image.data.toString("base64"),
            },
          };
        }
      );
      res.status(201).json({
        message: "Experiences found",
        experienceFromDatabase: experiencesWithBase64Images,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const sendEmail = async (req, res, next) => {
  const { firstName, lastName, email, message } = req.body;
  const mailOptions = {
    from: "kabir28051998@outlook.com",
    to: `${email}`,
    subject: `Hi ${firstName} ${lastName}, thank you for reaching out.`,
    text: `Hey, thank you for reaching out! Kabir will get in touch shortly! `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mail sent: " + info.response);
    }
  });

  const newEmail = Email({
    firstName,
    lastName,
    email,
    message,
  });

  const saveEmail = await newEmail.save();

  if (!saveEmail) {
    res.status(500).send("Unable to save the email details");
  } else {
    res.status(201).send("Mail sent");
  }
};

module.exports = {
  uploadJobExperience,
  getAllExperiences,
  sendEmail,
};
