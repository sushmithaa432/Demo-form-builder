const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  fullName: String,
  dateOfBirth: Date,
  gender: String,
  maritalStatus: String,
  contactNumber: String,
  email: String,
  residentialAddress: String,
  emergencyContactName: String,
  emergencyContactNumber: String,
  nationality: String,
  employeeID: String,
  department: String,
  designation: String,
  dateOfJoining: Date,
  workLocation: String,
  employmentType: String,
  supervisorName: String,
  educationalQualification: String,
  previousWorkExperience: Number,
  bankDetails: String,
});

// Employee Model
const Employee = mongoose.model('Employee', employeeSchema);

// Routes
app.post('/api/employees', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee data saved successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(Server running on port ${PORT}));