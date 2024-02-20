const jobPost = require('../models/jobPost.model');
const { sendNotificationEmailToAllUsers } = require('../services/mail.service');

const post_job = async(req,res) => {
    const body = req.body;
    try {
        const job = await jobPost.create(body);
        res.status(200).json({sucess: true, result: job, message: 'Successfully new job post added.'})
        await sendNotificationEmailToAllUsers(job);
    } catch (error) {
        return res.status(500).json({err: error, message: "Internal server error!"})
    }

}


module.exports = {post_job};