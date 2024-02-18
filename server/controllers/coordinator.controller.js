const Coordinator = require('../models/coordinator.model')
const User = require('../models/user.model')

const bcrypt = require('bcrypt')

const co_signup = async (req,res) => {
    const {email,password,name,uid,branch,contact} = req.body; 
try {
    if(!email || !password || !name || !uid || !branch || !contact)
    {
        return res.status.json({err: 'All fields are required!'})
    }
    if (contact.length !== 10 || !/^\d+$/.test(contact)) {
        return res.status(400).json({ error: 'Contact number must be a 10-digit number' });
    }
   const isAdmin = email === process.env.ADMIN_EMAIL;

   const oldCoordinator = await Coordinator.findOne({email: email})
   if(oldCoordinator)
   {
        return res.status(400).json({msg: 'Coordinator already exists!'});
   }

   const newCoordinator =  await Coordinator.create({
    name,
    email,
    uid,
    password,
    branch,
    contact,
    isAdmin,
   })


   res.status(200).json({result: newCoordinator})

    
} catch (error) {
    return res.status(500).json({msg: 'Internal server error!'});
}
}

//Coordinator login is in user.controller.js

//Students CRUD: 
const getStudentDetails = async (req,res) => {
    try {
        const studentList = User.find({});
        res.status(200).json({studentList})
        
    } catch (error) {
        return res.status(500).json({err: error,msg: 'Internal server error!'})
    }
}

const updateStudent = async(req,res) => {
    const id = req.params.id;
    try {
        const student = await User.findByIdAndUpdate(id,req.body,{
            runValidators: true,
            new:true
        });
        if(!student)
        {
            return res.status(404).json({msg: `Student does not exists with id:${id}!`});
        }
        res.status(200).json({student})
    } catch (error) {
        return res.status(500).json({err: error,msg: 'Internal server error!'})
    }
}

const deleteStudent = async(req,res) => {
    const id = req.params.id;
    try {
        const student = await User.findByIdAndDelete(id);
        if(!student)
        {
            return res.status(404).json({msg: "Student does not exists!"});
        }
        res.status(200).json({student, msg: `Student deleted successfully with id:${id}`})
    } catch (error) {
        return res.status(500).json({err: error,msg: 'Internal server error!'})
    }
}





module.exports = {co_signup,getStudentDetails,updateStudent,deleteStudent};