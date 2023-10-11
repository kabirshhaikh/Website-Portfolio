const ExperienceModel = require("../Model/ExperienceModel");
const Email = require("../Model/Email");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "kabir28051998@outlook.com",
    pass: "17227860Stallion10@",
  },
});

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
