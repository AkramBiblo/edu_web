const express = require('express');
const admin = express.Router();
var bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
admin.use(cookieParser())
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// Reserved
// let campus = req.cookies.campus;
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



// function connectToDatabase(database) {
//   var mysql = require("mysql");
//   con = mysql.createConnection({
//     host: "localhost", // Get with the email
//     user: "root",
//     password: "",
//     database: `${database}`,
//   });
//   return con
// }
 
// Routing
admin.get("/demo", (req, res) => {
  let database = "test_db"
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(database)
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to your database.')
  });
})
admin.get('/', (req, res) => {
    if (req.cookies.campus === undefined) {
        res.render("adminLogin", {title: "Admin Login"});
      } else {
        var campus = req.cookies.campus;
        var campus_key = req.cookies.campus_key;
        const getDBInfo = require("../../db");
        let con = getDBInfo.connectToDatabase(campus_key)

      con.connect(function (err) {
        var sql = `SELECT * FROM admin WHERE iCampus = "${campus}"`;
        con.query(sql, function (err, result) {
          if (result.length <= 0) {
            res.render("adminLogin", {title: "Admin Login"});
          } else {
            // let sql = `CREATE TABLE annual_r_6th AS SELECT * FROM first_r_6th;`;
            // con.query(sql, () => {
            //   console.log("Table created");
            // });
            res.render("admin", { title: "Admin", campus: campus});
          }
        });
      });
}})

// Admin Login 
admin.post('/login', urlencodedParser, function (req, res, next) {
    
    let campus = req.body.campus;
    let password = req.body.password;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase("admin")
    con.connect(function(err) {
      var sql = 'SELECT * FROM admin WHERE campus = ? AND password = ?';
      con.query(sql, [campus, password], function (err, result) {
        if (result.length <= 0) {
            res.render('adminLogin', {errorMessage: 'Please input correct Campus name and Password'})
        } else {
            let campus_key = result[0].setup_key;
            let sec = 86400000;
            res.cookie("campus_key", `${campus_key}`, { maxAge: sec });
            res.cookie("campus", `${campus}`, { maxAge: sec });
            res.render('admin', { title: 'Admin'})
        }
      });
    });
})

admin.get('/change_password', (req, res) => {
  res.render('changePassword', { title: 'Change Password'})
})

admin.post('/change_password', (req, res) => {
  
  var campus_key = req.body.campus_key;
  var campus = req.body.campus;
  var oldPass = req.body.oldPassword;
  var newPass = req.body.newPassword;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase("admin")
  con.connect(function (err) {
    var sqlQuery = `SELECT * FROM admin WHERE campus = "${campus}" AND setup_key = "${campus_key}" AND password = "${oldPass}"`;
    con.query(sqlQuery, function (err, result) {
      if (result.length <= 0) {
        res.render("changePassword", {
          errorMessage: "One of the inputes did not match!",
          title: 'Change Password'
        });
      } else {
        var sql_1 = `UPDATE admin SET password = "${newPass}" WHERE setup_key = "${campus_key}"`;
        con.query(sql_1, (err, result) => {})

        con = getDBInfo.connectToDatabase(campus_key)
        var sql_2 = `UPDATE admin SET password = "${newPass}" WHERE iCampus = "${campus}"`;
        con.query(sql_2, (err, result) => {
          res.render("admin", { title: "Admin", successMsg: "Password updated successfully!"});
        })
      }
    });
  });
})

module.exports = admin;

