const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  questionText: { type: String, required: true },
  image: { type: String },
  options: [{ type: String }], // For Categorize or other options
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String },
  questions: [QuestionSchema],
});


module.exports = mongoose.model("Form", FormSchema);
