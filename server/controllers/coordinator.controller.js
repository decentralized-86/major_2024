const Coordinator = require("../models/coordinator.model");
const User = require("../models/user.model");

const bcrypt = require("bcrypt");

const co_signup = async (req, res) => {
  const { email, password, name, uid, branch, contact } = req.body;
  try {
    if (!email || !password || !name || !uid || !branch || !contact) {
      return res.status.json({ err: "All fields are required!" });
    }
    if (contact.length !== 10 || !/^\d+$/.test(contact)) {
      return res
        .status(400)
        .json({ error: "Contact number must be a 10-digit number" });
    }

    const oldCoordinator = await Coordinator.findOne({ email: email });
    if (oldCoordinator) {
      return res.status(400).json({ msg: "Coordinator already exists!" });
    }
    if (email === process.env.ADMIN_EMAIL) {
      isAdmin = true;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCoordinator = await Coordinator.create({
      name,
      email,
      uid,
      password: hashedPassword,
      branch,
      contact,
      isAdmin,
    });

    res.status(200).json({ result: newCoordinator });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error!" });
  }
};

//Coordinator login is in user.controller.js

//Students CRUD:
const getStudentDetails = async (req, res) => {
  try {
    const studentList = await User.find({});
    res.status(200).json({ studentList });
  } catch (error) {
    return res.status(500).json({ err: error, msg: "Internal server error!" });
  }
};

const getStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await User.findById(id);
    if (!student) {
      return res
        .status(404)
        .json({ msg: `Student does not exists with id:${id}!` });
    }
    res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error, msg: "Internal server error!" });
  }
};

const updateStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedStudent = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedStudent) {
      return res
        .status(404)
        .json({ msg: `Student does not exist with id: ${id}` });
    }

    res.status(200).json({ student: updatedStudent });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ err: error, msg: "Internal server error!" });
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await User.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ msg: "Student does not exists!" });
    }
    res.status(200).json({
      student,
      msg: `Student deleted successfully with id:${student.uid}`,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ err: error, msg: "Internal server error!" });
  }
};

module.exports = {
  co_signup,
  getStudentDetails,
  getStudent,
  updateStudent,
  deleteStudent,
};
