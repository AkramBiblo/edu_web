const express = require('express');
const announce = express.Router();
const multer = require("multer");
var bodyParser = require('body-parser');
const { resolve } = require('url');
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
let cookieParser = require("cookie-parser");
announce.use(cookieParser());

announce.get('/form', (req, res) => {
    res.render('announceForm', {title: 'Announce Form'})
}) 

announce.get('/noticeBoard/:campus/:sid', (req, res) => {
  let sid = req.params.sid
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
  con.connect(function(err) {

    var sql = `SELECT notify FROM allstudents WHERE sid = "${sid}"`;
    con.query(sql, function (err, result) {
      result.forEach((user) => {
        let n = user.notify
        new Promise ((resolve, reject) => {
          n = 0;
          resolve(n)
        }).then((result) => {
          var sql = `UPDATE allstudents SET notify = "${result}" WHERE sid = "${sid}"` 
          con.query(sql, (err, result) => {})
        })
      })
    });

  var sql = 'SELECT * FROM announcements';
  con.query(sql, function (err, result) {
      if (result.length <= 0) {
        return res.send(`No announcement available!`)
        //     res.send(`No announcement available!  <h3>
        //     <a href="/announce/form">Add a new announcement</a>
        // </h3>`);
      } else {
        res.render("announces", {
          message: result 
        });
          
      }
  });
});
}) 

announce.get('/all', (req, res) => {
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
          var sql = 'SELECT * FROM announcements';
          con.query(sql, function (err, result) {
              if (result.length <= 0) {
                res.send(`No announcement available!  <h3>
                <a href="/announce/form">Add a new announcement</a>
            </h3>`);
            } else {
                  res.render("announces", {
                      message: result 
                  });
              }
          });
      });
      
})

// Post data
announce.post("/new", function (req, res) {
    let header = req.body.heading; 
    let desc = req.body.description;
    let announcedOn = req.body.date;
    let ApplUntil = req.body.end;

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
        
        var sql = `INSERT INTO announcements (heading, description, date, end, campus) VALUES ("${header}", "${desc}", "${announcedOn}", "${ApplUntil}", "${campus}")`;
        con.query(sql, function (err, result) {
        });

        var sql = `SELECT sid, notify FROM allstudents`;
        con.query(sql, function (err, result) {
          result.forEach((user) => {
            let n = user.notify
            let sid = user.sid
            new Promise ((resolve, reject) => {
              n++
              resolve(n)
            }).then((result) => {
              var sql = `UPDATE allstudents SET notify = "${n}" WHERE sid = "${sid}"` 
              con.query(sql, (err, result) => {})
            })
          })
        });
        
        var sql = 'SELECT * FROM announcements';
          con.query(sql, function (err, result) {

            if (result.length <= 0) {
              res.send('No announcement available!')
            } else {
              res.render("announces", {
                  message: result 
              });
          }
      });
    });
    
  }
);

announce.post("/publicPost", function (req, res) {
  let header = req.body.heading;
  let desc = req.body.description;
  let announcedOn = req.body.date;
  let ApplUntil = req.body.end;

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
      
      var sql = `INSERT INTO announcements (heading, description, date, end, campus) VALUES ("${header}", "${desc}", "${announcedOn}", "${ApplUntil}", "${campus}")`;
      con.query(sql, function (err, result) {
      });

      var sql = `INSERT INTO publicnotice (heading, description, date, end, campus) VALUES ("${header}", "${desc}", "${announcedOn}", "${ApplUntil}", "${campus}")`;
      con.query(sql, function (err, result) {
      });

      var sql = `SELECT sid, notify FROM allstudents`;
      con.query(sql, function (err, result) {
        result.forEach((user) => {
          let n = user.notify
          let sid = user.sid
          new Promise ((resolve, reject) => {
            n++
            resolve(n)
          }).then((result) => {
            var sql = `UPDATE allstudents SET notify = "${n}" WHERE sid = "${sid}"` 
            con.query(sql, (err, result) => {})
          })
        })
      });
      
      var sql = 'SELECT * FROM announcements';
        con.query(sql, function (err, result) {

          if (result.length <= 0) {
            res.send('No announcement available!')
          } else {
            res.render("announces", {
                message: result 
            });
          }
        });
  });
  
}
);

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

announce.post(
  "/fileUpload",
  urlencodedParser,
  upload.single("Announce"),
  // upload.array('photos', 4),
  function (req, res) {
    let file = req.file.filename;
    let heading = req.body.heading
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
    con.connect((err) => {
      let sql = `INSERT INTO announcements (file, heading) VALUES ("${file}", "${heading}")`
      con.query(sql, (err, result) => {
        var sql = `SELECT sid, notify FROM allstudents`;
        con.query(sql, function (err, result) {
          result.forEach((user) => {
            let n = user.notify
            let sid = user.sid
            new Promise ((resolve, reject) => {
              n++
              resolve(n)
            }).then((result) => {
              var sql = `UPDATE allstudents SET notify = "${n}" WHERE sid = "${sid}"` 
              con.query(sql, (err, result) => {})
            })
          })
          res.render("announceForm", {successMsg: "Announce uploaded successfully!"})
        });
        
      })
    })

  })

  announce.post(
    "/uploadPublicFile",
    urlencodedParser,
    upload.single("Announce"),
    // upload.array('photos', 4),
    function (req, res) {
      let heading = req.body.heading
      let file = req.file.filename;
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
      con.connect((err) => {
        let p_sql = `INSERT INTO publicnotice (file, heading) VALUES ("${file}", "${heading}")`
        con.query(p_sql, (err, result) => {})
        let sql = `INSERT INTO announcements (file, heading) VALUES ("${file}", "${heading}")`
        con.query(sql, (err, result) => {
          var sql = `SELECT sid, notify FROM allstudents`;
          con.query(sql, function (err, result) {
            result.forEach((user) => {
              let n = user.notify
              let sid = user.sid
              new Promise ((resolve, reject) => {
                n++
                resolve(n)
              }).then((result) => {
                var sql = `UPDATE allstudents SET notify = "${n}" WHERE sid = "${sid}"` 
                con.query(sql, (err, result) => {})
              })
            })
            res.render("announceForm", {successMsg: "Announce uploaded successfully!"})
          });
          
        })
      })
  
    })

module.exports = announce;