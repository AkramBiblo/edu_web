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
admin.get("/", (req, res) => {
  let database = "test_db"
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(database)
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to your database.')
  });
})
admin.get('/demo', (req, res) => {
    if (req.cookies.campus === undefined) {
        res.render("adminLogin", {title: "Admin Login"});
      } else {
        var campus = req.cookies.campus;
        const getDBInfo = require("../../db");
        const con = getDBInfo.con;

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
    const getDBInfo = require("../../db");
    const con = getDBInfo.con;
    let campus = req.body.campus;
    let password = req.body.password;

    con.connect(function(err) {
      var sql = 'SELECT * FROM admin WHERE iCampus = ? AND password = ?';
      con.query(sql, [campus, password], function (err, result) {
        if (result.length <= 0) {
            res.render('adminLogin', {errorMessage: 'Please input correct email and Password'})
        } else {
            let sec = 86400000;
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
  const getDBInfo = require("../../db");
  const con = getDBInfo.con;
  var campus = req.body.campus;
  var oldPass = req.body.oldPassword;
  var newPass = req.body.newPassword;

  con.connect(function (err) {
    var sqlQuery = `SELECT * FROM admin WHERE iCampus = "${campus}" AND password = "${oldPass}"`;
    con.query(sqlQuery, function (err, result) {
      if (result.length <= 0) {
        res.render("changePassword", {
          errorMessage: "Campus/Password did not match!",
          title: 'Change Password'
        });
      } else {
        // let sql = `CREATE TABLE third_r_4th_5th AS SELECT * FROM first_r_4th_5th;`;
        // con.query(sql, () => {
        //   console.log("Table created");
        // });

        var sql = `UPDATE admin SET password = "${newPass}" WHERE iCampus = "${campus}"`;
        con.query(sql, (err, result) => {
          res.render("admin", { title: "Admin", successMsg: "Password updated successfully!"});
        })
        
      }
    });
  });
})

module.exports = admin;

