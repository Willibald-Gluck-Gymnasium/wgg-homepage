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
  
  const res = await conn.query("SELECT `eventdata` FROM `eventdatajson` LIMIT 1")

  conn.end()

  let events
  try {
    events = JSON.parse(JSON.stringify(res[0].eventdata))
  } catch (error) {
    events = error
  }
  

  return {
    status: "success",
    data: {
      events: events,
      unparsedEvents: res[0].eventdata,
      rawResponse: res
    }
  }

});