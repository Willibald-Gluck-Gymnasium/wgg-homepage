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

  let events = res[0].eventdata
  if (typeof events !== 'object') {
    events = JSON.parse(events)
  }
  

  return {
    status: "success",
    data: {
      events: events,
    }
  }

});