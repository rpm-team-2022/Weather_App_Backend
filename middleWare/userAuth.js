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


module.exports = {
    checkUserData
}