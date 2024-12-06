const mongoose = require("mongoose");
const compSchema = new mongoose.Schema({
  paragraphArea: {
    type: String,
    require: true,
  },
  paragraphQuestion: {
    type: String,
    require: true,
  },
  question1: {
    type: String,
    require: true,
  },
  question2: {
    type: String,
    require: true,
  },
  question3: {
    type: String,
    require: true,
  },
  question4: {
    type: String,
    require: true,
  },
});
const comprehension = mongoose.model("comprehension", compSchema);
module.exports = comprehension;