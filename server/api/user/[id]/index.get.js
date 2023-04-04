import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  try {

    const userID = event.context.params.id
  
    const conn = await mariadb.createConnection({
      host: config.MariaDBHost,
      database: config.MariaDBDefaultDatabase,
      user: config.MariaDBUser,
      password: config.MariaDBPassword,
      port: config.MariaDBPort
    })
    
    const res = await conn.query("SELECT * FROM `user` WHERE id = ?", [ userID ])
  
    conn.end()
  
    return {
      status: "success",
      data: {
        user: res
      }
    }
  } catch (error) {
    return {
      status: "error",
      message: `${error.name}: ${error.message}`,
    }
  }
  

});