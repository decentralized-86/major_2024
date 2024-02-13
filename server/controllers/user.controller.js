const User = require('../models/user.model')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req,res) => {
    const {student_name,branch,gender,college_email,passout_batch,uid,password,degree,avg_cgpa,ssc_marks} = req.body;
    
    try {
        if (!uid || !password) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        const oldUser = await User.findOne({ uid });
        if(oldUser)
        {
            return res.status(409).json({msg: "User already exists!"})
        }
        

        const newUser = await User.create({   
            email,
            password,
        })

        const token = await newUser.generateAuthToken();
        
        res.status(200).json({result: newUser,token})
        
        
    } catch (error) {
        return res.status(500).json({
            err: error, msg:"Internal server error!"
        })
    }
}


const login =  async (req,res) => {
    const {email,password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Provide either email or phone' });
          }
       
      const oldUser = await User.findOne({email})
      if(!oldUser)
      {
            return res.status(404).json({msg: "User does not exists!"})
      }
    
      const correctPassword = await bcrypt.compare(password,oldUser.password)
      if(!correctPassword)
      {
        return res.status(400).json({msg: "Invalid Credentials!"})
      }

      const token = await newUser.generateAuthToken();
    
      res.status(200).json({result: oldUser, token});
    } catch (error){
        return res.status(500).json({err: error, msg:"Internal server error!"})
    }
}

module.exports = {signup,login};