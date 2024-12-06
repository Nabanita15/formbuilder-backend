const express = require("express");
const router = express.Router();
const Question = require("../controllers/QuestionCtl");
const comprehension = require("../controllers/ComprehensionCtl");

//....question routes....
router.post("/question", Question.createQuestion);
router.get("/question", Question.getAllQuestions);
router.delete("/question/:id", Question.deleteQuestion);
router.put("/question/:id", Question.updateQuestion);

//.....Comprehension routes.............
router.post("/comprehension", comprehension.createComprehension);
router.get("/comprehension", comprehension.getAllComprehensions);
router.delete("/comprehension/:id", comprehension.deleteComprehension);
router.put("/comprehension/:id", comprehension.updateComprehension);


module.exports = router;
