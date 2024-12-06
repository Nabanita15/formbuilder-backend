const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./connection");
const formRoutes=require("./routes/formRoutes")

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", formRoutes);

// MongoDB Connection
const PORT = process.env.PORT || 5000;
connectDB();


// Routes
app.get("/", (req, res) => {
  res.send("Form Builder API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
