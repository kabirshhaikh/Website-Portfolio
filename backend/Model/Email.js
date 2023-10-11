const moongose = require("mongoose");
const Schema = moongose.Schema;

const Email = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    reuqired: true,
  },
});

module.exports = moongose.model("Email", Email);
