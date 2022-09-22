const db = require("../knex/knex")


async function addToHistory(weatherInfo) {
    return await db("userHistory").insert(weatherInfo)
}

async function getHistoryById(id){
    return await db("userHistory as UH").select("UH.*").where("UH.user_id",id)
}


module.exports = {
    addToHistory,
    getHistoryById
}