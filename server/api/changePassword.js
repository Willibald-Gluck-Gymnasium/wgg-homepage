// import crypto from 'crypto'
import mariadb from 'mariadb'
import bcrypt from 'bcrypt'
// import argon2 from 'argon2'

export default defineEventHandler(async (event) => {

  try {
    const body = await readBody(event)

    if (event.context.auth?.user === undefined) {
      throw new Error("You aren't logged in.")
    }
    
    const currrentUserID = event.context.auth?.user.id

    const oldpassword = body.oldpassword
    const newpassword = body.newpassword

    const login = await $fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: {
        username: event.context.auth.user.username,
        password: oldpassword
      }
    })

    if (login.status !== 'success') {
      throw new Error("Falsches Passwort.")
    }

    const hash = await bcrypt.hash(newpassword, 10)

    const config = useRuntimeConfig()

    const conn = await mariadb.createConnection({
      host: config.MariaDBHost,
      database: config.MariaDBDefaultDatabase,
      user: config.MariaDBUser,
      password: config.MariaDBPassword,
      port: config.MariaDBPort
    })
    
    const res = await conn.query("UPDATE user SET hash = ? WHERE id = ?", [hash, currrentUserID])
    
    if (res.affectedRows !== 1) {
      throw new Error("Password wasn't changed")
    }

    conn.end()

    return {
      status: "success",
      data: null
    }
  } catch (error) {
    return {
      status: "error",
      message: `${error.name}: ${error.message}`,
    }
  }

});