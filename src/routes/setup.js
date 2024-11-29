const express = require('express');
const setup = express.Router();
let cookieParser = require("cookie-parser");
const { closeDelimiter } = require('ejs');
setup.use(cookieParser());

setup.post("/", (req, res) => {
    let key = req.body.setupKey
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(key)
    con.connect(function(err) {
      if (err) {
        res.send("Wrong setup key provided! Kindly input correct setup key or collect setup key from WebDev Solution.")
      } else {
        res.render("setup", {title: "App Setup", database: key})
      }
    });
    
})

setup.post("/enroll_Institute", (req, res) => {
  let database = req.body.database;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(database)
  let cName = req.body.cName;
  let cAddress = req.body.cAddress;
  let campus = req.body.campus;
  let shift = req.body.shift;
  let _class = req.body._class;
  let terms = req.body.terms;
  let sections = req.body.sections;
  let subject = req.body.subject;
  let subjectArr = subject.split(",+,") // class devided

  let sql = `CREATE TABLE admin (id INT AUTO_INCREMENT PRIMARY KEY, iName VARCHAR(255), iAddress VARCHAR(255), iCampus VARCHAR(255), password VARCHAR(255))`; 
  con.query(sql, (err, result) => {
    let insertSql = `INSERT INTO admin (iName, iAddress, iCampus, password) VALUES ("${cName}", "${cAddress}", "${campus}", "admin")`
    con.query(insertSql, (err, result) => {
      console.log("Admin table created!")
    })
  })
 
  let teachersTable = `CREATE TABLE teachers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), qualifications VARCHAR(255), email VARCHAR(255), password VARCHAR(255), mobile VARCHAR(255), file VARCHAR(255))`
  let paymentsTable = `CREATE TABLE payments (id INT AUTO_INCREMENT PRIMARY KEY, sid INT(11), cid INT(11), date VARCHAR(10), month VARCHAR(255), year INT(4), name VARCHAR(255), amount INT(11), paymentDisc VARCHAR(255), status VARCHAR(255))`
  let announceTable = `CREATE TABLE announcements (id INT AUTO_INCREMENT PRIMARY KEY, heading TEXT(100000), description TEXT(100000), fromDate VARCHAR(10), tillDate VARCHAR(10), campus VARCHAR(255), file VARCHAR(255), noticeType VARCHAR(255))`
  let studentTable = `CREATE TABLE allstudents (id INT AUTO_INCREMENT PRIMARY KEY, sid VARCHAR(255), cid INT(11), roll VARCHAR(255), nameEnglish VARCHAR(255), nameBangla VARCHAR(255), previousClass VARCHAR(255), preferredClass VARCHAR(255),
  preferredSection VARCHAR(255), gradePoint INT, previousInstitute VARCHAR(255), dateOfBirth VARCHAR(255),
  bloodGroup VARCHAR(255), residentialService VARCHAR(255), transportService VARCHAR(255),
  deasesQuery VARCHAR(255), deasesDetailes VARCHAR(255), fNameEnglish VARCHAR(255), fNameBangla VARCHAR(255), fNID VARCHAR(255), fOccupation VARCHAR(255), fBloodGroup VARCHAR(255),
  fEQualification VARCHAR(255), fMobile VARCHAR(255), FPIC VARCHAR(255), mNameBangla VARCHAR(255), mNameEnglish VARCHAR(255), mNID VARCHAR(255), mOccupation VARCHAR(255),
  mBloodGroup VARCHAR(255), mEQualification VARCHAR(255), mMobile VARCHAR(255), MPIC VARCHAR(255), vlg VARCHAR(255), po VARCHAR(255), ps VARCHAR(255), dist VARCHAR(255), addressAreSame VARCHAR(255),
  pvlg VARCHAR(255), ppo VARCHAR(255), pps VARCHAR(255), pdist VARCHAR(255), emergencyContact VARCHAR(255), password VARCHAR(255), editButton VARCHAR(255), presence INT(11), absence INT(11), shift VARCHAR(255), file VARCHAR(255))`
  con.query(studentTable, (err, result) => {
    console.log("Student table created successfully!")
  }) 
  con.query(paymentsTable, (err, result) => {
    console.log("Payment table created successfully!")
  }) 
  con.query(teachersTable, (err, result) => {
    console.log("Teachers table created successfully!")
  }) 
  con.query(announceTable, (err, result) => {
    console.log("Notice table created successfully!")
  }) 
  
  createTables(_class, shift, terms, subjectArr, database, sections)

  function createTables(c, s, t, sub, db, sect) {
    let classArr = c.split(",")
    let shiftArr = s.split(",")
    let termsArr = t.split(",")
    let sectionArr = sect.split(",")
    let subject = sub;
  
    let varArr = ['class', 'shift', 'term', 'section']
    let dataArr = [classArr, shiftArr, termsArr, sectionArr]
    let sql;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(db)
     
      con.connect(function(err) {
       
        for (let i = 0; i < varArr.length; i++) {
            const e = varArr[i];
            const data = dataArr[i]
            sql = `CREATE TABLE ${e}_name (id INT AUTO_INCREMENT PRIMARY KEY, ${e}_name VARCHAR(255))`; 
            con.query(sql, (err, result) => {
              for (let i = 0; i < data.length; i++) {
                const elem = data[i];
                let insertSQL = `INSERT INTO ${e}_name (${e}_name) VALUES ("${elem}")`
                con.query(insertSQL, (err, result) => {
                  console.log(`${e}_name table data inserted successfully!`)
                })
              }  
            })
            
          }
  
          setTimeout(() => {
            function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function stop(params) {
              let _count = 1
            for (let index = 0; index < dataArr[0].length; index++) {
              // let sql = SELECT `id`, `cid`, `date`, `month`, `year`, `present`, `absent`, `onLeave` FROM `class1` WHERE 1 , date VARCHAR(255), month INT(11), year INT(11), present VARCHAR(255), absent VARCHAR(255), leave VARCHAR(255)           
              let createAttdTable =  `CREATE TABLE class_${_count}_attd (id INT AUTO_INCREMENT PRIMARY KEY, cid INT(11), date VARCHAR(10), month INT(2), year INT(4), present TEXT, absent TEXT, onLeave TEXT)`; 
              con.query(createAttdTable, (err, result) => {
                console.log(`class_${_count}_attd_table created successfully!`)
              })
              await sleep(1000)
              _count++
            }
            }
            stop()
          }, 3000);
          
          let _counter = 1
          let sqlForSubjectTable;
          setTimeout(() => {
          function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          async function stop(params) {
            for (let J = 0; J < subject.length; J++) {
              const subj = subject[J];
              let subjectArr = subj.split(",#,")
              sqlForSubjectTable = `CREATE TABLE subjects_of_class_${_counter} (id INT AUTO_INCREMENT PRIMARY KEY, subject_name VARCHAR(255), full_mark INT, pass_mark INT)`; 
              con.query(sqlForSubjectTable, (err, result) => {
                let sqlForResultTable = `CREATE TABLE class_${_counter}_result (id INT AUTO_INCREMENT PRIMARY KEY, term VARCHAR(255), year INT(4))`; 
                con.query(sqlForResultTable, (err, result) => {
                  console.log("Result table added successfully!")
                })
              })
              for (let s = 0; s < subjectArr.length; s++) {
                let subject = subjectArr[s];
                let sArr = subject.split(",")
                let insertSubjSQL = `INSERT INTO subjects_of_class_${_counter} (subject_name, full_mark, pass_mark) VALUES ("${sArr[0]}", "${sArr[1]}", "${sArr[2]}")`
                con.query(insertSubjSQL, (err, result) => {
                  console.log(`subjects_of_class_${_counter} inserted successfully!`)
                  let trimedSub = sArr[0].replace(/\s/g, "_");
                  let sub = String(trimedSub)
                  let insertTheSubInResultTable = `ALTER TABLE class_${_counter}_result ADD COLUMN ${sub} VARCHAR(255)`
                  con.query(insertTheSubInResultTable, (err, result) => {
                    console.log("Subject added in result column!")
                  })
                })
              }
              await sleep(4000);
              _counter++
            }
          }
          stop()
          }, 10000)
        });
    
  }
})

setup.get("/createDb", (req, res) => {
    var mysql = require('mysql');

        var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
        });

        con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        /*Create a database named "mydb":*/
        // con.query("CREATE DATABASE edu_institute_db", function (err, result) {
        //     if (err) throw err;
        //     console.log("Database created");
        // });
        });
})

setup.post("/createTable", (req, res) => {
    const getDBInfo = require("../../db");
    const con = getDBInfo.con;
    const campus = []

    const adminTable = ["instituteName", "address", "user_id", "password"]
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });
})

 




module.exports = setup;