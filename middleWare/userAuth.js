
const jwt = require('jsonwebtoken');



function checkUserData(req, res, next) {
    const { firstName, lastName, email, userName, password } = req.body;
    if (!firstName || !lastName || !email || !userName || !password) {
        res.status(400).json({
            message:
                "Please make sure to fill all the required fields to register.",
        });
    } else {
        next();
    }
}



// AUTHENTICATION
const restricted = (req, res, next) => {
    
    const token = req.headers.authorization;

    if (token == null) {
        next({ status: 401, message: 'Not authorized' });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      
        if (err) {
            console.log(err);
            next({ status: 401, message: 'Not authorized' });
            return;
        }
        console.log(decodedToken)
        req.decodedToken = decodedToken;
        next();
    });
}

// AUTHORIZATION
// const checkRole = role => (req, res, next) => {
//     if (req.decodedToken.role !== role) {
//         next({ status: 403, message: 'Forbidden' });
//     } else {
//         next()
//     }
// }


const checkData=(req,res,next)=>{
 if(req.body.city_name===""){
    next({ status: 400, message: 'Missing data' })
 }
}


module.exports = {
    checkUserData,
     restricted,
    // checkRole,
    checkData
}