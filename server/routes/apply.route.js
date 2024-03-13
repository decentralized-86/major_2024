const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const { oneClickApply } = require("../controllers/apply.controller");

router.post("/job/apply", auth, oneClickApply);

module.exports = router;
