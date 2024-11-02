const express = require('express');
const setup = express.Router();
let cookieParser = require("cookie-parser");
const { closeDelimiter } = require('ejs');
setup.use(cookieParser());

setup.get("/", (req, res) => {
    res.render("setup", {title: "App Setup"})
})

setup.post("/enroll_Institute", (req, res) => {
  let cName = req.body.cName;
  let cAddress = req.body.cAddress;
  let campus = req.body.campus;
  let shift = req.body.shift;
  let _class = req.body._class;
  let terms = req.body.terms;
  let subject = req.body.subject;
  let subjectArr = subject.split(",+,") // class devided
  
  createTables(_class, shift, terms, subjectArr)

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

 function createTables(c, s, t, sub) {
  let classArr = c.split(",")
  let shiftArr = s.split(",")
  let termsArr = t.split(",")
  let subject = sub;

  let varArr = ['class', 'shift', 'term']
  let dataArr = [classArr, shiftArr, termsArr]
  let sql;
  const getDBInfo = require("../../db");
    const con = getDBInfo.con;
   
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
          setTimeout(() => {}, 3000)
        }
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
            con.query(sqlForSubjectTable, (err, result) => {})
            for (let s = 0; s < subjectArr.length; s++) {
              let subject = subjectArr[s];
              let sArr = subject.split(",")
              let insertSubjSQL = `INSERT INTO subjects_of_class_${_counter} (subject_name, full_mark, pass_mark) VALUES ("${sArr[0]}", "${sArr[1]}", "${sArr[2]}")`
              con.query(insertSubjSQL, (err, result) => {
                console.log(`subjects_of_class_${_counter} inserted successfully!`)
              })
            }
            await sleep(4000);
            _counter++
          }
        }
        stop()
        }, 7000)
      });
  
}




module.exports = setup;