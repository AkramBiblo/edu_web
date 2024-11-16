const express = require('express');
const router = express.Router();
let cookieParser = require("cookie-parser");
router.use(cookieParser());
// const getDBInfo = require("../../db");

// const con = getDBInfo.con;
// con.connect(() => {
//     let sql = `CREATE TABLE first_r_nursery AS SELECT * FROM annual_r_play_nursery;`;
//     con.query(sql, () => {console.log('Table created')})
// })

// Routing
// router.get('/', (req, res) => {
//     let campus = "kadamtali_campus";
//     let con;
//     if (campus == "khulshi_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_khulshi;
//     } else if (campus == "kadamtali_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_kadamtali;
//     } else if (campus == "majhirghat_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_majhirghat;
//     }

//     con.connect((err) => {

//         let sql_99 = `SELECT * FROM allstudents WHERE cid = 99`;
//         con.query(sql_99, (err, result) => {
//             let sid_ = 202401
           
//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

//         let sql_100 = `SELECT * FROM allstudents WHERE cid = 100`;
//         con.query(sql_100, (err, result) => {
//             let sid_ = 202471

//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

//         let sql_1 = `SELECT * FROM allstudents WHERE cid = 1`;
//         con.query(sql_1, (err, result) => {
//             let sid_ = 2024141

//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

//         let sql_2 = `SELECT * FROM allstudents WHERE cid = 2`;
//         con.query(sql_2, (err, result) => {
//             let sid_ = 2024191

//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

//         let sql_3 = `SELECT * FROM allstudents WHERE cid = 3`;
//         con.query(sql_3, (err, result) => {
//             let sid_ = 2024226

//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

//         let sql_4 = `SELECT * FROM allstudents WHERE cid = 4`;
//         con.query(sql_4, (err, result) => {
//             let sid_ = 2024256

//             for (let i = 0; i < result.length; i++) {
//                 const e = result[i];
//                 let sid = e.sid_;
//                 let sql_2 = `UPDATE allstudents SET sid = "${sid_}" WHERE sid_ = "${sid}"`
//                 con.query(sql_2, (err, result) => { })
//                 sid_++
//             }
//         })

        
//     })
// })

router.get('/', (req, res) => {
  res.render('user', {title: 'IMDM Home'})

})
router.get('/class', (req, res) => {
    res.render('class', {title: 'Class'})
})
router.get('/admission', (req, res) => {
    res.render('admission', {title: 'Admission'})
})

router.get('/noticeBoard', (req, res) => {
    
    const getDBInfo = require("../../db");
    let con = getDBInfo.con.con_for_khulshi;
    con.connect(function (err) {
        
        var sql = 'SELECT * FROM publicnotice ORDER BY ID DESC LIMIT 5';
        con.query(sql, function (err, result) {
            
            new Promise((resolve, reject) => {
                let k = result;
                resolve(k)
            }).then((data) => {
                let khulshi_campus_notice = data;
                const getDBInfo = require("../../db");
                con = getDBInfo.con.con_for_kadamtali;
                con.connect(function (err) {
                    var sql = 'SELECT * FROM publicnotice ORDER BY ID DESC LIMIT 5';
                    con.query(sql, (err, result) => {
                        new Promise((resolve, reject) => {
                            let k = result;
                            resolve(k)
                        }).then((data) => {
                            let kadamtali_campus_notice = data;
                            const getDBInfo = require("../../db");
                            con = getDBInfo.con.con_for_majhirghat;
                            con.connect(function (err) {
                                var sql = 'SELECT * FROM publicnotice ORDER BY ID DESC LIMIT 5';
                                con.query(sql, (err, result) => {
                                    new Promise((resolve, reject) => {
                                        let m = result;
                                        resolve(m)
                                    }).then((data) => {
                                        let majhirghat_campus_notice = data;
                                        let publicNotice = []
                                        for (let i = 0; i < 20; i++) {
                                            const khulshi_campus_notice_data = khulshi_campus_notice[i]
                                            const kadamtali_campus_notice_data = kadamtali_campus_notice[i]
                                            const majhirghat_campus_notice_data = majhirghat_campus_notice[i]
                                            if (khulshi_campus_notice_data != undefined) {
                                                publicNotice.push(khulshi_campus_notice_data)
                                            }
                                            if (kadamtali_campus_notice_data != undefined) {
                                                publicNotice.push(kadamtali_campus_notice_data)
                                            }
                                            if (majhirghat_campus_notice_data != undefined) {
                                                publicNotice.push(majhirghat_campus_notice_data)
                                            }
                                        }
                                        res.render("publicNotice", {
                                            title: "Public Notice",
                                            message : publicNotice
                                        });


                                    })

                                })
                            })


                        })

                    })
                })
            })
            
        });
        

    })

    

    

})

