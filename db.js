var mysql = require("mysql");
exports.con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

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
