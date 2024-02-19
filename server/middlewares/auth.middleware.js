const jwt = require('jsonwebtoken')

const auth = async(req,res,next) => {

    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader) {
            return res.status(401).json({ error: 'jwt must be provided' });
          }

        const token = authHeader.split(' ')[1];
        const  decodeData = jwt.verify(token,process.env.JWT_SECRET);

        const {email,phone,id} = decodeData;
        req.user = {email,phone,id}
        
        next();
    } catch (error) {
        return res.status(500).json({err: error})
    }

}

module.exports = auth;