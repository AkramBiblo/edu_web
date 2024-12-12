
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
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    con = getDBInfo.connectToDatabase(campus_key)
    
    con.connect(function(err) {
    //   if (err) throw err;
      var sql = 'SELECT * FROM allstudents';
      con.query(sql, function (err, result) {
        res.render("allStudents", {
            message: result,
            campus_key: campus_key
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
  let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    con = getDBInfo.connectToDatabase(campus_key)
  con.connect(function(err) {
    var sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`;
    con.query(sql, function (err, result) {
      let studentData = result[0]
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name"])
    setTimeout(() => {
      // let dataObj = {
      //   class_name : dataQuery[0],
      //   section_name : dataQuery[1],
      //   shift_name : dataQuery[2],
      // }
      let class_name = dataQuery[0]
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      res.render('newRegisterForm', {
        title: 'Register',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name,
        message: studentData,
        })
    }, 2000)
    });
  });
})

students.post('/removeProfile', (req, res) => {
  let campus_key = req.cookies.campus_key;
  const getDBInfo = require("../../db");
  con = getDBInfo.connectToDatabase(campus_key)
  let sid = req.body.sid;
  
  con.connect(function (err) {
    var sql = `DELETE FROM allstudents WHERE sid = "${sid}"`;
    con.query(sql, function (err, result) {
      var sql = 'SELECT * FROM allstudents';
      con.query(sql, function (err, result) {
        res.render("allStudents", {
          message: result,
          campus_key: campus_key,
          successMsg: "Student removed successfully!"
        });
      });
    });
  });
})

students.post('/login', urlencodedParser, function (req, res, next) {
  let campus_key = req.body.campus_key;
  const getDBInfo = require("../../db");
  con = getDBInfo.connectToDatabase(campus_key)
  let sid = req.body.sid;
  let password = req.body.password;

  con.connect(function(err) {
    var sql = `SELECT * FROM allstudents WHERE sid = '${sid}' AND password = '${password}'`;
    con.query(sql, function (err, result) {
      if (result.length <= 0) {
        res.render('studentLoginForm', {errorMessage: 'Please input correct Userid or Password'})
      } else {

        if(req.cookies.sid === undefined || req.cookies.sid !== sid) {
          let sec = 86400000;
            res.cookie("campus_key", `${campus_key}`, { maxAge: sec });
            res.cookie("sid", `${sid}`, { maxAge: sec });
            res.cookie("s_password", `${password}`, { maxAge: sec });
        }
        res.render('sProfile', {message: {result:result[0], welcomeMessage: 'Welcome to your profile'}})
      }

    });
  });
})

students.post('/search', function (req, res) {
    let SI = req.body.searchIP;
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)

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

students.post('/getstudents', function (req, res) {
  let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
   let con = getDBInfo.connectToDatabase(campus_key)
  let class_name = req.body.class_name;
  let section_name = req.body.section_name;
  let shift_name = req.body.shift_name
con.connect(function(err) {
  var sql = `SELECT * FROM allstudents WHERE preferredClass = "${class_name}" AND preferredSection = "${section_name}" AND shift = "${shift_name}"`;
  con.query(sql, function (err, result) {
    if(result.length > 0) {
      res.send(result)
    } else {
      let data = `No student available in this section!`
      res.send(data);
    }
  });
});
})

module.exports = students