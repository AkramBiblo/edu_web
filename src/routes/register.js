const express = require("express");
const register = express.Router();
const multer = require("multer");
// const upload = multer({ dest: './src/uploadedFiles/' })
const fs = require("fs");
const path = require("path");
var bodyParser = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
let cookieParser = require("cookie-parser");
register.use(cookieParser());

register.get('/new', (req, res) => {
  let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name"])
    setTimeout(() => {
      let class_name = dataQuery[0]
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      res.render('userRegister', {
        title: 'Register',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name
        })
    }, 2000)
})

register.get('/readmission', (req, res) => {
  res.render('readmissionForm', { title: 'Re-admission' })
})

register.post('/readmission/:sid', (req, res) => {
  let sid = req.params.sid
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
    let sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`
    con.query(sql, (err, result) => {
      if (result.length <= 0) {
        console.log('result not found!')
      } else {
        res.send(result[0])
      }
    })
  })
})

register.post('/changeshift', (req, res) => {
  let sid = req.body.sid
  let campus = req.body.campus;
  let shift = req.body.shift;
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
    let sql = `UPDATE allstudents SET shift = "${shift}" WHERE sid = "${sid}"`
    con.query(sql, (err, result) => {
      var sql = 'SELECT * FROM allstudents';
      con.query(sql, function (err, result) {
        res.render("allStudents", {
          message: result,
          campus: campus
        });
      });
    })
  })
})
register.post('/update', (req, res) => {
  let sid = req.body.sid
  let preferredClass = req.body.preferredClass;
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
  let residentialService = req.body.residentialService;
  let transportService = req.body.transportService;
  let deasesQuery = req.body.deasesQuery;
  let deasesDetailes = req.body.deasesDetailes;
  let vlg = req.body.vlg;
  let po = req.body.po;
  let ps = req.body.ps;
  let dist = req.body.dist;
  let addSame = req.body.addSame;
  if (addSame == undefined) {
    addSame = '';
  }
  let pvlg = req.body.pvlg;
  let ppo = req.body.ppo;
  let pps = req.body.pps;
  let pdist = req.body.pdist;
  let emergencyContact = req.body.emergencyContact;
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
    let sql = `UPDATE allstudents SET cid = "${cid}", preferredClass = "${preferredClass}", residentialService = "${residentialService}", transportService = "${transportService}",
    deasesQuery = "${deasesQuery}", deasesDetailes = "${deasesDetailes}", vlg = "${vlg}", po = "${po}", ps = "${ps}", dist = "${dist}", addressAreSame = "${addSame}", pvlg = "${pvlg}", ppo = "${ppo}", pps = "${pps}", pdist = "${pdist}", emergencyContact = "${emergencyContact}" 
    WHERE sid = "${sid}"`
    con.query(sql, (err, result) => {
      let sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`
      con.query(sql, (err, result) => {
        if (result.length <= 0) {
          res.send('Server error!')
        } else {
          res.render('sProfile', { message: { result: result[0] } })
        }
      })
    })
  })
})

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

