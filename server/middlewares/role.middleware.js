const Coordinator = require("../models/coordinator.model");

const ensureAdmin = async (req, res, next) => {
  try {
    if (!req.decoded.uid) {
      res.status(404).json({ success: false, message: "Please login." });
    }
    console.log(req.decoded.uid);
    await Coordinator.findOne({ uid: req.decoded.uid })
      .select(isAdmin)
      .then((coordinator) => {
        if (coordinator.isAdmin === true) {
          next();
        } else {
          res.status(200).json({
            success: false,
            message: "Insufficient Permission. Only Admin is allowed.",
          });
        }
      });
  } catch (error) {
    res.status(500).json({ err: error, message: "Something went wrong!" });
  }
};

module.exports = ensureAdmin;
