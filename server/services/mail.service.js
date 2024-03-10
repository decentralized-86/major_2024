const nodemailer = require("nodemailer");

const User = require("../models/user.model");
const Coordinator = require("../models/coordinator.model");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASS,
  },
});

// Function to send notification email
const sendNotificationEmailToAllUsers = async (jobPost) => {
  try {
    const users = await User.find();
    const userEmails = users.map((user) => user.college_email);

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: userEmails.join(", "),
      subject: "New Job Post Added",
      text: `A new job post "${jobPost.job_info.job_profile}" has been added. Check it out!`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ err: error, message: "Email service error!" });
  }
};

const trainingNotificationToAllUsers = async (training) => {
  try {
    const users = await User.find(); // Assuming you have a User model
    const userEmails = users.map((user) => user.college_email);

    const mailOptions = {
      from: process.env.SENDER_EMAIL, // replace with your email
      to: userEmails.join(", "), // Comma-separated list of all user emails
      subject: "New Job Post Added",
      text: `Training session on "${training.title}". Check it out!`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ err: error, message: "Email service error!" });
  }
};

const addCoordinatorMail = async () => {
  try {
    const coordinators = await Coordinator.find();
    const coordinatorEmails = coordinators.map(
      (coordinator) => coordinator.email
    );

    const mailOptions = {
      from: process.env.SENDER_EMAIL, // replace with your email
      to: coordinatorEmails.join(", "), // Comma-separated list of all user emails
      subject: "Invitation to become a Coordinator on CPMS",
      text: `Sign Up  as coordinator using the below link`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ err: error, message: "Email service error!" });
  }
};

module.exports = {
  sendNotificationEmailToAllUsers,
  trainingNotificationToAllUsers,
  addCoordinatorMail,
};
