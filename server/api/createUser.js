import crypto from 'crypto'
import mariadb from 'mariadb'
import bcrypt from 'bcrypt'
// import argon2 from 'argon2'

export default defineEventHandler(async (event) => {

  try {

    const body = await readBody(event)

    if (event.context.auth?.user?.superadmin !== 1) {
      throw new Error("You do not have the necessary rights to create a new user.")
    }
    
    if (body.user?.username == undefined) {
      throw new Error('Body has to have user object user: { username }.')
    }


    const username = body.user.username
    const superadmin = body.user.superadmin || 'false'

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

    const superadminInt = (() => { 
      if (superadmin === true) {
        return 1
      }
      return 0
    })()
    
    const res = await conn.query("INSERT INTO `user` (`username`, `hash`, `superadmin`) VALUES (?, ?, ?)", [username, hash, superadminInt])

    conn.end()

    return {
      status: "success",
      data: {
        password: password
      }
    }
    
  } catch (error) {
    return {
      status: "error",
      message: `${error.name}: ${error.message}`,
    }
  }

  

});