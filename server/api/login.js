import jwt from 'jsonwebtoken'
import mariadb from 'mariadb'
import bcrypt from 'bcrypt'
import { hash } from 'ohash';


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const username = body.username
  const password = body.password
  
  const config = useRuntimeConfig()

  const conn = await mariadb.createConnection({
    host: config.MariaDBHost,
    database: config.MariaDBDefaultDatabase,
    user: config.MariaDBUser,
    password: config.MariaDBPassword,
    port: config.MariaDBPort
  })

  const res = await conn.query("SELECT `id`, `hash`, `superadmin` FROM `user` WHERE (`username` = ?)", [username])

  if (res[0]?.id === undefined) {
    return {
      status: 'error',
      message: 'Benutzer wurde nicht gefunden',
      data: {
        type: 'user not found'
      }
    }
  }

  const isPasswordValid = await bcrypt.compare(password, res[0].hash)

  if (isPasswordValid !== true) {
    return {
      status: 'error',
      message: 'Das Passwort ist inkorrekt',
      data: {
        type: 'password invalid'
      }
    }
  }

  const user = {
    id: res[0].id,
    username: username,
    superadmin: res[0].superadmin
  }
  
  const token = await jwt.sign({ user }, config.JWTSecret)

  return {
    status: 'success',
    data: {
      token: token
    }
  }
});