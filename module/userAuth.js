const db = require("../knex/knex")
const bcrypt = require("bcryptjs")



async function findBy(filter) {
    return await db("user").select("id", "firstName", "lastName", "email","userName","password").where(filter)
}

async function insertUser(user) {
    user.password = bcrypt.hashSync(user.password, 8)
    const [id] = await db("user").insert(user)

    return await findBy({ id })
}



module.exports = {
    findBy,
    insertUser
}