const express = require('express')
const router = express()
const userHistory_db = require("../module/userHistory")
const { restricted } = require("../middleWare/userAuth")

router.post("/addToHistory", restricted, async (req, res, next) => {
    try {
        await userHistory_db.addToHistory(req.body).then(resp => {
            if (resp.length > 0) {
                res.json({ message: "History added!" })
            } else {
                res.json({ message: "Somethig went wrong!" })
            }
        })
    } catch (err) {
        next(err)
    }
})


router.get('/userHistory/:id', restricted,async (req, res, next) => {
    try {

        await userHistory_db.getHistoryById(req.params.id).then(resp => {
            
            let history=Object.values(JSON.parse(JSON.stringify(resp)));
            if(history.length>0){
                res.json({history:history})
            }else{
                res.json({history:"User has no history!"})

            }
        })
    } catch (err) {
        next(err)
    }
})






module.exports = router;