import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  try {
    if (event.context.auth?.user?.superadmin !== 1) {
      throw new Error("You do not have the necessary rights to delete a user.")
    }
  
    const userID = event.context.params.id
  
    const conn = await mariadb.createConnection({
      host: config.MariaDBHost,
      database: config.MariaDBDefaultDatabase,
      user: config.MariaDBUser,
      password: config.MariaDBPassword,
      port: config.MariaDBPort
    })
    
    const res = await conn.query("DELETE FROM `user` WHERE id = ?", [ userID ])
  
    conn.end()

    if (res.affectedRows !== 1) {
      throw new Error("User wasn't deleted")
    }
  
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