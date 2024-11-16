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

teachers.get("/all", (req, res) => {
   let campus = req.cookies.campus;
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
    res.render("teachersLogin", { title: "Teachers login" });
});

teachers.get("/:campus/class/:id", (req, res) => {
  const id = req.params.id;
  let campus = req.params.campus;

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
  con.connect(function (err) {
    var sql = `SELECT * FROM allstudents WHERE cid = '${id}'`;
    con.query(sql, function (err, result) {
      if (result.length <= 0) {
        res.render("allStudentsT2", {
          message: result,
          cid: id,
          campus: campus,
        });
      } else {
        res.render("allStudentsT2", {
          message: result,
          cid: id,
          campus: campus
        });
      }
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
    
    // const name = req.body.name;
    let m = req.body.email;
    let p = req.body.password;
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
    
    con.connect(function(err) {
      
          // if (err) throw err;
        var sql = `SELECT * FROM teachers WHERE email = ? AND password = ?`;
        // var sql = 'SELECT * FROM teachers WHERE email = ? AND password = ?';
        con.query(sql, [m, p], function (err, result) {
            if (result.length <= 0) { 
              //  return res.render('allTrainers', {errorMessage: 'Please input correct Userid or Password'})
              return res.status(404).send("<h1>Not found</h1>")
            } else {
              if (req.cookies.imdm === undefined) {
                let sec = 86400000;
                res.cookie("imdm", `${m}`, { maxAge: sec });
                res.cookie("campus", `${campus}`, { maxAge: sec });
              } else if (
                req.cookies.imdm !== `${m}` &&
                req.cookies.campus !== `${campus}`
              ) {
                res.cookie("imdm", `${m}`);
                res.cookie("campus", `${m}`);
              }
            res.render("teachersProfile", {
            message: result[0]
            }, 
          )}
        });
    });
  })

teachers.get("/remove/:campus/:id", (req, res) => {
    const id = req.params.id;
    let campus = req.params.campus;
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
  
      var sql = "SELECT * FROM teachers WHERE id = ?";
      con.query(sql, [id], function (err, result) {
        if (result.length <= 0) {
          
        } else {
          for (const data of result) {
            let file = data.file
            String(file)
          const sql = `DELETE FROM teachers WHERE id = ${id}`
              con.query(sql, function (err, result) {})
              let f = path.join(__dirname,"../../public/uploadedFiles/"+`${file}`);
              fs.unlinkSync(f)
              res.redirect('/teachers/all')
          }
          
        }
        
      });
  
    });
  });

module.exports = teachers