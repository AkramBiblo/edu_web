// var mysql = require("mysql");
// exports.con = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
// });

//Real Database Connection
// var mysql = require("mysql");
// exports.con = mysql.createConnection({
//   host: "premium180.web-hosting.com",
//   user: "hoqunwoh_hoque_electronics",
//   password: "$Hoque_123#",
//   database: "hoqunwoh_hoque_electronics"
// })

  function connectToDatabase(database) {
    var mysql = require("mysql");
    con = mysql.createConnection({
      host: "localhost", // Get with the email
      user: "root",
      password: "",
      database: `${database}`,
    });
    return con
  }
  module.exports = { connectToDatabase };
  
// Reserved
//     let con;
//     if (campus == "khulshi_campus") {
//       const getDBInfo = require("../../db");
//       con = getDBInfo.con.con_for_khulshi;
//     } else if (campus == "kadamtali_campus") {
//       const getDBInfo = require("../../db");
//       con = getDBInfo.con.con_for_kadamtali;
//     } else if (campus == "majhirghat_campus") {
//       const getDBInfo = require("../../db");
//       con = getDBInfo.con.con_for_majhirghat;
//     }

// let con_for_khulshi = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "alheldec_khulshi_campus",
// });

// let con_for_kadamtali = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "kadamtali_campus",
// });

// let con_for_majhirghat = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "madrasha",
// });

// exports.con = { con_for_khulshi, con_for_kadamtali, con_for_majhirghat };

// exports.con = () => {
//   let username = getCookie("imdmAdmin");
//   console.log(username)
//   if (username != "") {
//     if (username == "demo") {
//       return mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "madrasha",
//     });
//     }
//   } else {
//     console.log("Connection failed!")
//     username = prompt("Please enter your name:", "");
//     if (username != "" && username != null) {
//       setCookie("username", username, 365);
//     }
//   }
// };

// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected to your database.')
//   });
