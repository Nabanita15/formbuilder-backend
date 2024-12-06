const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  Categories: {
    type: String,
    require: true,
  },
  addCloze: {
    type: String,
    require: true,
  },
  Comprehanension: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("question", QuestionSchema);
