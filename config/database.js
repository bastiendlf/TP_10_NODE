const dbPASSWORD = require("./passwordDB");

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: dbPASSWORD.PASSWORD,
  DB: "TPNODE",
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
},
};