import crypto from 'crypto'
import mariadb from 'mariadb'
import argon2 from 'argon2'

export default defineEventHandler(async (event) => {
  const body = readBody(event)
  
  const username = 'alex'
  const password = 'Alex2413'
  const salt = crypto.randomBytes(16).toString('base64');
  
  const hash = await argon2.hash(salt + password);

  const conn = await mariadb.createConnection({
    host: '85.236.38.213:3306',
    user: 'nuxtserver',
    password: '3!u0Xo69z'
  })
  
  const res = await conn.query("INSERT INTO `user` (`username`, `hash`, `salt`) VALUES (?, ?, ?)", [username, hash, salt])

  conn.end()

  return {success: true}

});