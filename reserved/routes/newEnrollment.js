const express = require("express");
const newEnrollment = express.Router();
const multer = require("multer");
// const upload = multer({ dest: './src/uploadedFiles/' })
const fs = require("fs");
const path = require("path");
var bodyParser = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


// File upload with multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploadedFiles/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + file.originalname;
      cb(null, uniqueSuffix);
    },
  });
  
  const upload = multer({ storage: storage });

  newEnrollment.post(
    "/",
    urlencodedParser,
    upload.single("avatar"),
    function (req, res) {
      let nameEnglish = req.body.nameEnglish;
      let preferredClass = req.body.preferredClass;
      let campus = req.body.campus;
      
      let cid;
      switch (preferredClass) {
        case "K.G":
          cid = 100
          break;
        case "Class 1":
          cid = 1
          break;
        case "Class 2":
          cid = 2
          break;
        case "Class 3":
          cid = 3
          break;
        case "Class 4":
          cid = 4
          break;
        case "Class 5":
          cid = 5
          break;
        case "Class 6":
          cid = 6
          break;
        case "Class 7":
          cid = 7
          break;
        case "Class 8":
          cid = 8
          break;
        default:
          cid = 99
      }
      let preferredSection = req.body.preferredSection;
      let emergencyContact = req.body.emergencyContact;
      let fNameEnglish = req.body.fNameEnglish;
      let password = req.body.password;
      let file = ''
      if (req.file) { 
        file = req.file.filename;
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
      con.connect(function (err) {
        let sql = `SELECT * FROM allStudents WHERE nameEnglish =? AND fNameEnglish =?`
        con.query(sql, [nameEnglish, fNameEnglish], function (err, result) {
          if (result.length > 0) {
            res.render('userRegister', {errorMessage: `${nameEnglish} is already registered in IMDM!`})
          } else {
              let sql = `INSERT INTO allStudents (cid, campus, nameEnglish, preferredClass, preferredSection, emergencyContact, fNameEnglish, password, file, editButton) VALUES (${cid}, '${campus}', '${nameEnglish}', '${preferredClass}', '${preferredSection}', '${emergencyContact}', '${fNameEnglish}', '${password}', '${file}', 'Edit Profile')`;
              con.query(sql, function (err, result) {
                res.render('userRegister', {successMsg: `${nameEnglish} is registered successfully!`})
              });
          }
        });
        
      })
  });

  module.exports = newEnrollment;