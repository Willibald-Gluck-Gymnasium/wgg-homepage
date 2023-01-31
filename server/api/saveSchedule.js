import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Auth
  if (event.context.auth?.user === undefined) {
    return {
      status: "error",
      message: "You do not have the necessary rights to make changes to the schedule."
    }
  }
  
  const events = JSON.stringify(body.events)


  const config = useRuntimeConfig()

  const conn = await mariadb.createConnection({
    host: config.MariaDBHost,
    database: config.MariaDBDefaultDatabase,
    user: config.MariaDBUser,
    password: config.MariaDBPassword,
    port: config.MariaDBPort
  })
  
  const res = await conn.query("UPDATE `eventdatajson` SET `eventdata` = ?", [ events ])

  conn.end()

  return {
    status: "success",
    data: null
  }

});