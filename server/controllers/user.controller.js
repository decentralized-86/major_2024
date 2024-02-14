const User = require('../models/user.model')

const bcrypt = require('bcrypt');


const signup = async (req,res) => {
    const { linkedln_link, resume_url, isAdmin,password,location,student} = req.body;
    
    try {
        if (!student || !password || !location) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const oldUser = await User.findOne({ 'student.uid': student.uid });
        if(oldUser)
        {
            return res.status(409).json({msg: "User already exists!"})
        }
        


    const newUser = await User.create({
        student: student,
        location: location,
        linkedln_link: linkedln_link,
        resume_url: resume_url,
        password: password,
        isAdmin: isAdmin,
     });


        const token = await newUser.generateAuthToken();
        
        res.status(200).json({result: newUser,token})
        
        
    } catch (error) {
        return res.status(500).json({
            err: error, msg:"Internal server error!"
        })
        
    }
}


const login = async (req, res) => {
    const { password, student: { uid } } = req.body; // Destructure `uid` from `student` in `req.body`
    
    try {
        if (!uid || !password) {
            return res.status(400).json({ error: 'Both uid and password are required' });
        }
       
        const oldUser = await User.findOne({ 'student.uid': uid }); // Find user by uid
        
        if (!oldUser) {
            return res.status(404).json({ msg: "User does not exist!" });
        }
        
        const correctPassword = await bcrypt.compare(password, oldUser.password);
        
        if (!correctPassword) {
            return res.status(400).json({ msg: "Invalid Credentials!" });
        }

        const token = await oldUser.generateAuthToken();
    
        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        return res.status(500).json({ err: error, msg: "Internal server error!" });
    }
};



module.exports = {signup,login};