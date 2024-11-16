
const express = require('express');
const students = express.Router();
var bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
students.use(cookieParser())
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

students.get('/all', function (req, res) {
    
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

    con.connect(function(err) {

    //   if (err) throw err;
      var sql = 'SELECT * FROM allstudents';
      con.query(sql, function (err, result) {
        res.render("allStudents", {
            message: result,
            campus: campus
        });
      });
    });
})


students.get('/login', (req, res) => {
  if (req.cookies.imdm === undefined) {
    res.render('studentLoginForm', {title: 'Login'})
  } else {
    let con;
    var imdm = req.cookies.imdm;
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

  con.connect(function(err) {

  //   if (err) throw err;
    var sql = `SELECT * FROM allstudents WHERE sid = "${imdm}"`;
    con.query(sql, function (err, result) {
      if (result.length <= 0) {
        res.render('studentLoginForm', {errorMessage: 'Please input correct Userid or Password'})
      } else {
        res.render('sProfile_final_2', {message: {result:result[0], welcomeMessage: 'Welcome to your profile'}})
      }
    });
  });
  }
})

// POST
students.post('/updateProfile', (req, res) => {
  let sid = req.body.sid
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
    var sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`;
    con.query(sql, function (err, result) {
      res.render('newRegisterForm', {message: {result:result[0]}})
    });
  });
})

students.post('/removeProfile', (req, res) => {
  let sid = req.body.sid
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

  con.connect(function (err) {
    var sql = `DELETE FROM allstudents WHERE sid = "${sid}"`;
    con.query(sql, function (err, result) {
      var sql = 'SELECT * FROM allstudents';
      con.query(sql, function (err, result) {
        res.render("allStudents", {
          message: result,
          campus: campus
        });
      });
    });
  });
})

students.post('/login', urlencodedParser, function (req, res, next) {
  let campus = req.body.campus;
  const sid = req.body.name;
  const password = req.body.password;

  let con;
 if (campus == "") {
    return res.render("studentLoginForm", {
      errorMessage: "Please select campus!",
    });

 } else if (campus == "khulshi_campus") {
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
    var sql = `SELECT * FROM allstudents WHERE sid = '${sid}' AND password = '${password}'`;
    con.query(sql, function (err, result) {
      if (result.length <= 0) {
        res.render('studentLoginForm', {errorMessage: 'Please input correct Userid or Password'})
      } else {

        if(req.cookies.imdm === undefined) {
          let sec = 86400000;
          res.cookie('imdm', `${sid}`, {maxAge: sec});
          res.cookie("campus", `${campus}`, { maxAge: sec });
        } else if (
          req.cookies.imdm !== `${sid}` &&
          req.cookies.campus !== `${campus}`
        ) {
          res.cookie("imdm", `${sid}`);
          res.cookie("campus", `${campus}`);
        }
        res.render('sProfile_final_2', {message: {result:result[0], welcomeMessage: 'Welcome to your profile'}})
      }

    });
  });
})

students.get('/search/:campus/:searchInput', function (req, res) {
    let SI = req.params.searchInput;
    var campus = req.params.campus;

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

  //   if (err) throw err;
    var sql = `SELECT * FROM allstudents WHERE sid = "${SI}" OR nameEnglish = "${SI}"`;
    con.query(sql, function (err, result) {
      if(result.length > 0) {
        res.send(result[0])
      } else {
        let data = `No student found! Please input correct information and search again.`
        res.send(data);
      }
    });
  });
})



module.exports = students