router.get('/gallery', (req, res) => {
    res.render('gallery', {title: 'Gallery'})
})
router.get('/ourServices', (req, res) => {
    res.render('ourServices', {title: 'Our Services'})
})
router.get('/aboutUs', (req, res) => {
    res.render('aboutUs', {title: 'About Us'})
})
router.get('/login', (req, res) => {
    res.render('studentLoginForm', {title: 'Login'})
})

router.get('/classActivities', (req, res) => {
    let campus = req.cookies.campus;
    res.render("teachersActivity", {
        welcomeMsg: 'Teachers activities',
        title: "Teachers activities",
        campus: campus
    });
})

// router.post('/log', (req, res) => {
//     let campus = req.body.campus;
//     const sid = req.body.name;
//     const password = req.body.password;

//     let con;
//     if (campus == "") {
//         return res.render("studentLoginForm", {
//             errorMessage: "Please select campus!",
//         });

//     } else if (campus == "khulshi_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_khulshi;
//     } else if (campus == "kadamtali_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_kadamtali;
//     } else if (campus == "majhirghat_campus") {
//         const getDBInfo = require("../../db");
//         con = getDBInfo.con.con_for_majhirghat;
//     }

//     con.connect(function (err) {
//         var sql = `SELECT * FROM allstudents WHERE sid = '${sid}' AND password = '${password}'`;
//         con.query(sql, function (err, result) {
//             if (result.length <= 0) {
//                 res.render('studentLoginForm', { errorMessage: 'Please input correct Userid or Password' })
//             } else {

//                 if (req.cookies.imdm === undefined) {
//                     let sec = 86400000;
//                     res.cookie('imdm', `${sid}`, { maxAge: sec });
//                     res.cookie("campus", `${campus}`, { maxAge: sec });
//                 } else if (
//                     req.cookies.imdm !== `${sid}` &&
//                     req.cookies.campus !== `${campus}`
//                 ) {
//                     res.cookie("imdm", `${sid}`);
//                     res.cookie("campus", `${campus}`);
//                 }
//                 res.render('sProfile_final_2', { message: { result: result[0], welcomeMessage: 'Welcome to your profile' } })
//             }

//         });
//     });
// })

router.post('/student_login', (req, res) => {
    let campus = req.body.campus;
    const sid = req.body.sid;
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

    con.connect(function (err) {
        var sql = `SELECT * FROM allstudents WHERE sid = '${sid}' AND password = '${password}'`;
        con.query(sql, function (err, result) {
            if (result.length <= 0) {
                res.render('studentLoginForm', { errorMessage: 'Please input correct Userid or Password' })
            } else {

                if (req.cookies.imdm === undefined) {
                    let sec = 86400000;
                    res.cookie('imdm', `${sid}`, { maxAge: sec });
                    res.cookie("campus", `${campus}`, { maxAge: sec });
                } else if (
                    req.cookies.imdm !== `${sid}` &&
                    req.cookies.campus !== `${campus}`
                ) {
                    res.cookie("imdm", `${sid}`);
                    res.cookie("campus", `${campus}`);
                }
                res.render('sProfile_final_2_3', { message: { result: result[0], welcomeMessage: 'Welcome to your profile' } })
            }

        });
    });
})

router.post('/subscribe', (req, res) => {
    let email = req.body.email;
    const getDBInfo = require("../../db");
    const con = getDBInfo.con;

    con.connect(function (err) {
        var sql = `INSERT INTO subscribers (email) VALUES ("${email}")`;
        con.query(sql, function (err, result) {
            res.render("home", {
                title: 'IMDM Home'
            });
        });
    })
})


module.exports = router;