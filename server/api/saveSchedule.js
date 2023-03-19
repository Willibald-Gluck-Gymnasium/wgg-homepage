import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {
  try {

    const body = await readBody(event)

    // Auth
    if (event.context.auth?.user === undefined) {
      return {
        status: "error",
        message: "You do not have the necessary rights to make changes to the schedule."
      }
    }

    const events = body.events

    function sortByTimestamp(a, b) {
      if (a.timestamp < b.timestamp) return -1
      if (a.timestamp > b.timestamp) return 1
      return 0
    }
    events.sort(sortByTimestamp)

    const eventsJSON = JSON.stringify(events)

    const config = useRuntimeConfig()

    const conn = await mariadb.createConnection({
      host: config.MariaDBHost,
      database: config.MariaDBDefaultDatabase,
      user: config.MariaDBUser,
      password: config.MariaDBPassword,
      port: config.MariaDBPort
    })
    
    const res = await conn.query("UPDATE `eventdatajson` SET `eventdata` = ?", [ eventsJSON ])

    conn.end()

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await timeout(1000)

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