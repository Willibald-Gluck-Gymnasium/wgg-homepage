import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  const conn = await mariadb.createConnection({
    host: config.MariaDBHost,
    database: config.MariaDBDefaultDatabase,
    user: config.MariaDBUser,
    password: config.MariaDBPassword,
    port: config.MariaDBPort
  })
  
  const res = await conn.query("SELECT * FROM `user`")

  conn.end()

  return {
    status: "success",
    data: {
      user: res,
    }
  }

});