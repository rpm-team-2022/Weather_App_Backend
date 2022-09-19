const express = require('express')
const router = express()
const userAuth_db = require("../module/userAuth")
const { checkUserData } = require("../middleWare/userAuth")


router.post("/register", checkUserData, async (req, res, next) => {
    try {
        const { email, userName } = req.body
        const check_userName = await userAuth_db.findBy({ userName })
        const check_email = await userAuth_db.findBy({ email })
        if (check_userName.length > 0) {
            res.status(409).json({ message: "User name exist, please choose a different user name!" })
        } else if (check_email.length > 0) {
            res.status(409).json({ message: "User email exist, please choose a different email!" })
        } else {
            await userAuth_db.insertUser(req.body).then((resp) => {
                if (resp.length > 0) {
                    res.status(200).json({ message: "User has signed,congrats!" })
                } else {
                    res.status(422).json({ message: "Conflict data, please contact support!" })
                }
            })
        }
    } catch (err) {
        next(err)
    }


})


module.exports = router;