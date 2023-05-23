import crypto from 'crypto'
import mariadb from 'mariadb'
import bcrypt from 'bcrypt'
// import argon2 from 'argon2'

export default defineEventHandler(async (event) => {

  try {
    if (event.context.auth?.user?.superadmin !== 1) {
      throw new Error("You do not have the necessary rights to reset a password.")
    }

    const userID = event.context.params.id

    const password = crypto.randomBytes(6).toString('base64')
    const hash = await bcrypt.hash(password, 10)

    const config = useRuntimeConfig()

    const conn = await mariadb.createConnection({
      host: config.MariaDBHost,
      database: config.MariaDBDefaultDatabase,
      user: config.MariaDBUser,
      password: config.MariaDBPassword,
      port: config.MariaDBPort
    })
    
    const res = await conn.query("UPDATE user SET hash = ? WHERE id = ?", [hash, userID])
    
    if (res.affectedRows !== 1) {
      throw new Error("Password wasn't resetted")
    }

    conn.end()

    return {
      status: "success",
      data: {
        newpassword: password
      }
    }
  } catch (error) {
    return {
      status: "error",
      message: `${error.name}: ${error.message}`,
    }
  }

});