// let campus_key = req.cookies.campus_key;
//     const getDBInfo = require("../../db");
//     con = getDBInfo.connectToDatabase(campus_key)

function connectToDatabase(database) {
  var mysql = require("mysql");
  let con = mysql.createConnection({
    host: "localhost", // Get with the email
    user: "root",
    password: "",
    database: `${database}`,
  });
  return con
}

// let campus_key = req.cookies.campus_key;
// const getDBInfo = require("../../db");
// let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name"])
// setTimeout(() => {
//   let class_name = dataQuery[0]
//   let section_name = dataQuery[1]
//   let shift_name = dataQuery[2]
//   res.render('teachersActivity', {
//     title: 'Teachers Activities',
//     class_name: class_name,
//     section_name: section_name,
//     shift_name: shift_name
//     })
// }, 2000)

function getDataFrom(db, arr) {
  let data = [];
  var mysql = require("mysql");
  let con = mysql.createConnection({
    host: "localhost", // Get with the email
    user: "root",
    password: "",
    database: `${db}`,
  });
  
  con.connect((err) => {
    for (let i = 0; i < arr.length; i++) {
      const tableName = arr[i];
      let sql = `SELECT * FROM ${tableName}`
      con.query(sql, (err, result) => {
        data.push(result)
      })
    }
  })
  
  return data
}

// Reserved special code for retreaving data from the database
// let db = "wds"
//     let query_1 = {table:["purchase"],Query:["status"],value:["Returned"]} // Query Sample 1
//     let query_3 = {table:["customer"],Query:["name","c_type"], value:["C-2","Dealer"]} // Query Sample 2
//     let queryArr = [query_1]
//     const getDBInfo = require("../../db");
//     let data = getDBInfo.getDataFromDB(db, queryArr)
//     setTimeout(() => {
//         res.render("home", {title: "Home", data: data})
//     }, 4000)

function getDataFromDB(db, arr) {
  let data = [];
  var mysql = require("mysql");
  let con = mysql.createConnection({
    host: "localhost", // Get with the email
    user: "root",
    password: "",
    database: `${db}`,
  });
  
  con.connect((err) => {
    
    for (let i = 0; i < arr.length; i++) {
      const QueryData = arr[i];
      let QTable = QueryData.table
      let QueryArr = QueryData.Query
      let valueArr = QueryData.value
      
      if (QueryArr.length == undefined || QueryArr.length == null || QueryArr.length <= 0) {
        let sql = `SELECT * FROM ${QTable}`
          con.query(sql, (err, result) => {
            data.push(result)
          })
      } else {
        let string = `SELECT * FROM ${QTable} WHERE `
        let sqlArr = []
        for (let j = 0; j < QueryArr.length; j++) {
          const Query = QueryArr[j];
          const value = valueArr[j]
          sqlArr.push(`${Query} = "${value}"`)

          if (j !== (QueryArr.length - 1)) {
            sqlArr.push(" AND ")
          }
        }
        setTimeout(() => {
          let strSqlArr = sqlArr.toString()
          let replacedString = strSqlArr.replaceAll(",", "")
          let sql = string.concat(replacedString)
          con.query(sql, (err, result) => {
            if (result.length > 0) {
              data.push(result)
            } else {
              data.push("empty")
            }
          })
        }, 1000);
      }
      
    }
  })
  
  return data

  // setTimeout(() => {
  //   console.log(data)
  // }, 2000);
}
module.exports = { connectToDatabase, getDataFrom, getDataFromDB};

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
