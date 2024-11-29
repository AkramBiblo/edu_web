const express = require("express");
const teachers = express.Router();
var bodyParser = require("body-parser");
const fs = require('fs')
const path = require('path');
const { resolve } = require("path");
const { rejects } = require("assert");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
let cookieParser = require("cookie-parser");
teachers.use(cookieParser());
// Add new Student
teachers.get("/add", (req, res) => {
    res.render("teacherRagisterForm", { title: "Teachers New Registration Form" });
});

teachers.get("/classActivities", (req, res) => {
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name"])
    setTimeout(() => {
      let class_name = dataQuery[0]
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      res.render('teachersActivity', {
        title: 'Teachers Activities',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name
        })
    }, 2000)
})

teachers.get("/all", (req, res) => {
  let campus_key = req.cookies.campus_key
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
  con.connect(function (err) {

    var sql = "SELECT * FROM teachers";
    con.query(sql, function (err, result) {

      if (result.length <= 0) {
        res.render("allTeachers");
        // res.send("No students available. <a href='/register'>Add new student</a>");
      } else {
        res.render("allTeachers", {
          message: result,
        });
      }
    });
  });
});

teachers.get("/login", (req, res) => {
    if (req.cookies.campus_key !== undefined && req.cookies.teachersUid !== undefined && req.cookies.teachersP !== undefined) {
      let m = req.cookies.teachersUid;
      let p = req.cookies.teachersP;
      let campus_key = req.cookies.campus_key
      const getDBInfo = require("../../db");
      let con = getDBInfo.connectToDatabase(campus_key)
      
      con.connect(function(err) {
            if (err) {
              res.render("teachersLogin", { title: "Teachers login" });
            } else {
              var sql = `SELECT * FROM teachers WHERE email = ? AND password = ?`;
              con.query(sql, [m, p], function (err, result) {
                  if (result.length <= 0) { 
                    res.render("teachersLogin", { title: "Teachers login" });
                  } else {
                    res.render("teachersProfile", {
                      message: result[0]
                    }, 
                )}
              });
            }
      });
    } else {
      res.render("teachersLogin", { title: "Teachers login" });
    }
});

teachers.get("/attendance/:class", (req, res) => {
  let class_name = req.params.class;
  let campus_key = req.cookies.campus_key
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
  con.connect(function (err) {
    var sql = `SELECT * FROM allstudents WHERE preferredClass = "${class_name}"`;
    con.query(sql, function (err, result) {
      let students = result
      const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name"])
    setTimeout(() => {
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      res.render('allStudentsT2', {
        title: 'Student List',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name,
        message: students,
        })
    }, 2000)
    });
  });
});

teachers.post("/activity", (req, res) => {
    let campus = req.body.campus;
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
    const name = req.body.name;
    const pass = req.body.password;
    con.connect(function (err) {

        var sql = `SELECT * FROM teachers WHERE name = ? AND password = ?`;
        con.query(sql, [name, pass], function (err, result) {
            if (result.length <= 0) {
                res.render('teachersLogin', {errorMessage: 'Please input correct Userid or Password'})
            } else {
                res.render("teachersActivity", {
                    welcomeMsg: 'Welcome to teachers activity',
                    title: "Teachers activity",
                    campus: campus
                });
            }
        });
    });
});

teachers.post('/login', urlencodedParser, function (req, res, next) {
    let m = req.body.email;
    let p = req.body.password;
    let campus_key = req.body.campus_key
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
    
    con.connect(function(err) {
          if (err) {
            res.render("teachersLogin", { title: "Teachers login", errorMessage: "Kindly Input correct Campus Key" });
          } else {
            var sql = `SELECT * FROM teachers WHERE email = ? AND password = ?`;
            con.query(sql, [m, p], function (err, result) {
                if (result.length <= 0) { 
                  res.render("teachersLogin", { title: "Teachers login", errorMessage: "Kindly Input correct User Id & Password!" });
                } else {
                  if (req.cookies.campus_key == undefined) {
                    let sec = 86400000;
                    res.cookie("campus_key", `${campus_key}`, { maxAge: sec });
                    res.cookie("teachersUid", `${m}`, { maxAge: sec });
                    res.cookie("teachersP", `${p}`, { maxAge: sec });
                  }
                res.render("teachersProfile", {
                  message: result[0]
                }, 
              )}
            });
          }
        
    });
  })

teachers.get("/remove/:id", (req, res) => {
    const id = req.params.id;
    let campus_key = req.cookies.campus_key
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
  
    con.connect(function (err) {
  
      var sql = "SELECT * FROM teachers WHERE id = ?";
      con.query(sql, [id], function (err, result) {
        if (result.length <= 0) {
          var sql_ = "SELECT * FROM teachers";
          con.query(sql_, function (err, result) {
            if (result.length <= 0) {
              res.render("allTeachers", {errorMessage: "This email has already been taken.",});
              // res.send("No students available. <a href='/register'>Add new student</a>");
            } else {
              res.render("allTeachers", {
                message: result,
                errorMessage: "This email has already been taken.",
              });
            }
          });
        } else {
          for (const data of result) {
            let file = data.file
            String(file)
          const sql = `DELETE FROM teachers WHERE id = "${id}"`
              con.query(sql, function (err, result) {})
              let f = path.join(__dirname,"../../public/uploadedFiles/"+`${file}`);
              fs.unlinkSync(f)
              var sql_2 = "SELECT * FROM teachers";
              con.query(sql_2, function (err, result) {
                if (result.length <= 0) {
                  res.render("allTeachers", {successMsg: "Teacher removed successfully!",});
                  // res.send("No students available. <a href='/register'>Add new student</a>");
                } else {
                  res.render("allTeachers", {
                    message: result,
                    successMsg: "Teacher removed successfully!",
                  });
                }
              });
          }
          
        }
        
      });
  
    });
  });

module.exports = teachers