register.post(
  "/new",
  function (req, res) {
    let campus_key = req.cookies.campus_key
    let sid = req.body.sid;
    let roll = req.body.roll;
    let nameEnglish = req.body.nameEnglish;
    let nameBangla = req.body.nameBangla;
    let previousClass = req.body.previousClass;
    let preferredClass = "";
    let cid;
    if (req.body.preferredClass == "") {
      preferredClass = req.body.updatedPreferredClass;
    } else {
      preferredClass = req.body.preferredClass;
      let query_data = {table:["class_name"],Query:["class_name"],value:[`${preferredClass}`]}
      let queryArr = [query_data]
      let getDBInfo = require("../../db");
      let cidQuery = getDBInfo.getDataFromDB(campus_key, queryArr)
      setTimeout(() => {
      cid = cidQuery[0][0].id
      }, 2000)
    }
    
    let preferredSection = "";
    if (req.body.preferredSection == "") {
      preferredSection = req.body.updatedPreferredSection;
    } else {
      preferredSection = req.body.preferredSection;
    }
    let shift = "";
    if (req.body.shift == "") {
      shift = req.body.updatedShift;
    } else {
      shift = req.body.shift;
    }
    let gradePoint = req.body.gradePoint;
    let previousInstitute = req.body.previousInstitute;
    let dateOfBirth = req.body.dateOfBirth;
    let bloodGroup = req.body.bloodGroup;
    let residentialService = req.body.residentialService;
    let transportService = req.body.transportService;
    let deasesQuery = req.body.deasesQuery;
    let deasesDetailes = req.body.deasesDetailes;
    let fNameBangla = req.body.fNameBangla;
    let fNameEnglish = req.body.fNameEnglish;
    let fNID = req.body.fNID;
    let fOccupation = req.body.fOccupation;
    let fBloodGroup = req.body.fBloodGroup;
    let fEQualification = req.body.fEQualification;
    let fMobile = req.body.fMobile;
    let mNameBangla = req.body.mNameBangla;
    let mNameEnglish = req.body.mNameEnglish;
    let mNID = req.body.mNID;
    let mOccupation = req.body.mOccupation;
    let mBloodGroup = req.body.mBloodGroup;
    let mEQualification = req.body.mEQualification;
    let mMobile = req.body.mMobile;
    let vlg = req.body.vlg;
    let po = req.body.po;
    let ps = req.body.ps;
    let dist = req.body.dist;
    let addSame = req.body.addSame;
    let pvlg = req.body.pvlg;
    let ppo = req.body.ppo;
    let pps = req.body.pps;
    let pdist = req.body.pdist;
    let password = req.body.password;
    let editButton = "";
    if (req.cookies.imdmAdmin !== undefined) {
      editButton = "Edit Profile"
    }
    
    setTimeout(() => {
      const getDBInfo = require("../../db");
      let con = getDBInfo.connectToDatabase(campus_key)
      con.connect(function (err) {
        let sql = `UPDATE allstudents SET cid = "${cid}", roll = "${roll}", nameEnglish = "${nameEnglish}", nameBangla = "${nameBangla}", previousClass = "${previousClass}", preferredClass = "${preferredClass}",
        preferredSection = "${preferredSection}", gradePoint = "${gradePoint}", previousInstitute = "${previousInstitute}", dateOfBirth = "${dateOfBirth}",
        bloodGroup = "${bloodGroup}", residentialService = "${residentialService}", transportService = "${transportService}",
        deasesQuery = "${deasesQuery}", deasesDetailes = "${deasesDetailes}", fNameEnglish = "${fNameEnglish}", fNameBangla = "${fNameBangla}", fNID = "${fNID}", fOccupation = "${fOccupation}", fBloodGroup = "${fBloodGroup}",
        fEQualification = "${fEQualification}", fMobile = "${fMobile}", mNameBangla = "${mNameBangla}", mNameEnglish = "${mNameEnglish}", mNID = "${mNID}", mOccupation = "${mOccupation}",
        mBloodGroup = "${mBloodGroup}", mEQualification = "${mEQualification}", mMobile = "${mMobile}", vlg = "${vlg}", po = "${po}", ps = "${ps}", dist = "${dist}", addressAreSame = "${addSame}",
        pvlg = "${pvlg}", ppo = "${ppo}", pps = "${pps}", pdist = "${pdist}", password = "${password}", editButton = "${editButton}", shift = "${shift}" WHERE sid = "${sid}"`
        con.query(sql, function (err, result) {
          var sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`;
          con.query(sql, function (err, result) {
            res.render('sProfile', { message: { result: result[0] } })
          });
        });
      })
    }, 3000)
  });

register.post(
  "/parentsPictures",
  urlencodedParser,
  // upload.single("avatar"),
  upload.array('photos', 4),
  function (req, res) {
    let campus_key = req.cookies.campus_key
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
    let F = req.files[0].filename
    let M = '';
    let FNIDIMG = '';
    let MNIDIMG = '';
    if (req.files[1]) {
      M = req.files[1].filename
    }
    // if (req.files[2]) {
    //   FNIDIMG = req.files[2].filename
    // }
    // if (req.files[3]) {
    //   MNIDIMG = req.files[3].filename
    // }
    
    let sid = req.body.sid;
    con.connect((err) => {
      let sql = `UPDATE allstudents SET FPIC = "${F}", MPIC = "${M}" WHERE sid = "${sid}"`
      con.query(sql, (err, result) => {
        let sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`
        con.query(sql, (err, result) => {
          res.render('sProfile', {
            message: {
              result: result[0]
            }
          })
        })
      })
    })

  })

register.post(
  "/studentPictures",
  urlencodedParser,
  upload.single("avatar"),
  function (req, res) {
    let file = req.file.filename
    let sid = req.body.sid;
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
    con.connect((err) => {
      let sql = `UPDATE allstudents SET file = "${file}" WHERE sid = "${sid}"`
      con.query(sql, (err, result) => {
        let sql = `SELECT * FROM allstudents WHERE sid = "${sid}"`
        con.query(sql, (err, result) => {
          res.render('sProfile_final_2', {
            message: {
              result: result[0]
            }
          })
        })
      })
    })

  })

register.post(
  "/addNewTeacher",
  urlencodedParser,
  upload.single("avatar"),
  function (req, res) {
    let name = req.body.name;
    let address = req.body.address;
    let qualifications = req.body.qualifications;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let file = "";
    if (req.file) {
      file = req.file.filename;
    }
    let password = req.body.password;
    const { resolve } = require("path");
    let campus_key = req.cookies.campus_key
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
    con.connect(function (err) {
      var sql = 'SELECT * FROM teachers WHERE email = ?';
      con.query(sql, [email], function (err, result) {
        if (result.length > 0) {
          fs.unlinkSync(req.file.path)
          return res.render("teacherRagisterForm", {
            message: {
              name: name,
              address: address,
              qualifications: qualifications,
              email: email,
              mobile: mobile,
            },
            errorMessage: "This email has already been taken.",
          });
        } else {

          var sql = `INSERT INTO teachers (name, address, qualifications, email, password, mobile, file) VALUES ("${name}", "${address}", "${qualifications}", "${email}", "${password}", "${mobile}", "${file}")`;

          con.query(sql, function (err, result,) {
            res.render("teachersProfile", {
              message: {
                name: name,
                address: address,
                qualifications: qualifications,
                email: email,
                mobile: mobile,
                file: file
              },
              successMsg: "New teacher registered successfully!"
            });
          });

        }

      })

    });

  }
);

register.post(
  "/addNewStudent",
  urlencodedParser,
  upload.single("avatar"),
  function (req, res) {
    let campus_key = req.cookies.campus_key;
    let preferredClass = req.body.preferredClass;
    let query_data = {table:["class_name"],Query:["class_name"], value:[`${preferredClass}`]}
    let queryArr = [query_data]
    let getDBInfo = require("../../db");
    let cidQuery = getDBInfo.getDataFromDB(campus_key, queryArr)
    
    setTimeout(() => {
      let con = getDBInfo.connectToDatabase(campus_key)
      let cid = cidQuery[0][0].id
      let nameEnglish = req.body.nameEnglish;
      let sid = req.body.sid;
      let roll = req.body.roll;
      let shift = req.body.shift;
      let preferredSection = req.body.preferredSection;
      let emergencyContact = req.body.emergencyContact;
      let fNameEnglish = req.body.fNameEnglish;
      let password = req.body.password;
      let file = ""
      if (req.file) {
        file = req.file.filename;
      }
      con.connect(function (err) {
        var sql = `SELECT * FROM allstudents WHERE nameEnglish = "${nameEnglish}" AND fNameEnglish = "${fNameEnglish}"`;
        con.query(sql, function (err, result) {
          if (result.length > 0) {
            res.render('userRegister', {errorMessage: `${nameEnglish} is already registered in AIM!`})
          } else {
            let sql_ = `INSERT INTO allstudents (sid, cid, roll, nameEnglish, preferredClass, preferredSection, emergencyContact, fNameEnglish, password, file, editButton, shift) VALUES ("${sid}", "${cid}", "${roll}", "${nameEnglish}", "${preferredClass}", "${preferredSection}", "${emergencyContact}", "${fNameEnglish}", "${password}", "${file}", "Edit Profile", "${shift}")`;
            con.query(sql_, function (err, result) {
              res.render('userRegister', { successMsg: `${nameEnglish} is registered successfully!` })
            });
          }
        })
      });
    }, 2000)
  }
);

module.exports = register;