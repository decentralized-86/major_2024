const Jobpost = require("../models/jobPost.model");

const oneClickApply = async (req, res) => {
  try {
    const { uid,company_id } = req.body;
    console.log("Job Post ID:", company_id);

    const jobPost = await Jobpost.findOne({ _id: company_id });

    if (!jobPost) {
      return res.status(404).json({ error: "Job post not found" });
    }

    const isAlreadyApplied = jobPost.candidates.some(
      (candidate) => candidate.uid === uid
    );

    if (isAlreadyApplied) {
      return res.status(400).json({ error: "Student already applied" });
    }

    jobPost.candidates.push({
      uid: uid,
      timestamp: new Date(),
    });

    const data = await jobPost.save();

    res.status(200).json({ success: true, message: "Successfully Applied" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ err: error, message: "Internal server error!" });
  }
};

module.exports = { oneClickApply };
