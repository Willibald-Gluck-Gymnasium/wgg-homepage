import mariadb from 'mariadb'

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  console.log("test");
  console.log(config);

  const conn = await mariadb.createConnection({
    host: config.MariaDBHost,
    database: config.MariaDBDefaultDatabase,
    user: config.MariaDBUser,
    password: config.MariaDBPassword,
    port: config.MariaDBPort
  })
  
  const res = await conn.query("SELECT `eventdata` FROM `eventdatajson` LIMIT 1")

  conn.end()

  return {
    status: "success",
    data: {
        events: res[0].eventdata
    }
  }

});