const express = require('express');
const IMDM = express.Router();
var bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
IMDM.use(cookieParser())
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
// Routing
IMDM.get('/', (req, res) => {
    if (req.cookies.imdmAdmin === undefined) {
        res.render('adminLogin', {title: 'Admin Login'})
      } else {
        let con;
        var imdm = req.cookies.imdmAdmin;
        var campus = req.cookies.campus;
        if (campus == "khulshi_campus") {
          const getDBInfo = require("../../db");
          con = getDBInfo.con.con_for_khulshi;
        } else if (campus == "kadamtali_campus") {
          const getDBInfo = require("../../db");
          con = getDBInfo.con.con_for_kadamtali;
        } else if (campus == "majhirghat_campus") {
          const getDBInfo = require("../../db");
          con = getDBInfo.con.con_for_majhirghat;
        }

      con.connect(function (err) {
        var sql = `SELECT * FROM admin WHERE email = "${imdm}"`;
        con.query(sql, function (err, result) {
          if (result.length <= 0) {
            res.render("adminLogin", {
              errorMessage: "Please input correct email and Password",
            });
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
IMDM.post('/login', urlencodedParser, function (req, res, next) {
    
    const email = req.body.email;
    const password = req.body.password;
    const campus = req.body.campus;

    if (campus == '') {
          return res.render("adminLogin", {
              errorMessage: "Please input correct information!",
            });
    }

    let con;
    if (campus == "khulshi_campus") {
      const getDBInfo = require("../../db");
      con = getDBInfo.con.con_for_khulshi;
    } else if (campus == "kadamtali_campus") {
      const getDBInfo = require("../../db");
      con = getDBInfo.con.con_for_kadamtali;
    } else if (campus == "majhirghat_campus") {
      const getDBInfo = require("../../db");
      con = getDBInfo.con.con_for_majhirghat;
    }

    con.connect(function(err) {
      var sql = 'SELECT * FROM admin WHERE email = ? AND password = ?';
      con.query(sql, [email, password], function (err, result) {
        if (result.length <= 0) {
            res.render('adminLogin', {errorMessage: 'Please input correct email and Password'})
        } else {
            let sec = 86400000;
            res.cookie('imdmAdmin', `${email}`, {maxAge: sec});
            res.cookie("campus", `${campus}`, { maxAge: sec });
            res.render('admin', { title: 'Admin', campus: campus})
        }
      });
    });
})

IMDM.get('/change_password/:c', (req, res) => {
  let campus = req.params.c
  res.render('changePassword', { title: 'Change Password', campus: campus })
})

IMDM.post('/change_password', (req, res) => {
  var campus = req.body.campus;
  var oldPass = req.body.oldPassword;
  var newPass = req.body.newPassword;

  if (campus == "khulshi_campus") {
    const getDBInfo = require("../../db");
    con = getDBInfo.con.con_for_khulshi;
  } else if (campus == "kadamtali_campus") {
    const getDBInfo = require("../../db");
    con = getDBInfo.con.con_for_kadamtali;
  } else if (campus == "majhirghat_campus") {
    const getDBInfo = require("../../db");
    con = getDBInfo.con.con_for_majhirghat;
  }

  con.connect(function (err) {
    var sqlQuery = `SELECT * FROM admin WHERE password = "${oldPass}"`;
    con.query(sqlQuery, function (err, result) {
      if (result.length <= 0) {
        res.render("changePassword", {
          errorMessage: "Old password did not match!",
          title: 'Change Password'
        });
      } else {
        // let sql = `CREATE TABLE third_r_4th_5th AS SELECT * FROM first_r_4th_5th;`;
        // con.query(sql, () => {
        //   console.log("Table created");
        // });

        var sql = `UPDATE admin SET password = "${newPass}" WHERE id = "1"`;
        con.query(sql, (err, result) => {
          res.render("admin", { title: "Admin", successMsg: "Password updated successfully!", campus:campus });
        })
        
      }
    });
  });
})

module.exports = IMDM;

