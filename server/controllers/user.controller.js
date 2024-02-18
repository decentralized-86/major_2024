const User = require('../models/user.model')
const Coordinator = require('../models/coordinator.model')

const bcrypt = require('bcrypt');


const signup = async (req,res) => {
    const { linkedln_link, resume_url, isAdmin,password,location,student} = req.body;
    
    try {
        if (!student || !password || !location) {
            return res.status(400).json({ error: 'All fields are required!' });
        }
        if (student.contact.length !== 10 || !/^\d+$/.test(student.contact)) {
            return res.status(400).json({ error: 'Contact number must be a 10-digit number' });
        }
        
        if (!student.college_email.endsWith('edu.in')) {
            return res.status(400).json({ error: 'Enter Official email id!' });
        }

        const oldStudent = await User.findOne({ 'student.uid': student.uid, 'student.email': student.college_email});
        if(oldStudent)
        {
            return res.status(409).json({msg: "User already exists!"})
        }
        


    const newStudent = await User.create({
        student: student,
        location: location,
        linkedln_link: linkedln_link,
        resume_url: resume_url,
        password: password,
        isAdmin: isAdmin,
     });


        const token = await newStudent.generateAuthToken();
        
        res.status(200).json({result: newStudent,token})
        
        
    } catch (error) {
        return res.status(500).json({
            err: error, msg:"Internal server error!"
        })
        
    }
}


const login = async (req, res) => {
    const { password, select, email} = req.body; 
    console.log(req.body);
    try {
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Both email and password are required' });
        }


        //Coordinator login auth:
        if(select === 'coordinator')
        {
            const coordinator = Coordinator.findOne({email: email});
            if(!coordinator)
            {
                return res.status(404).json({msg: "Does not exists!"});
            }
            const correctPassword = await bcrypt.compare(password, coordinator.password);
            if (!correctPassword) {
                return res.status(400).json({ msg: "Invalid Credentials!" });
            }

            res.status(200).json({ result: coordinator });
        }
        else if(select === "student"){
            const student = await User.findOne({ 'student.college_email': email}); 

            if(!student)
            {
                return res.status(404).json({msg: "Does not exists!"});
            }
            const correctPassword = await bcrypt.compare(password, student.password);

            if (!correctPassword) {
                return res.status(400).json({ msg: "Invalid Credentials!" });
            }

            const token = await student.generateAuthToken();

            res.status(200).json({ result: student,token });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ err: error, msg: "Internal server error!" });
    }
};



module.exports = {signup,login};