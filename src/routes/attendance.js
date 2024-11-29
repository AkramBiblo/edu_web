const express = require("express");
const attendance = express.Router();
var bodyParser = require("body-parser");
const { json } = require("body-parser");
const { access } = require("fs");
// const { JSONParser } = require("formidable/parsers");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


// attendance.post("/submit", (req, res) => {
//   const getDBInfo = require("../../db");
//   const con = getDBInfo.con;

//   let p = req.body.present;
//   let a = req.body.absent;
//   // let l = req.body.leave;
//   let c = req.body.cls;
//   let present = p.slice(12, -2);
//   let absent = a.slice(11, -2);
//   // let leave = l.slice(10, -2);
//   let cid = c.slice(8, -2);
//   let cls = `class${cid}`;
//   let date = new Date();
 
//   let month = date.getMonth();
//   month++
//   if (month < 10) {
//     month = "0" + month
//   }

//   let d = date.getDate();
//   if (d < 10) {
//     d = "0" + d
//   }

//   let y = date.getFullYear();
//   let entrydate = y + "-" + month + "-" + d;
//   let m;
//   switch (new Date().getMonth()) {
//     case 0:
//       m = 1;
//       break;
//     case 1:
//       m = 2;
//       break;
//     case 2:
//        m = 3;
//       break;
//     case 3:
//       m = 4;
//       break;
//     case 4:
//       m = 5;
//       break;
//     case 5:
//       m = 6;
//       break;
//     case 6:
//       m = 7;
//       break;
//     case 7:
//       m = 8;
//       break;
//     case 8:
//       m = 9;
//       break;
//     case 9:
//       m = 10;
//       break;
//     case 10:
//       m = 11;
//       break;
//     case 11:
//     m = 12;
//   }

//     con.connect(function (err) {
//       var sql = `INSERT INTO ${cls} (cid, date, month, year, present, absent) VALUES ('${cid}', '${entrydate}', '${m}', '${y}', '${present}', '${absent}')`;
//       con.query(sql, function (err, result) {});
//     });
// });

attendance.post("/submit", (req, res) => {
  let campus_key = req.cookies.campus_key
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
  let class_name = req.body.class_name;
  let present = req.body.present;
  let absent = req.body.absent;
  let date = new Date();
  
  let query_1 = {table:["class_name"],Query:["class_name"],value:[`${class_name}`]}
    let queryArr = [query_1]
    let data = getDBInfo.getDataFromDB(campus_key, queryArr)
    setTimeout(() => {
      let cid = data[0][0].id;
      let attdTable = `class_${cid}_attd`
      con.connect(() => {
        let sql = `SELECT * FROM allstudents WHERE cid = "${cid}"`
        con.query(sql, (err, result) => {
          result.forEach((student) => {
            let sid = student.sid;
            let attd = student.presence;
            let abs = student.absence;
            if (present.includes(sid) == true) {
              attd++
              let sql = `UPDATE allstudents SET presence = "${attd}" WHERE sid = "${sid}"`
              con.query(sql, (err, result) => {})
            } else {
              abs++
              let sql = `UPDATE allstudents SET absence = "${abs}" WHERE sid = "${sid}"`
              con.query(sql, (err, result) => {})
            }
          })
        })
      })
    
      let month = date.getMonth();
      month++
      if (month < 10) {
        month = "0" + month
      }
    
      let d = date.getDate();
      if (d < 10) {
        d = "0" + d
      }
    
      let y = date.getFullYear();
      let entrydate = y + "-" + month + "-" + d;
      let m;
      switch (new Date().getMonth()) {
        case 0:
          m = 1;
          break;
        case 1:
          m = 2;
          break;
        case 2:
           m = 3;
          break;
        case 3:
          m = 4;
          break;
        case 4:
          m = 5;
          break;
        case 5:
          m = 6;
          break;
        case 6:
          m = 7;
          break;
        case 7:
          m = 8;
          break;
        case 8:
          m = 9;
          break;
        case 9:
          m = 10;
          break;
        case 10:
          m = 11;
          break;
        case 11:
        m = 12;
      }
    
        con.connect(function (err) {
          var sql = `SELECT * FROM ${attdTable} WHERE date = "${entrydate}"`;
          con.query(sql, function (err, result) {
            if (result.length > 0) {
              let presence = result[0].present;
              let p;
              if (presence == "") {
                p = present;
              } else {
                p = presence.concat("", `,${present}`);
              }
              let absence = result[0].absent;
              let a;
              if (absence == "") {
                a = absent;
              } else {
                a = absence.concat("", `,${absent}`);
              }
              var sql = `UPDATE ${attdTable} SET present = "${p}", absent = "${a}" WHERE date = "${entrydate}"`;
              con.query(sql, function (err, result) {
                res.send("Attendance updated successfully!")
              });
            } else {
              var sql = `INSERT INTO ${attdTable} (cid, date, month, year, present, absent) VALUES ("${cid}", "${entrydate}", "${m}", "${y}", "${present}", "${absent}")`;
              con.query(sql, function (err, result) {
                res.send("Attendance updated successfully!")
              });
            }
            
          });
          // var sql = `INSERT INTO ${cls} (cid, date, month, year, present, absent) VALUES ('${cid}', '${entrydate}', '${m}', '${y}', '${present}', '${absent}')`;
          // con.query(sql, function (err, result) { });
          
        });
    }, 3000)
  
});

