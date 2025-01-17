const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { userMiddleware } = require("./user");

function adminMiddleware(req,res,next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decoded){
        req.adminId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}