// import crypto from 'crypto'
import mariadb from 'mariadb'
import bcrypt from 'bcrypt'
// import argon2 from 'argon2'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (event.context.auth?.user?.superadmin !== 1) {
    return {
      status: "error",
      message: "You do not have the necessary rights to create a new user."
    }
  }
  
  const username = body.username
  const password = body.password
  // const salt = crypto.randomBytes(16).toString('base64');
  
  // const hash = await argon2.hash(salt + password);

  const hash = await bcrypt.hash(password, 10)

  const config = useRuntimeConfig()

  const conn = await mariadb.createConnection({
    host: config.MariaDBHost,
    database: config.MariaDBDefaultDatabase,
    user: config.MariaDBUser,
    password: config.MariaDBPassword,
    port: config.MariaDBPort
  })
  
  const res = await conn.query("INSERT INTO `user` (`username`, `hash`) VALUES (?, ?)", [username, hash])

  conn.end()

  return {
    status: "success",
    data: null
  }

});