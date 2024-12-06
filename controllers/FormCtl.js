const { get } = require("mongoose");
const Form = require("../models/Form");
const Response = require("../models/Response");

module.exports = {
  createForm: async (req, res) => {
    try {
       const form = new Form(req.body);
       await form.save();
       res.status(201).json(form);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getForm: async (req, res) => {
    try {
      const form = await Form.findById(req.params.id);
      if (!form) return res.status(404).json({ error: "Form not found" });
      res.json(form);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  submitForm: async (req, res) => {
     try {
       const response = new Response({
         formId: req.params.id,
         responses: req.body.responses,
       });
       await response.save();
       res.status(201).json(response);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
  }
};
