const moongose = require("mongoose");
const Schema = moongose.Schema;

const experienceSchema = new Schema({
  jobName: {
    type: String,
    required: true,
  },
  jobPlace: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  jobDuration: {
    type: String,
    required: true,
  },
  jobResponsibility: [String],
});

module.exports = moongose.model("Experience", experienceSchema);