attendance.post("/query", (req, res) => {
  // class_1_attd
  let d = req.body.date;
  let m = req.body.m;
  let y = req.body.y;
  let sid = req.body.sid;
  let class_name = req.body.class_name;
  let campus_key = req.cookies.campus_key;
    let query = {table:["class_name"], Query:["class_name"], value:[`${class_name}`]} // Query Sample 2
    let queryArr = [query]
    const getDBInfo = require("../../db");
    let data = getDBInfo.getDataFromDB(campus_key, queryArr)
    setTimeout(() => {
      let cid = data[0][0].id
      let cls = `class_${cid}_attd`
      con = getDBInfo.connectToDatabase(campus_key)
      con.connect(function (err) {
          var sql = `SELECT * FROM allstudents WHERE sid = "${sid}" AND preferredClass = "${class_name}"`;
          con.query(sql, function (err, result) {
            if (result.length <= 0) {
              return res.send(`<div class="alert alert-danger f">
                          <p >Incorrect SID or Class</p>
                        </div>`)
            } else {
              new Promise((resolve, reject) => {
                if (!d) {
                  var sql = `SELECT * FROM ${cls} WHERE month = "${m}" AND year = "${y}"`;
                  con.query(sql, function (err, result) {
                  if (result.length <= 0) {
                    res.send(`<div class="alert alert-danger f">
                                <p>Data not available!</p>
                              </div>`)
                  } else {

                    let totalAttendance = 0;
                    result.forEach(elem => {
                      let allAttd = elem.present;
                      var regex = new RegExp(sid, "g");
                        let val = regex.test(allAttd)
                        if (val == true) {
                          totalAttendance++
                        }
                    });
                    
                    resolve(res.send(`<div class="alert alert-success f">
                    <p >He was total ${totalAttendance} days present on selected month.</p>
                  </div>`))
                  }
                });
                } else {
                  var sql = `SELECT * FROM ${cls} WHERE date = "${d}"`;
                  con.query(sql, function (err, result) {
                  if (result.length <= 0) {
                    res.send(`<div class="alert alert-danger f">
                                <p >Incorrect date or date formate</p>
                              </div>`)
                  } else {

                    for (const data of result) {
                      let allAttd = data.present;
                      let leaves = data.onLeave;
                      var regex = new RegExp(sid);
                      let attndVal = regex.test(allAttd)
                      let lvVal = regex.test(leaves)

                      if (attndVal == true) {
                        resolve(res.send(`<div class="alert alert-success f">
                                            <p>He was present on ${d}.</p>
                                          </div>`
                        ))
                        
                      } else if (lvVal == true) {
                        resolve(res.send(`<div class="alert alert-warning f">
                                            <p >He was on leave on ${d}.</p>
                                          </div>`
                        ))
                        
                      } else {
                        resolve(res.send(`<div class="alert alert-danger f">
                                            <p >He was absent on ${d}.</p>
                                          </div>`
                        ))
                      }
                    }
                  }
                });
                }
                
              })
            }
          })
      });
    }, 3000)
  
});


module.exports = attendance;