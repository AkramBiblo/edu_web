const express = require("express");
const result = express.Router();
var bodyParser = require("body-parser");
const { json } = require("body-parser");
// const { JSONParser } = require("formidable/parsers");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
let cookieParser = require("cookie-parser");
result.use(cookieParser());

const resultArray = [
  [
    (cid = "100"),
    (className = "K.G"),
    (AllSubjects = [
        "Quran & Tazbeed",//
        "Islamiat",//
        "Arabic",//
        "Bengali",//
        "English & Word Book",//
        "Mathematics",//
        "Drawing",//
        "General Knowledge",//
        "Hand Writing",//
        "Attendance & Good Manners"//
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 10, 10, 10, 10]),
  ],
  [
    (cid = "99"),
    (className = "Nursery"),
    (AllSubjects = [
        "Arabic",//
        "Islamiat",//
        "Bengali",//
        "English",//
        "Mathematics",//
        "Drawing",//
        "General Knowledge",//
        "Hand Writing",//
        "Attendance & Good Manners"
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 10, 10, 10, 10]),
  ],
  [
    (cid = "1"),
    (className = "Class 1"),
      (AllSubjects = [
          "Quran & Tazbeed",//
          "Islamiat",//
          "Arabic",//
          "Bengali",//
          "English",//
          "Mathematics",//
          "Spoken Arabic",//
          "Spoken English",//
          "Word Book",//
          "Computer",//
          "Drawing",//
          "General Knowledge",//
          "Attendance & Good Manners",//
          "Hand Writing"//
      ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 25, 25, 25, 25, 25, 25, 25, 25]),
      (passMarks = [40, 40, 40, 40, 40, 40, 10, 10, 10, 10, 10, 10, 10, 10]),
  ],
  [
    (cid = "2"),
    (className = "Class 2"),
    (AllSubjects = [
      "Quran & Tazbeed",//
      "Islamiat",//
      "Arabic",//
      "Bengali",//
      "English",//
      "Mathematics",//
      "Spoken Arabic",//
      "Spoken English",//
      "Word Book",//
      "Computer",//
      "Drawing",//
      "General Knowledge",//
      "Attendance & Good Manners",//
      "Hand Writing"//
    ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 25, 25, 25, 25, 25, 25, 25, 25]),
      (passMarks = [40, 40, 40, 40, 40, 40, 10, 10, 10, 10, 10, 10, 10, 10]),
  ],
  [
    (cid = "3"),
    (className = "Class 3"),
    (AllSubjects = [
      "Quran & Tazbeed",//
      "Islamiat & Fiqh",//
      "Arabic",//
      "Mathematics",//
      "Bengali & Bengali Grammar",//
      "English & English Grammar",//
        "Science",//
        "Bangladesh & Global Studies",//
        "General Knowledge",//
      "Word Book",//
      "Spoken English",//
      "Spoken Arabic",//
      "Computer",
      "Attendance & Good Manners"//
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 50, 50, 50, 25, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 20, 20, 20, 10, 10, 10, 10, 10]),
  ],
  [
    (cid = "4"),
    (className = "Class 4"),
    (AllSubjects = [
      "Quran & Tazbeed", //
      "Arabic 1st", //
      "Bengali & Bengali Grammar", //
      "English & English Grammar", //
      "Islamiat & Fiqh", //
      "Mathematics", //
      "Arabic 2nd", // Prv - Mizan
        "Bangladesh & Global Studies", //
        "Science", //
        "Qasasun Nabeyeen (History)", //
        "Aquied & Fiqh", //Prv-Talimul Mutallim - 50 Mark
      "Adab", //Prv - Mufidut Talibin
      "Spoken Arabic", //
      "Spoken English", //
      "Computer", //
      "Word Book", //
      "Attendance & Good Manners", //
    ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 100, 50, 50, 50, 50, 25, 25, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 40, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10]),
  ],
  [
    (cid = "5"),
    (className = "Class 5"),
    (AllSubjects = [
        "Quran & Hadith (Writing)",//100
        "Arabic 1st",//100
        "Arabic 2nd",//Prv-Mizan Monsaeeb - 100
        "Bengali & Bengali Grammar", //100
        "English & English Grammar", //100
        "Mathematics",//100
        "Aquied & Fiqh",//50 Need to be 100 in mark
        // "Fiqhul Muyassar",//50 Cancelled
        "Qasasun Nabeyeen", //50
        "Quran & Tazbeed (Oral)",//50
        "Bangladesh & Global Studies",//50
        "Science",//50
        "Spoken Arabic",//25
        "Spoken English",//25
        "Computer",//25
        "Attendance & Good Manners"//25
    ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 100, 50, 50, 50, 50, 50, 25, 25, 25, 25]),
      (passMarks = [40, 40, 40, 40, 40, 40, 40, 20, 20, 20, 20, 20, 10, 10, 10, 10]),
  ],
  [
    (cid = "6"),
    (className = "Class 6"),
    (AllSubjects = [
        "Quran & Hadith (Writing)",//100//
        "Arabic 1st",//100//
        "Arabic 2nd",//100//
        "Bengali & Bengali Grammar", //100//
        "English & English Grammar", //100//
        "Mathematics",//100//
        "Aquied Fiqh",//100//
        "Bangladesh & Global Studies",//75//should be 50
        "Qasasun Nabeyeen (History)", //50//
        "Quran & Tazbeed (Oral)",//50//
        "ICT",//50//
        "Science",//50//
        "Life & Livelihood",//100//Prv-Mizan Monsaeeb should be 50 
        "Attendance & Good Manners"//25//
    ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 100, 50, 50, 50, 50, 50, 50, 25]),
      (passMarks = [40, 40, 40, 40, 40, 40, 40, 20, 20, 20, 20, 20, 20, 10]),
  ],
  [
    (cid = "7"),
    (className = "Class 7"),
    (AllSubjects = [
      "Quraan Majid",
      "Akaeed & Fiqh",
      "Arabic 1st Part",
      "Arabic 2nd Part",
      "Bangla 1st part",
      "Bangla 2nd part",
      "English 1st part",
      "English 2nd part",
      "Math",
      "Science",
      "Bangladesh & World Introduction",
      "Agriculture",
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]),
    (passMarks = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]),
  ],
  [
    (cid = "8"),
    (className = "Class 8"),
    (AllSubjects = [
      "Quraan Majid",
      "Akaeed & Fiqh",
      "Arabic 1st Part",
      "Arabic 2nd Part",
      "Bangla 1st part",
      "Bangla 2nd part",
      "English 1st part",
      "English 2nd part",
      "Math",
      "Science",
      "Bangladesh & World Introduction",
      "Agriculture",
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]),
    (passMarks = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]),
  ],
];

result.post('/display/:sid', (req, res) => {
        let sid = req.params.sid
        let cid = req.body.cid
        let cls = `class${cid}`
        Number(sid)
        let getCID;
        let getSub;
        let getFM;
        let getPM;

        function updateData(c, s, f, p) {
            getCID = c;
            getSub = s;
            getFM = f;
            getPM = p
        }

        resultArray.forEach((data) => {
            let c = data[0]
            if (c == cid) {
                let cls = data[1]
                let sub = data[2]
                let fullM = data[3]
                let passM = data[4]
                updateData(cls, sub, fullM, passM)
            }
        })

            let FTermAttendance = []
            let STermAttendance = []
            let ATermAttendance = []

            function pushAttendance(TC, p, l, a, T) {
                if (T == 1) {
                    FTermAttendance.push(TC)
                    FTermAttendance.push(p)
                    FTermAttendance.push(l)
                    FTermAttendance.push(a)
                    
                } else if (T == 2) {
                    STermAttendance.push(TC)
                    STermAttendance.push(p)
                    STermAttendance.push(l)
                    STermAttendance.push(a)
                    
                } else if (T == 3) {
                    ATermAttendance.push(TC)
                    ATermAttendance.push(p)
                    ATermAttendance.push(l)
                    ATermAttendance.push(a)
                }
            }
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
                 
                 let attdQ = `SELECT * FROM ${cls} WHERE month <= "4"`
                    con.query(attdQ, (err, result) => {
                        if (result.length <= 0) {
                        } else {
                            let T = 1;
                            let TC = result.length
                            let presence = 0
                            let leaves = 0
                            let absence = 0
                            for (let i = 0; i < result.length; i++) {
                                const e = result[i];
                                let p = e.present;
                                let l = e.onLeave;
                                
                                if (p.includes(`${sid}`) == true) {
                                    presence++
                                } else if (l.includes(`${sid}`) == true) {
                                    leaves++
                                } else {
                                    absence++
                                }
                            }
                            pushAttendance(TC, presence, leaves, absence, T);
                        }
            
                    })
                 
                    let attdQ_2 = `SELECT * FROM ${cls} WHERE month >= "5" AND month <= "8"`
                    con.query(attdQ_2, (err, result) => {
                        if (result.length <= 0) {
                        } else {
                            let T = 2;
                            let TC = result.length
                            let presence = 0
                            let leaves = 0
                            let absence = 0
                            for (let i = 0; i < result.length; i++) {
                                const e = result[i];
                                let p = e.present;
                                let l = e.onLeave;
                                
                                if (p.includes(`${sid}`) == true) {
                                    presence++
                                } else if (l.includes(`${sid}`) == true) {
                                    leaves++
                                } else {
                                    absence++
                                }
                            }
                            pushAttendance(TC, presence, leaves, absence, T);
                        }
            
                    })
                    
                    let attdQ_3 = `SELECT * FROM ${cls} WHERE month > "8"`
                    con.query(attdQ_3, (err, result) => {
                        if (result.length <= 0) {
                        } else {
                            let T = 3;
                            let TC = result.length
                            let presence = 0
                            let leaves = 0
                            let absence = 0
                            for (let i = 0; i < result.length; i++) {
                                const e = result[i];
                                let p = e.present;
                                let l = e.onLeave;
                                
                                if (p.includes(`${sid}`) == true) {
                                    presence++
                                } else if (l.includes(`${sid}`) == true) {
                                    leaves++
                                } else {
                                    absence++
                                }
                            }
                            pushAttendance(TC, presence, leaves, absence, T);
                        }
            
                    })

            })
        

        if (cid == '99') {
            con.connect(function(err) {
            let sql = `SELECT * FROM first_r_play_nursery WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks};
                        res.send(allData);
                    } 
                    else {
                        
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        let arabic = sub.arabic
                                        let bangla = sub.bangla
                                        let math = sub.math
                                        let english = sub.english
                                        let islamiat = sub.islamiat
                                        let handWriting = sub.HR
                                        let GK = sub.GK
                                        let drawing = sub.drawing
                                        let AGM = sub.AGM

                                        // AllSubjects = ['Qaida', 'Arabic', 'Bangla', 'English', 'Math', 'GK and Drawing'],
                                        let gradeObtained = 0
                                        let g = [arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM];
                                        let gp = [];
                                        let lg = [];
                                        
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < 5) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }
                                        
                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                            if (gp[i] > 2) {
                                            extraPoints += gp[i] - 2
                                        }}

                                        let extraGPA = extraPoints / 2
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 2 ; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                        let finalGPAString = totalFinalGPA.toFixed(2); 
                                        let finalGPA = Number(finalGPAString)
                                        
                                        let calculatedGrade
                                        
                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }

                                        // let highestResult = []
                                        // let Harabic = 0;
                                        // let Hbangla = 0;
                                        // let Hmath = 0;
                                        // let Henglish = 0;
                                        // let Hislamiat = 0;
                                        // let HhandWriting = 0;
                                        // let HGK = 0;
                                        // let Hdrawing = 0;
                                        // let HAGM = 0;

                                        // let sql_highest_result = `SELECT * FROM first_r_play_nursery WHERE cid = "99"`
                                        // con.query(sql_highest_result, (err, resut) => {
                                        //     for (let i = 0; i < result.length; i++) {
                                        //         const r = result[i];
                                                
                                        //         if (r.arabic > Harabic) {
                                        //             Harabic = r.arabic
                                        //         }
                                        //         if (r.bangla > Hbangla) {
                                        //             Hbangla = r.bangla
                                        //         }
                                        //         if (r.math > Hmath) {
                                        //             Hmath = r.math
                                        //         }
                                        //         if (r.english > Henglish) {
                                        //             Henglish = r.english
                                        //         }
                                        //         if (r.islamiat > Hislamiat) {
                                        //             Hislamiat = r.islamiat
                                        //         }
                                        //         if (r.HR > HhandWriting) {
                                        //             HhandWriting = r.HR
                                        //         }
                                        //         if (r.GK > HGK) {
                                        //             HGK = r.GK
                                        //         }
                                        //         if (r.drawing > Hdrawing) {
                                        //             Hdrawing = r.drawing
                                        //         }
                                        //         if (r.AGM > HAGM) {
                                        //             HAGM = r.AGM
                                        //         }
                                        //     }
                                        // })
                                        // new Promise((resolve, reject) => {
                                        //     highestResult = [Harabic, Hislamiat, Hbangla, Henglish, Hmath, Hdrawing, HGK, HhandWriting, HAGM]
                                        //     resolve(highestResult)
                                        //     console.log(highestResult)
                                        // })
                                        
                                        new Promise((resolve, reject) => {
                                            
                                            first_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                            resolve(first_term_allMarks)
                                        })
                                    }
                                }
                                let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance};
                                let sql = `SELECT * FROM second_r_play_nursery WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                        res.send(allData);
                                    } else {
                                        // let second_term_allMarks;
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                let arabic = sub.arabic
                                                let bangla = sub.bangla
                                                let math = sub.math
                                                let english = sub.english
                                                let islamiat = sub.islamiat;
                                                let handWriting = sub.HR
                                                let GK = sub.GK
                                                let drawing = sub.drawing
                                                let AGM = sub.AGM

                                                let gradeObtained = 0
                                                let g = [arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 5) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }


                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints / 2
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 2; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                
                                                let calculatedGrade
                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }

                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(second_term_allMarks)
                                                })   
                                               
                                            }
                                        }
                                        
                                        let allData_2 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance};
                                        
                                        let sql = `SELECT * FROM annual_r_play_nursery WHERE sid = "${sid}"`
                                        con.query(sql, function (err, result) {
                                            if (result.length <= 0) {
                                                res.send(allData_2);
                                            } else {
                                                // let annual_term_allMarks
                                                for (const data in result) {
                                                    if (Object.hasOwnProperty.call(result, data)) {
                                                        const sub = result[data];
                                                        let arabic = sub.arabic
                                                        let bangla = sub.bangla
                                                        let math = sub.math
                                                        let english = sub.english
                                                        let islamiat = sub.islamiat
                                                        let handWriting = sub.HR
                                                        let GK = sub.GK
                                                        let drawing = sub.drawing
                                                        let AGM = sub.AGM

                                                        let gradeObtained = 0
                                                        let g = [arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM];
                                                        let gp = [];
                                                        let lg = [];

                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            Number(e)
                                                            let letterGrade;
                                                            let gradePoint;

                                                            if (i < 5) {
                                                                if (e > 79) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 74 && e <= 79) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 69 && e <= 74) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 64 && e <= 69) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 59 && e <= 64) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 54 && e <= 59) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 49 && e <= 54) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 44 && e <= 49) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 39 && e <= 44) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 39) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else {
                                                                if (e > 19.75) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 18.74 && e <= 19.75) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 17.49 && e <= 18.5) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 16.24 && e <= 17.25) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 14.99 && e <= 16) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 13.74 && e <= 14.75) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 12.49 && e <= 13.5) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 11.24 && e <= 12.25) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 9.99 && e <= 11) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 9.99) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            }
                                                            gradeObtained += e
                                                        }


                                                        let extraPoints = 0
                                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                            if (gp[i] > 2) {
                                                                extraPoints += gp[i] - 2
                                                            }
                                                        }

                                                        let extraGPA = extraPoints / 2;
                                                        let GPAinCompSub = 0
                                                        for (let i = 0; i < gp.length - 2; i++) {
                                                            const e = gp[i];
                                                            GPAinCompSub += e
                                                        }

                                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                                        let finalGPA = Number(finalGPAString)
                                                        let calculatedGrade

                                                        if (finalGPA > 3.99) {
                                                            calculatedGrade = 'A+'
                                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                            calculatedGrade = 'A'
                                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                            calculatedGrade = 'B+'
                                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                            calculatedGrade = 'B'
                                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                            calculatedGrade = 'B-'
                                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                            calculatedGrade = 'C+'
                                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                            calculatedGrade = 'C'
                                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                            calculatedGrade = 'D'
                                                        } else if (finalGPA <= 1.99) {
                                                            calculatedGrade = 'F'
                                                        }

                                                        if (finalGPA > 4) {
                                                            finalGPA = "4.00"
                                                        }
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                            resolve(annual_term_allMarks)
                                                        })   
                                                    
                                                    }
                                                }
                                                
                                                let allData_3 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance};
                                                res.send(allData_3);
                                            }
                                        })
                                    }
                                })
                    }
                    
                });
            });
        
        } if (cid == '100') {
            
            con.connect(function(err) {
            let sql = `SELECT * FROM first_r_play_nursery WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks};
                        res.send(allData);
                    } 
                    else {
                        
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        let arabic = sub.arabic
                                        let bangla = sub.bangla
                                        let math = sub.math
                                        let english = sub.english
                                        let islamiat = sub.islamiat
                                        let handWriting = sub.HR
                                        let GK = sub.GK
                                        let AGM = sub.AGM
                                        let drawing = sub.drawing
                                        let quranTazbeed = sub.quranTazbeed
                                        let wordBook = sub.wordBook
                                        // AllSubjects = ['Qaida', 'Arabic', 'Bangla', 'English', 'Math', 'GK and Drawing'],
                                        let gradeObtained = 0;
                                        let g = [
                                          quranTazbeed,
                                          islamiat,
                                          arabic,
                                          bangla,
                                          english,
                                          math,
                                          drawing,
                                          GK,
                                          handWriting,
                                          AGM
                                        ];
                                        let gp = [];
                                        let lg = [];

                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;

                                            if (i < 6) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }

                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                            if (gp[i] > 2) {
                                                extraPoints += gp[i] - 2
                                            }
                                        }

                                        let extraGPA = extraPoints / 2
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 2; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                        let finalGPA = Number(finalGPAString)
                                        let calculatedGrade

                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }
                                        new Promise((resolve, reject) => {
                                                
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                            resolve(first_term_allMarks)
                                        })
                                    }
                                }
                                let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance};
                                let sql = `SELECT * FROM second_r_play_nursery WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                       
                                        res.send(allData);
                                    } else {
                                        // let second_term_allMarks;
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                let arabic = sub.arabic
                                                let bangla = sub.bangla
                                                let math = sub.math
                                                let english = sub.english
                                                let islamiat = sub.islamiat;
                                                let handWriting = sub.HR
                                                let GK = sub.GK
                                                let AGM = sub.AGM
                                                let drawing = sub.drawing
                                                let quranTazbeed = sub.quranTazbeed
                                                let wordBook = sub.wordBook
                                                // AllSubjects = ['Qaida', 'Arabic', 'Bangla', 'English', 'Math', 'GK and Drawing'],
                                                let gradeObtained = 0
                                                let g = [
                                                quranTazbeed,
                                                islamiat,
                                                arabic,
                                                bangla,
                                                english,
                                                math,
                                                drawing,
                                                GK,
                                                handWriting,
                                                AGM
                                                ];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 6) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }

                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints / 2
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 2; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                let calculatedGrade

                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(second_term_allMarks)
                                                })   
                                               
                                            }
                                        }
                                        
                                        let allData_2 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance};
                                        
                                        let sql = `SELECT * FROM annual_r_play_nursery WHERE sid = "${sid}"`
                                        con.query(sql, function (err, result) {
                                            if (result.length <= 0) {
                                                res.send(allData_2);
                                            } else {
                                                // let annual_term_allMarks
                                                for (const data in result) {
                                                    if (Object.hasOwnProperty.call(result, data)) {
                                                        const sub = result[data];
                                                        let arabic = sub.arabic
                                                        let bangla = sub.bangla
                                                        let math = sub.math
                                                        let english = sub.english
                                                        let islamiat = sub.islamiat;
                                                        let handWriting = sub.HR
                                                        let GK = sub.GK
                                                        let AGM = sub.AGM
                                                        let drawing = sub.drawing
                                                        let quranTazbeed = sub.quranTazbeed
                                                        let wordBook = sub.wordBook
                                                        // AllSubjects = ['Qaida', 'Arabic', 'Bangla', 'English', 'Math', 'GK and Drawing'],
                                                        let gradeObtained = 0
                                                        let g = [
                                                        quranTazbeed,
                                                        islamiat,
                                                        arabic,
                                                        bangla,
                                                        english,
                                                        math,
                                                        drawing,
                                                        GK,
                                                        handWriting,
                                                        AGM
                                                        ];
                                                        let gp = [];
                                                        let lg = [];

                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            Number(e)
                                                            let letterGrade;
                                                            let gradePoint;

                                                            if (i < 6) {
                                                                if (e > 79) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 74 && e <= 79) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 69 && e <= 74) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 64 && e <= 69) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 59 && e <= 64) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 54 && e <= 59) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 49 && e <= 54) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 44 && e <= 49) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 39 && e <= 44) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 39) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else {
                                                                if (e > 19.75) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 18.74 && e <= 19.75) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 17.49 && e <= 18.5) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 16.24 && e <= 17.25) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 14.99 && e <= 16) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 13.74 && e <= 14.75) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 12.49 && e <= 13.5) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 11.24 && e <= 12.25) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 9.99 && e <= 11) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 9.99) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            }
                                                            gradeObtained += e
                                                        }

                                                        let extraPoints = 0
                                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                            if (gp[i] > 2) {
                                                                extraPoints += gp[i] - 2
                                                            }
                                                        }

                                                        let extraGPA = extraPoints / 2
                                                        let GPAinCompSub = 0
                                                        for (let i = 0; i < gp.length - 2; i++) {
                                                            const e = gp[i];
                                                            GPAinCompSub += e
                                                        }

                                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 7;
                                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                                        let finalGPA = Number(finalGPAString)
                                                        let calculatedGrade

                                                        if (finalGPA > 3.99) {
                                                            calculatedGrade = 'A+'
                                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                            calculatedGrade = 'A'
                                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                            calculatedGrade = 'B+'
                                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                            calculatedGrade = 'B'
                                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                            calculatedGrade = 'B-'
                                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                            calculatedGrade = 'C+'
                                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                            calculatedGrade = 'C'
                                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                            calculatedGrade = 'D'
                                                        } else if (finalGPA <= 1.99) {
                                                            calculatedGrade = 'F'
                                                        }      
                                                        
                                                        if (finalGPA > 4) {
                                                            finalGPA = "4.00"
                                                        }
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                            resolve(annual_term_allMarks)
                                                        })   
                                                    
                                                    }
                                                }
                                                
                                                let allData_3 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance};
                                                res.send(allData_3);
                                            }
                                        })
                                    }
                                })
                    }
                    
                });
            });
        
        } else if (cid == '1' || cid == '2') {
            
            con.connect(function(err) {

            let sql = `SELECT * FROM first_r_1st_2nd WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks};
                        res.send(allData);
                    } 
                    else {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        // let QM = sub.quraanMajid
                                        // let AF = sub.aqaidAndFiqh
                                        // let AD = sub.adduroosulArabiah
                                        let bangla = sub.bangla//
                                        let math = sub.math//
                                        let english = sub.english//
                                        let quranTazbeed = sub.quranTazbeed;//
                                        let islamiat = sub.islamiat;//
                                        let arabic = sub.arabic;//
                                        let spokenArabic = sub.spokenArabic;//
                                        let spokenEnglish = sub.spokenEnglish;//
                                        let wordBook = sub.wordBook;//
                                        let computer = sub.computer;//
                                        let drawing = sub.drawing;//
                                        let GK = sub.GK;//
                                        let AGM = sub.AGM;//
                                        let handWriting = sub.HR;//
                                        // let MQ = sub.MQ
                                        // let QA = sub.qaidaOrAmpara
                                        // let GK = sub.GK
                                        // let computer = sub.computer
                                        // Quraan Majid, Akaeed & Fiqh, Arabic, Bangla, English, Math, Amparah
                                        let gradeObtained = 0
                                        
                                        let g = [quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting];
                                        let gp = [];
                                        let lg = [];

                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;

                                            if (i < 6) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }

                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                            if (gp[i] > 2) {
                                                extraPoints += gp[i] - 2
                                            }
                                        }

                                        let extraGPA = extraPoints / 2
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 2; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 12;
                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                        let finalGPA = Number(finalGPAString)
                                        let calculatedGrade

                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }

                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                            resolve(first_term_allMarks)
                                        })
                                    }
                                }
                                let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance};
                                let sql = `SELECT * FROM second_r_1st_2nd WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                        
                                        res.send(allData);
                                    } else {
                                        // let second_term_allMarks;
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                 let bangla = sub.bangla
                                                let math = sub.math
                                                let english = sub.english
                                                let quranTazbeed = sub.quranTazbeed;
                                                let islamiat = sub.islamiat;
                                                let arabic = sub.arabic;
                                                let spokenArabic = sub.spokenArabic;
                                                let spokenEnglish = sub.spokenEnglish;
                                                let wordBook = sub.wordBook;
                                                let computer = sub.computer;
                                                let drawing = sub.drawing;
                                                let GK = sub.GK;
                                                let AGM = sub.AGM;
                                                let handWriting = sub.HR;

                                                let gradeObtained = 0
                                                let g = [quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 6) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }

                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints / 2
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 2; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 12;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                let calculatedGrade

                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }        
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(second_term_allMarks)
                                                })   
                                               
                                            }
                                        }
                                        
                                        let allData_2 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance};
                                        
                                        let sql = `SELECT * FROM annual_r_1st_2nd WHERE sid = "${sid}"`
                                        con.query(sql, function (err, result) {
                                            if (result.length <= 0) {
                                                res.send(allData_2);
                                            } else {
                                                // let annual_term_allMarks
                                                for (const data in result) {
                                                    if (Object.hasOwnProperty.call(result, data)) {
                                                        const sub = result[data];
                                                         let bangla = sub.bangla
                                                        let math = sub.math
                                                        let english = sub.english
                                                        let quranTazbeed = sub.quranTazbeed;
                                                        let islamiat = sub.islamiat;
                                                        let arabic = sub.arabic;
                                                        let spokenArabic = sub.spokenArabic;
                                                        let spokenEnglish = sub.spokenEnglish;
                                                        let wordBook = sub.wordBook;
                                                        let computer = sub.computer;
                                                        let drawing = sub.drawing;
                                                        let GK = sub.GK;
                                                        let handWriting = sub.HR;
                                                        let AGM = sub.AGM;
                                                        let gradeObtained = 0
                                                        let g = [quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting];
                                                        let gp = [];
                                                        let lg = [];

                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            Number(e)
                                                            let letterGrade;
                                                            let gradePoint;

                                                            if (i < 6) {
                                                                if (e > 79) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 74 && e <= 79) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 69 && e <= 74) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 64 && e <= 69) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 59 && e <= 64) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 54 && e <= 59) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 49 && e <= 54) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 44 && e <= 49) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 39 && e <= 44) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 39) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else {
                                                                if (e > 19.75) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 18.74 && e <= 19.75) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 17.49 && e <= 18.5) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 16.24 && e <= 17.25) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 14.99 && e <= 16) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 13.74 && e <= 14.75) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 12.49 && e <= 13.5) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 11.24 && e <= 12.25) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 9.99 && e <= 11) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 9.99) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            }
                                                            gradeObtained += e
                                                        }

                                                        let extraPoints = 0
                                                        for (let i = gp.length - 1; i >= gp.length - 2; i--) {
                                                            if (gp[i] > 2) {
                                                                extraPoints += gp[i] - 2
                                                            }
                                                        }

                                                        let extraGPA = extraPoints / 2
                                                        let GPAinCompSub = 0
                                                        for (let i = 0; i < gp.length - 2; i++) {
                                                            const e = gp[i];
                                                            GPAinCompSub += e
                                                        }

                                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 12;
                                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                                        let finalGPA = Number(finalGPAString)
                                                        let calculatedGrade

                                                        if (finalGPA > 3.99) {
                                                            calculatedGrade = 'A+'
                                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                            calculatedGrade = 'A'
                                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                            calculatedGrade = 'B+'
                                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                            calculatedGrade = 'B'
                                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                            calculatedGrade = 'B-'
                                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                            calculatedGrade = 'C+'
                                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                            calculatedGrade = 'C'
                                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                            calculatedGrade = 'D'
                                                        } else if (finalGPA <= 1.99) {
                                                            calculatedGrade = 'F'
                                                        }

                                                        if (finalGPA > 4) {
                                                            finalGPA = "4.00"
                                                        }

                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                            resolve(annual_term_allMarks)
                                                        })   
                                                    
                                                    }
                                                }
                                                
                                                let allData_3 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance};
                                                res.send(allData_3);
                                            }
                                        })
                                    }
                                })
                    }
                    
                });
            });
        } else if (cid == '3') {
            
            con.connect(function(err) {

            let sql = `SELECT * FROM first_r_3rd_5th WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks};
                        res.send(allData);
                    } 
                    else {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        // let QM = sub.quraanMajid
                                        // let AF = sub.aqaidAndFiqh
                                        // let abc_1st = sub.abc_1st
                                        // let abc_2nd = sub.abc_2nd
                                        // let bg_1st = sub.bg_1st
                                        // let bg_2nd = sub.bg_2nd
                                        // let eng_1st = sub.eng_1st
                                        // let eng_2nd = sub.eng_2nd
                                        // let math = sub.math
                                        // let nazerah = sub.nazerah
                                        // let science = sub.science
                                        // let BWI = sub.bwi
                                        let quranTazbeed = sub.quranTazbeed;//
                                        let islamiat = sub.islamiat;//
                                        let arabic = sub.arabic;//
                                        let spokenArabic = sub.spokenArabic;//
                                        let banglaWithGrammar = sub.banglaWithGrammar;//
                                        let englishWithGrammar = sub.englishWithGrammar;//
                                        let spokenEnglish = sub.spokenEnglish;//
                                        let math = sub.math;//
                                        let BGS = sub.BGS;//
                                        let science = sub.science;//
                                        let wordBook = sub.wordBook;//
                                        let GK = sub.GK;//
                                        let AGM = sub.AGM;//
                                        let computer = sub.computer;
                                        let gradeObtained = 0
                                        // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                        
                                        let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, computer, AGM];
                                        let gp = [];
                                        let lg = [];

                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;

                                            if (i < 6) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else if (i > 5 && i < 9) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                } else {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }

                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                            if (gp[i] > 2) {
                                                extraPoints += gp[i] - 2
                                            }
                                        }

                                        let extraGPA = extraPoints;
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 1; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                        let finalGPA = Number(finalGPAString)
                                        let calculatedGrade

                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }
                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                            resolve(first_term_allMarks)
                                        })
                                    }
                                }
                                let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance};
                                let sql = `SELECT * FROM second_r_3rd_5th WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                        res.send(allData);
                                    } else {
                                        // let second_term_allMarks;
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                // let QM = sub.quraanMajid
                                                // let AF = sub.aqaidAndFiqh
                                                // let abc_1st = sub.abc_1st
                                                // let abc_2nd = sub.abc_2nd
                                                // let bg_1st = sub.bg_1st
                                                // let bg_2nd = sub.bg_2nd
                                                // let eng_1st = sub.eng_1st
                                                // let eng_2nd = sub.eng_2nd
                                                // let math = sub.math
                                                // let nazerah = sub.nazerah
                                                // let science = sub.science
                                                // let BWI = sub.bwi
                                                let quranTazbeed = sub.quranTazbeed;//
                                                let islamiat = sub.islamiat;//
                                                let arabic = sub.arabic;//
                                                let spokenArabic = sub.spokenArabic;//
                                                let banglaWithGrammar = sub.banglaWithGrammar;//
                                                let englishWithGrammar = sub.englishWithGrammar;//
                                                let spokenEnglish = sub.spokenEnglish;//
                                                let math = sub.math;//
                                                let BGS = sub.BGS;//
                                                let science = sub.science;//
                                                let wordBook = sub.wordBook;//
                                                let GK = sub.GK;//
                                                let AGM = sub.AGM;//
                                                let computer = sub.computer;
                                                let gradeObtained = 0
                                                let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, computer, AGM];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 6) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else if (i > 5 && i < 9) {
                                                        if (e > 39.5) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 37 && e <= 39.5) {
                                                            letterGrade = 'A'
                                                        } else if (e > 34.5 && e <= 37) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 32 && e <= 34.5) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 29.5 && e <= 32) {
                                                            letterGrade = 'B'
                                                        } else if (e > 27 && e <= 29.5) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 24.5 && e <= 27) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 22 && e <= 24.5) {
                                                            letterGrade = 'C'
                                                        } else if (e > 19.99 && e <= 22) {
                                                            letterGrade = 'D'
                                                        } else {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }

                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints;
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 1; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                let calculatedGrade

                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }    
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(second_term_allMarks)
                                                })   
                                               
                                            }
                                        }
                                        
                                        let allData_2 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance};
                                        
                                        let sql = `SELECT * FROM annual_r_3rd_5th WHERE sid = "${sid}"`
                                        con.query(sql, function (err, result) {
                                            if (result.length <= 0) {
                                                res.send(allData_2);
                                            } else {
                                                // let annual_term_allMarks
                                                for (const data in result) {
                                                    if (Object.hasOwnProperty.call(result, data)) {
                                                        const sub = result[data];
                                                        // let QM = sub.quraanMajid
                                                        // let AF = sub.aqaidAndFiqh
                                                        // let abc_1st = sub.abc_1st
                                                        // let abc_2nd = sub.abc_2nd
                                                        // let bg_1st = sub.bg_1st
                                                        // let bg_2nd = sub.bg_2nd
                                                        // let eng_1st = sub.eng_1st
                                                        // let eng_2nd = sub.eng_2nd
                                                        // let math = sub.math
                                                        // let nazerah = sub.nazerah
                                                        // let science = sub.science
                                                        // let BWI = sub.bwi
                                                        let quranTazbeed = sub.quranTazbeed;//
                                                        let islamiat = sub.islamiat;//
                                                        let arabic = sub.arabic;//
                                                        let spokenArabic = sub.spokenArabic;//
                                                        let banglaWithGrammar = sub.banglaWithGrammar;//
                                                        let englishWithGrammar = sub.englishWithGrammar;//
                                                        let spokenEnglish = sub.spokenEnglish;//
                                                        let math = sub.math;//
                                                        let BGS = sub.BGS;//
                                                        let science = sub.science;//
                                                        let wordBook = sub.wordBook;//
                                                        let GK = sub.GK;//
                                                        let AGM = sub.AGM;//
                                                        let computer = sub.computer;
                                                        let gradeObtained = 0
                                                        let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, computer, AGM];
                                                        let gp = [];
                                                        let lg = [];

                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            Number(e)
                                                            let letterGrade;
                                                            let gradePoint;

                                                            if (i < 6) {
                                                                if (e > 79) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 74 && e <= 79) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 69 && e <= 74) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 64 && e <= 69) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 59 && e <= 64) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 54 && e <= 59) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 49 && e <= 54) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 44 && e <= 49) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 39 && e <= 44) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 39) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else if (i > 5 && i < 9) {
                                                                if (e > 39.5) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 37 && e <= 39.5) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 34.5 && e <= 37) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 32 && e <= 34.5) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 29.5 && e <= 32) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 27 && e <= 29.5) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 24.5 && e <= 27) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 22 && e <= 24.5) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 19.99 && e <= 22) {
                                                                    letterGrade = 'D'
                                                                } else {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else {
                                                                if (e > 19.75) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 18.74 && e <= 19.75) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 17.49 && e <= 18.5) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 16.24 && e <= 17.25) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 14.99 && e <= 16) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 13.74 && e <= 14.75) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 12.49 && e <= 13.5) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 11.24 && e <= 12.25) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 9.99 && e <= 11) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 9.99) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            }
                                                            gradeObtained += e
                                                        }

                                                        let extraPoints = 0
                                                        for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                            if (gp[i] > 2) {
                                                                extraPoints += gp[i] - 2
                                                            }
                                                        }

                                                        let extraGPA = extraPoints;
                                                        let GPAinCompSub = 0
                                                        for (let i = 0; i < gp.length - 1; i++) {
                                                            const e = gp[i];
                                                            GPAinCompSub += e
                                                        }
    
                                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                                        let finalGPA = Number(finalGPAString)
                                                        let calculatedGrade

                                                        if (finalGPA > 3.99) {
                                                            calculatedGrade = 'A+'
                                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                            calculatedGrade = 'A'
                                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                            calculatedGrade = 'B+'
                                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                            calculatedGrade = 'B'
                                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                            calculatedGrade = 'B-'
                                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                            calculatedGrade = 'C+'
                                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                            calculatedGrade = 'C'
                                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                            calculatedGrade = 'D'
                                                        } else if (finalGPA <= 1.99) {
                                                            calculatedGrade = 'F'
                                                        }

                                                        if (finalGPA > 4) {
                                                            finalGPA = "4.00"
                                                        } 
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                            resolve(annual_term_allMarks)
                                                        })   
                                                    
                                                    }
                                                }
                                                
                                                let allData_3 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance};
                                                
                                                res.send(allData_3);
                                            }
                                        })
                                    }
                                })
                    }
                    
                });
            });
        } else if (cid == '4') {
            
            con.connect(function(err) {

            let sql = `SELECT * FROM first_r_4th WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks};
                        res.send(allData);
                    } 
                    else {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        // let QM = sub.quraanMajid
                                        // let AF = sub.aqaidAndFiqh
                                        // let abc_1st = sub.abc_1st
                                        // let abc_2nd = sub.abc_2nd
                                        // let bg_1st = sub.bg_1st
                                        // let bg_2nd = sub.bg_2nd
                                        // let eng_1st = sub.eng_1st
                                        // let eng_2nd = sub.eng_2nd
                                        // let math = sub.math
                                        // let nazerah = sub.nazerah
                                        // let science = sub.science
                                        // let BWI = sub.bwi
                                        
                                        let quranTazbeed = sub.quranTazbeed;//
                                        let islamiat = sub.islamiat;//
                                        let hadith = sub.hadith;
                                        let MTZT = sub.MTZT;//
                                        let mizan = sub.mizan;//
                                        let arabic = sub.arabic;//
                                        let spokenArabic = sub.spokenArabic;//
                                        let bangla = sub.bangla;//
                                        let english = sub.english;//
                                        let spokenEnglish = sub.spokenEnglish;//
                                        let math = sub.math;//
                                        let BGS = sub.BGS;//
                                        let science = sub.science;//
                                        let computer = sub.computer;//
                                        let wordBook = sub.wordBook;//
                                        let QN = sub.QN;//
                                        let TM = sub.TM;//
                                        let AGM = sub.AGM;//

                                        let gradeObtained = 0;
                                        
                                        let g = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, TM, MTZT, spokenArabic, spokenEnglish, computer, wordBook, AGM];
                                        let gp = [];
                                        let lg = [];

                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;

                                            if (i < 7) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 11) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                } else {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }

                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                            if (gp[i] > 2) {
                                                extraPoints += gp[i] - 2
                                            }
                                        }

                                        let extraGPA = extraPoints;
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 1; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 16;
                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                        let finalGPA = Number(finalGPAString)
                                        let calculatedGrade

                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }  

                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                            resolve(first_term_allMarks)
                                        })
                                    }
                                }
                                let allData = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance};
                                let sql = `SELECT * FROM second_r_4th WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                        res.send(allData);
                                    } else {
                                        // let second_term_allMarks;
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                // let QM = sub.quraanMajid
                                                // let AF = sub.aqaidAndFiqh
                                                // let abc_1st = sub.abc_1st
                                                // let abc_2nd = sub.abc_2nd
                                                // let bg_1st = sub.bg_1st
                                                // let bg_2nd = sub.bg_2nd
                                                // let eng_1st = sub.eng_1st
                                                // let eng_2nd = sub.eng_2nd
                                                // let math = sub.math
                                                // let nazerah = sub.nazerah
                                                // let science = sub.science
                                                // let BWI = sub.bwi
                                                let quranTazbeed = sub.quranTazbeed;//
                                                let islamiat = sub.islamiat;//
                                                let hadith = sub.hadith;
                                                let MTZT = sub.MTZT;//
                                                let mizan = sub.mizan;//
                                                let arabic = sub.arabic;//
                                                let spokenArabic = sub.spokenArabic;//
                                                let bangla = sub.bangla;//
                                                let english = sub.english;//
                                                let spokenEnglish = sub.spokenEnglish;//
                                                let math = sub.math;//
                                                let BGS = sub.BGS;//
                                                let science = sub.science;//
                                                let computer = sub.computer;//
                                                let wordBook = sub.wordBook;//
                                                let QN = sub.QN;//
                                                let TM = sub.TM;//
                                                let AGM = sub.AGM;//
                                                let gradeObtained = 0
                                                let g = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 7) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else if (i > 6 && i < 10) {
                                                        if (e > 39.5) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 37 && e <= 39.5) {
                                                            letterGrade = 'A'
                                                        } else if (e > 34.5 && e <= 37) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 32 && e <= 34.5) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 29.5 && e <= 32) {
                                                            letterGrade = 'B'
                                                        } else if (e > 27 && e <= 29.5) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 24.5 && e <= 27) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 22 && e <= 24.5) {
                                                            letterGrade = 'C'
                                                        } else if (e > 19.99 && e <= 22) {
                                                            letterGrade = 'D'
                                                        } else {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }

                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints;
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 1; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 16;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                let calculatedGrade

                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }           
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(second_term_allMarks)
                                                })   
                                               
                                            }
                                        }
                                        
                                        let allData_2 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance};
                                        
                                        let sql = `SELECT * FROM annual_r_4th WHERE sid = "${sid}"`
                                        con.query(sql, function (err, result) {
                                            if (result.length <= 0) {
                                                res.send(allData_2);
                                            } else {
                                                // let annual_term_allMarks
                                                for (const data in result) {
                                                    if (Object.hasOwnProperty.call(result, data)) {
                                                        const sub = result[data];
                                                        // let QM = sub.quraanMajid
                                                        // let AF = sub.aqaidAndFiqh
                                                        // let abc_1st = sub.abc_1st
                                                        // let abc_2nd = sub.abc_2nd
                                                        // let bg_1st = sub.bg_1st
                                                        // let bg_2nd = sub.bg_2nd
                                                        // let eng_1st = sub.eng_1st
                                                        // let eng_2nd = sub.eng_2nd
                                                        // let math = sub.math
                                                        // let nazerah = sub.nazerah
                                                        // let science = sub.science
                                                        // let BWI = sub.bwi
                                                        let quranTazbeed = sub.quranTazbeed;//
                                                        let islamiat = sub.islamiat;//
                                                        let MTZT = sub.MTZT;//
                                                        let mizan = sub.mizan;//
                                                        let arabic = sub.arabic;//
                                                        let spokenArabic = sub.spokenArabic;//
                                                        let bangla = sub.bangla;//
                                                        let english = sub.english;//
                                                        let spokenEnglish = sub.spokenEnglish;//
                                                        let math = sub.math;//
                                                        let BGS = sub.BGS;//
                                                        let science = sub.science;//
                                                        let computer = sub.computer;//
                                                        let wordBook = sub.wordBook;//
                                                        let QN = sub.QN;//
                                                        let TM = sub.TM;//
                                                        let AGM = sub.AGM;//
                                                        let gradeObtained = 0
                                                        let g = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM];
                                                        let gp = [];
                                                        let lg = [];

                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            Number(e)
                                                            let letterGrade;
                                                            let gradePoint;

                                                            if (i < 7) {
                                                                if (e > 79) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 74 && e <= 79) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 69 && e <= 74) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 64 && e <= 69) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 59 && e <= 64) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 54 && e <= 59) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 49 && e <= 54) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 44 && e <= 49) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 39 && e <= 44) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 39) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else if (i > 6 && i < 10) {
                                                                if (e > 39.5) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 37 && e <= 39.5) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 34.5 && e <= 37) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 32 && e <= 34.5) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 29.5 && e <= 32) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 27 && e <= 29.5) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 24.5 && e <= 27) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 22 && e <= 24.5) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 19.99 && e <= 22) {
                                                                    letterGrade = 'D'
                                                                } else {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            } else {
                                                                if (e > 19.75) {
                                                                    letterGrade = 'A+'
                                                                } else if (e > 18.74 && e <= 19.75) {
                                                                    letterGrade = 'A'
                                                                } else if (e > 17.49 && e <= 18.5) {
                                                                    letterGrade = 'A-'
                                                                } else if (e > 16.24 && e <= 17.25) {
                                                                    letterGrade = 'B+'
                                                                } else if (e > 14.99 && e <= 16) {
                                                                    letterGrade = 'B'
                                                                } else if (e > 13.74 && e <= 14.75) {
                                                                    letterGrade = 'B-'
                                                                } else if (e > 12.49 && e <= 13.5) {
                                                                    letterGrade = 'C+'
                                                                } else if (e > 11.24 && e <= 12.25) {
                                                                    letterGrade = 'C'
                                                                } else if (e > 9.99 && e <= 11) {
                                                                    letterGrade = 'D'
                                                                } else if (e <= 9.99) {
                                                                    letterGrade = 'F'
                                                                }

                                                                lg.push(letterGrade)

                                                                if (letterGrade == 'A+') {
                                                                    gradePoint = 4.00
                                                                } else if (letterGrade == 'A') {
                                                                    gradePoint = 3.75
                                                                } else if (letterGrade == 'A-') {
                                                                    gradePoint = 3.50
                                                                } else if (letterGrade == 'B+') {
                                                                    gradePoint = 3.25
                                                                } else if (letterGrade == 'B') {
                                                                    gradePoint = 3.00
                                                                } else if (letterGrade == 'B-') {
                                                                    gradePoint = 2.75
                                                                } else if (letterGrade == 'C+') {
                                                                    gradePoint = 2.50
                                                                } else if (letterGrade == 'C') {
                                                                    gradePoint = 2.25
                                                                } else if (letterGrade == 'D') {
                                                                    gradePoint = 2.00
                                                                } else if (letterGrade == 'F') {
                                                                    gradePoint = 0
                                                                }

                                                                gp.push(gradePoint);
                                                            }
                                                            gradeObtained += e
                                                        }

                                                        let extraPoints = 0
                                                        for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                            if (gp[i] > 2) {
                                                                extraPoints += gp[i] - 2
                                                            }
                                                        }

                                                        let extraGPA = extraPoints;
                                                        let GPAinCompSub = 0
                                                        for (let i = 0; i < gp.length - 1; i++) {
                                                            const e = gp[i];
                                                            GPAinCompSub += e
                                                        }

                                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 16;
                                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                                        let finalGPA = Number(finalGPAString)
                                                        let calculatedGrade

                                                        if (finalGPA > 3.99) {
                                                            calculatedGrade = 'A+'
                                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                            calculatedGrade = 'A'
                                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                            calculatedGrade = 'B+'
                                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                            calculatedGrade = 'B'
                                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                            calculatedGrade = 'B-'
                                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                            calculatedGrade = 'C+'
                                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                            calculatedGrade = 'C'
                                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                            calculatedGrade = 'D'
                                                        } else if (finalGPA <= 1.99) {
                                                            calculatedGrade = 'F'
                                                        }

                                                        if (finalGPA > 4) {
                                                            finalGPA = "4.00"
                                                        }       
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                            resolve(annual_term_allMarks)
                                                        })   
                                                    
                                                    }
                                                }
                                                
                                                let allData_3 = {getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance};
                                                
                                                res.send(allData_3);
                                            }
                                        })
                                    }
                                })
                    }
                    
                });
            });
        } else if (cid == '5') {

        con.connect(function (err) {

            let sql = `SELECT * FROM first_r_5th WHERE sid = "${sid}" AND cid = "${cid}"`;
            con.query(sql, function (err, result) {
                if (result.length <= 0) {
                    let first_term_allMarks = [];
                    let second_term_allMarks = [];
                    let annual_term_allMarks = [];
                    let allData = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks };
                    res.send(allData);
                }
                else {
                    let first_term_allMarks = [];
                    let second_term_allMarks = [];
                    let annual_term_allMarks = [];
                    for (const data in result) {
                        if (Object.hasOwnProperty.call(result, data)) {
                            const sub = result[data];
                            let quranTazbeed = sub.quranTazbeed;
                            let hadith = sub.hadith;
                            let mizan = sub.mizan;
                            let arabic = sub.arabic;
                            let spokenArabic = sub.spokenArabic;
                            let bangla = sub.bangla;
                            let english = sub.english;
                            let spokenEnglish = sub.spokenEnglish;
                            let math = sub.math;
                            let BGS = sub.BGS;
                            let science = sub.science;
                            let computer = sub.computer;
                            let QN = sub.QN;
                            let AGM = sub.AGM;
                            let aqaed = sub.aqaed;
                            let FM = sub.FM;

                            let gradeObtained = 0;
                            
                            // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                            let g = [hadith, arabic, mizan, bangla, english, math, aqaed, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                            let gp = [];
                            let lg = [];

                            for (let i = 0; i < g.length; i++) {
                                const e = g[i];
                                Number(e)
                                let letterGrade;
                                let gradePoint;

                                if (i < 7) {
                                    if (e > 79) {
                                        letterGrade = 'A+'
                                    } else if (e > 74 && e <= 79) {
                                        letterGrade = 'A'
                                    } else if (e > 69 && e <= 74) {
                                        letterGrade = 'A-'
                                    } else if (e > 64 && e <= 69) {
                                        letterGrade = 'B+'
                                    } else if (e > 59 && e <= 64) {
                                        letterGrade = 'B'
                                    } else if (e > 54 && e <= 59) {
                                        letterGrade = 'B-'
                                    } else if (e > 49 && e <= 54) {
                                        letterGrade = 'C+'
                                    } else if (e > 44 && e <= 49) {
                                        letterGrade = 'C'
                                    } else if (e > 39 && e <= 44) {
                                        letterGrade = 'D'
                                    } else if (e <= 39) {
                                        letterGrade = 'F'
                                    }

                                    lg.push(letterGrade)

                                    if (letterGrade == 'A+') {
                                        gradePoint = 4.00
                                    } else if (letterGrade == 'A') {
                                        gradePoint = 3.75
                                    } else if (letterGrade == 'A-') {
                                        gradePoint = 3.50
                                    } else if (letterGrade == 'B+') {
                                        gradePoint = 3.25
                                    } else if (letterGrade == 'B') {
                                        gradePoint = 3.00
                                    } else if (letterGrade == 'B-') {
                                        gradePoint = 2.75
                                    } else if (letterGrade == 'C+') {
                                        gradePoint = 2.50
                                    } else if (letterGrade == 'C') {
                                        gradePoint = 2.25
                                    } else if (letterGrade == 'D') {
                                        gradePoint = 2.00
                                    } else if (letterGrade == 'F') {
                                        gradePoint = 0
                                    }

                                    gp.push(gradePoint);
                                } else if (i > 6 && i < 11) {
                                    if (e > 39.5) {
                                        letterGrade = 'A+'
                                    } else if (e > 37 && e <= 39.5) {
                                        letterGrade = 'A'
                                    } else if (e > 34.5 && e <= 37) {
                                        letterGrade = 'A-'
                                    } else if (e > 32 && e <= 34.5) {
                                        letterGrade = 'B+'
                                    } else if (e > 29.5 && e <= 32) {
                                        letterGrade = 'B'
                                    } else if (e > 27 && e <= 29.5) {
                                        letterGrade = 'B-'
                                    } else if (e > 24.5 && e <= 27) {
                                        letterGrade = 'C+'
                                    } else if (e > 22 && e <= 24.5) {
                                        letterGrade = 'C'
                                    } else if (e > 19.99 && e <= 22) {
                                        letterGrade = 'D'
                                    } else {
                                        letterGrade = 'F'
                                    }

                                    lg.push(letterGrade)

                                    if (letterGrade == 'A+') {
                                        gradePoint = 4.00
                                    } else if (letterGrade == 'A') {
                                        gradePoint = 3.75
                                    } else if (letterGrade == 'A-') {
                                        gradePoint = 3.50
                                    } else if (letterGrade == 'B+') {
                                        gradePoint = 3.25
                                    } else if (letterGrade == 'B') {
                                        gradePoint = 3.00
                                    } else if (letterGrade == 'B-') {
                                        gradePoint = 2.75
                                    } else if (letterGrade == 'C+') {
                                        gradePoint = 2.50
                                    } else if (letterGrade == 'C') {
                                        gradePoint = 2.25
                                    } else if (letterGrade == 'D') {
                                        gradePoint = 2.00
                                    } else if (letterGrade == 'F') {
                                        gradePoint = 0
                                    }

                                    gp.push(gradePoint);
                                } else {
                                    if (e > 19.75) {
                                        letterGrade = 'A+'
                                    } else if (e > 18.74 && e <= 19.75) {
                                        letterGrade = 'A'
                                    } else if (e > 17.49 && e <= 18.5) {
                                        letterGrade = 'A-'
                                    } else if (e > 16.24 && e <= 17.25) {
                                        letterGrade = 'B+'
                                    } else if (e > 14.99 && e <= 16) {
                                        letterGrade = 'B'
                                    } else if (e > 13.74 && e <= 14.75) {
                                        letterGrade = 'B-'
                                    } else if (e > 12.49 && e <= 13.5) {
                                        letterGrade = 'C+'
                                    } else if (e > 11.24 && e <= 12.25) {
                                        letterGrade = 'C'
                                    } else if (e > 9.99 && e <= 11) {
                                        letterGrade = 'D'
                                    } else if (e <= 9.99) {
                                        letterGrade = 'F'
                                    }

                                    lg.push(letterGrade)

                                    if (letterGrade == 'A+') {
                                        gradePoint = 4.00
                                    } else if (letterGrade == 'A') {
                                        gradePoint = 3.75
                                    } else if (letterGrade == 'A-') {
                                        gradePoint = 3.50
                                    } else if (letterGrade == 'B+') {
                                        gradePoint = 3.25
                                    } else if (letterGrade == 'B') {
                                        gradePoint = 3.00
                                    } else if (letterGrade == 'B-') {
                                        gradePoint = 2.75
                                    } else if (letterGrade == 'C+') {
                                        gradePoint = 2.50
                                    } else if (letterGrade == 'C') {
                                        gradePoint = 2.25
                                    } else if (letterGrade == 'D') {
                                        gradePoint = 2.00
                                    } else if (letterGrade == 'F') {
                                        gradePoint = 0
                                    }

                                    gp.push(gradePoint);
                                }
                                gradeObtained += e
                            }

                            let extraPoints = 0
                            for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                if (gp[i] > 2) {
                                    extraPoints += gp[i] - 2
                                }
                            }

                            let extraGPA = extraPoints;
                            let GPAinCompSub = 0
                            for (let i = 0; i < gp.length - 1; i++) {
                                const e = gp[i];
                                GPAinCompSub += e
                            }

                            let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 15;
                            let finalGPAString = totalFinalGPA.toFixed(2);
                            let finalGPA = Number(finalGPAString)
                            let calculatedGrade

                            if (finalGPA > 3.99) {
                                calculatedGrade = 'A+'
                            } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                calculatedGrade = 'A'
                            } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                calculatedGrade = 'A-'
                            } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                calculatedGrade = 'B+'
                            } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                calculatedGrade = 'B'
                            } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                calculatedGrade = 'B-'
                            } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                calculatedGrade = 'C+'
                            } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                calculatedGrade = 'C'
                            } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                calculatedGrade = 'D'
                            } else if (finalGPA <= 1.99) {
                                calculatedGrade = 'F'
                            }

                            if (finalGPA > 4) {
                                finalGPA = "4.00"
                            }  

                            new Promise((resolve, reject) => {
                                first_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                resolve(first_term_allMarks)
                            })
                        }
                    }
                    let allData = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance };
                    let sql = `SELECT * FROM second_r_5th WHERE sid = "${sid}"`
                    con.query(sql, function (err, result) {
                        if (result.length <= 0) {
                            res.send(allData);
                        } else {
                            // let second_term_allMarks;
                            for (const data in result) {
                                if (Object.hasOwnProperty.call(result, data)) {
                                    const sub = result[data];
                                    let quranTazbeed = sub.quranTazbeed;
                                    let hadith = sub.hadith;
                                    let mizan = sub.mizan;
                                    let arabic = sub.arabic;
                                    let spokenArabic = sub.spokenArabic;
                                    let bangla = sub.bangla;
                                    let english = sub.english;
                                    let spokenEnglish = sub.spokenEnglish;
                                    let math = sub.math;
                                    let BGS = sub.BGS;
                                    let science = sub.science;
                                    let computer = sub.computer;
                                    let QN = sub.QN;
                                    let AGM = sub.AGM;
                                    let aqaed = sub.aqaed;
                                    let FM = sub.FM;
                                    let gradeObtained = 0
                                    let g = [hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                                    let gp = [];
                                    let lg = [];

                                    for (let i = 0; i < g.length; i++) {
                                        const e = g[i];
                                        Number(e)
                                        let letterGrade;
                                        let gradePoint;

                                        if (i < 7) {
                                            if (e > 79) {
                                                letterGrade = 'A+'
                                            } else if (e > 74 && e <= 79) {
                                                letterGrade = 'A'
                                            } else if (e > 69 && e <= 74) {
                                                letterGrade = 'A-'
                                            } else if (e > 64 && e <= 69) {
                                                letterGrade = 'B+'
                                            } else if (e > 59 && e <= 64) {
                                                letterGrade = 'B'
                                            } else if (e > 54 && e <= 59) {
                                                letterGrade = 'B-'
                                            } else if (e > 49 && e <= 54) {
                                                letterGrade = 'C+'
                                            } else if (e > 44 && e <= 49) {
                                                letterGrade = 'C'
                                            } else if (e > 39 && e <= 44) {
                                                letterGrade = 'D'
                                            } else if (e <= 39) {
                                                letterGrade = 'F'
                                            }

                                            lg.push(letterGrade)

                                            if (letterGrade == 'A+') {
                                                gradePoint = 4.00
                                            } else if (letterGrade == 'A') {
                                                gradePoint = 3.75
                                            } else if (letterGrade == 'A-') {
                                                gradePoint = 3.50
                                            } else if (letterGrade == 'B+') {
                                                gradePoint = 3.25
                                            } else if (letterGrade == 'B') {
                                                gradePoint = 3.00
                                            } else if (letterGrade == 'B-') {
                                                gradePoint = 2.75
                                            } else if (letterGrade == 'C+') {
                                                gradePoint = 2.50
                                            } else if (letterGrade == 'C') {
                                                gradePoint = 2.25
                                            } else if (letterGrade == 'D') {
                                                gradePoint = 2.00
                                            } else if (letterGrade == 'F') {
                                                gradePoint = 0
                                            }

                                            gp.push(gradePoint);
                                        } else if (i > 6 && i < 13) {
                                            if (e > 39.5) {
                                                letterGrade = 'A+'
                                            } else if (e > 37 && e <= 39.5) {
                                                letterGrade = 'A'
                                            } else if (e > 34.5 && e <= 37) {
                                                letterGrade = 'A-'
                                            } else if (e > 32 && e <= 34.5) {
                                                letterGrade = 'B+'
                                            } else if (e > 29.5 && e <= 32) {
                                                letterGrade = 'B'
                                            } else if (e > 27 && e <= 29.5) {
                                                letterGrade = 'B-'
                                            } else if (e > 24.5 && e <= 27) {
                                                letterGrade = 'C+'
                                            } else if (e > 22 && e <= 24.5) {
                                                letterGrade = 'C'
                                            } else if (e > 19.99 && e <= 22) {
                                                letterGrade = 'D'
                                            } else {
                                                letterGrade = 'F'
                                            }

                                            lg.push(letterGrade)

                                            if (letterGrade == 'A+') {
                                                gradePoint = 4.00
                                            } else if (letterGrade == 'A') {
                                                gradePoint = 3.75
                                            } else if (letterGrade == 'A-') {
                                                gradePoint = 3.50
                                            } else if (letterGrade == 'B+') {
                                                gradePoint = 3.25
                                            } else if (letterGrade == 'B') {
                                                gradePoint = 3.00
                                            } else if (letterGrade == 'B-') {
                                                gradePoint = 2.75
                                            } else if (letterGrade == 'C+') {
                                                gradePoint = 2.50
                                            } else if (letterGrade == 'C') {
                                                gradePoint = 2.25
                                            } else if (letterGrade == 'D') {
                                                gradePoint = 2.00
                                            } else if (letterGrade == 'F') {
                                                gradePoint = 0
                                            }

                                            gp.push(gradePoint);
                                        } else {
                                            if (e > 19.75) {
                                                letterGrade = 'A+'
                                            } else if (e > 18.74 && e <= 19.75) {
                                                letterGrade = 'A'
                                            } else if (e > 17.49 && e <= 18.5) {
                                                letterGrade = 'A-'
                                            } else if (e > 16.24 && e <= 17.25) {
                                                letterGrade = 'B+'
                                            } else if (e > 14.99 && e <= 16) {
                                                letterGrade = 'B'
                                            } else if (e > 13.74 && e <= 14.75) {
                                                letterGrade = 'B-'
                                            } else if (e > 12.49 && e <= 13.5) {
                                                letterGrade = 'C+'
                                            } else if (e > 11.24 && e <= 12.25) {
                                                letterGrade = 'C'
                                            } else if (e > 9.99 && e <= 11) {
                                                letterGrade = 'D'
                                            } else if (e <= 9.99) {
                                                letterGrade = 'F'
                                            }

                                            lg.push(letterGrade)

                                            if (letterGrade == 'A+') {
                                                gradePoint = 4.00
                                            } else if (letterGrade == 'A') {
                                                gradePoint = 3.75
                                            } else if (letterGrade == 'A-') {
                                                gradePoint = 3.50
                                            } else if (letterGrade == 'B+') {
                                                gradePoint = 3.25
                                            } else if (letterGrade == 'B') {
                                                gradePoint = 3.00
                                            } else if (letterGrade == 'B-') {
                                                gradePoint = 2.75
                                            } else if (letterGrade == 'C+') {
                                                gradePoint = 2.50
                                            } else if (letterGrade == 'C') {
                                                gradePoint = 2.25
                                            } else if (letterGrade == 'D') {
                                                gradePoint = 2.00
                                            } else if (letterGrade == 'F') {
                                                gradePoint = 0
                                            }

                                            gp.push(gradePoint);
                                        }
                                        gradeObtained += e
                                    }

                                    let extraPoints = 0
                                    for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                        if (gp[i] > 2) {
                                            extraPoints += gp[i] - 2
                                        }
                                    }

                                    let extraGPA = extraPoints;
                                    let GPAinCompSub = 0
                                    for (let i = 0; i < gp.length - 1; i++) {
                                        const e = gp[i];
                                        GPAinCompSub += e
                                    }

                                    let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 16;
                                    let finalGPAString = totalFinalGPA.toFixed(2);
                                    let finalGPA = Number(finalGPAString)
                                    let calculatedGrade

                                    if (finalGPA > 3.99) {
                                        calculatedGrade = 'A+'
                                    } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                        calculatedGrade = 'A'
                                    } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                        calculatedGrade = 'A-'
                                    } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                        calculatedGrade = 'B+'
                                    } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                        calculatedGrade = 'B'
                                    } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                        calculatedGrade = 'B-'
                                    } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                        calculatedGrade = 'C+'
                                    } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                        calculatedGrade = 'C'
                                    } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                        calculatedGrade = 'D'
                                    } else if (finalGPA <= 1.99) {
                                        calculatedGrade = 'F'
                                    }

                                    if (finalGPA > 4) {
                                        finalGPA = "4.00"
                                    }  
                                    new Promise((resolve, reject) => {
                                        second_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                        resolve(second_term_allMarks)
                                    })

                                }
                            }

                            let allData_2 = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance };

                            let sql = `SELECT * FROM annual_r_5th WHERE sid = "${sid}"`
                            con.query(sql, function (err, result) {
                                if (result.length <= 0) {
                                    res.send(allData_2);
                                } else {
                                    // let annual_term_allMarks
                                    for (const data in result) {
                                        if (Object.hasOwnProperty.call(result, data)) {
                                            const sub = result[data];
                                            let quranTazbeed = sub.quranTazbeed;
                                            let hadith = sub.hadith;
                                            let mizan = sub.mizan;
                                            let arabic = sub.arabic;
                                            let spokenArabic = sub.spokenArabic;
                                            let bangla = sub.bangla;
                                            let english = sub.english;
                                            let spokenEnglish = sub.spokenEnglish;
                                            let math = sub.math;
                                            let BGS = sub.BGS;
                                            let science = sub.science;
                                            let computer = sub.computer;
                                            let QN = sub.QN;
                                            let AGM = sub.AGM;
                                            let aqaed = sub.aqaed;
                                            let FM = sub.FM;
                                            let gradeObtained = 0
                                            let g = [hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                                            let gp = [];
                                            let lg = [];

                                            for (let i = 0; i < g.length; i++) {
                                                const e = g[i];
                                                Number(e)
                                                let letterGrade;
                                                let gradePoint;

                                                if (i < 7) {
                                                    if (e > 79) {
                                                        letterGrade = 'A+'
                                                    } else if (e > 74 && e <= 79) {
                                                        letterGrade = 'A'
                                                    } else if (e > 69 && e <= 74) {
                                                        letterGrade = 'A-'
                                                    } else if (e > 64 && e <= 69) {
                                                        letterGrade = 'B+'
                                                    } else if (e > 59 && e <= 64) {
                                                        letterGrade = 'B'
                                                    } else if (e > 54 && e <= 59) {
                                                        letterGrade = 'B-'
                                                    } else if (e > 49 && e <= 54) {
                                                        letterGrade = 'C+'
                                                    } else if (e > 44 && e <= 49) {
                                                        letterGrade = 'C'
                                                    } else if (e > 39 && e <= 44) {
                                                        letterGrade = 'D'
                                                    } else if (e <= 39) {
                                                        letterGrade = 'F'
                                                    }

                                                    lg.push(letterGrade)

                                                    if (letterGrade == 'A+') {
                                                        gradePoint = 4.00
                                                    } else if (letterGrade == 'A') {
                                                        gradePoint = 3.75
                                                    } else if (letterGrade == 'A-') {
                                                        gradePoint = 3.50
                                                    } else if (letterGrade == 'B+') {
                                                        gradePoint = 3.25
                                                    } else if (letterGrade == 'B') {
                                                        gradePoint = 3.00
                                                    } else if (letterGrade == 'B-') {
                                                        gradePoint = 2.75
                                                    } else if (letterGrade == 'C+') {
                                                        gradePoint = 2.50
                                                    } else if (letterGrade == 'C') {
                                                        gradePoint = 2.25
                                                    } else if (letterGrade == 'D') {
                                                        gradePoint = 2.00
                                                    } else if (letterGrade == 'F') {
                                                        gradePoint = 0
                                                    }

                                                    gp.push(gradePoint);
                                                } else if (i > 6 && i < 13) {
                                                    if (e > 39.5) {
                                                        letterGrade = 'A+'
                                                    } else if (e > 37 && e <= 39.5) {
                                                        letterGrade = 'A'
                                                    } else if (e > 34.5 && e <= 37) {
                                                        letterGrade = 'A-'
                                                    } else if (e > 32 && e <= 34.5) {
                                                        letterGrade = 'B+'
                                                    } else if (e > 29.5 && e <= 32) {
                                                        letterGrade = 'B'
                                                    } else if (e > 27 && e <= 29.5) {
                                                        letterGrade = 'B-'
                                                    } else if (e > 24.5 && e <= 27) {
                                                        letterGrade = 'C+'
                                                    } else if (e > 22 && e <= 24.5) {
                                                        letterGrade = 'C'
                                                    } else if (e > 19.99 && e <= 22) {
                                                        letterGrade = 'D'
                                                    } else {
                                                        letterGrade = 'F'
                                                    }

                                                    lg.push(letterGrade)

                                                    if (letterGrade == 'A+') {
                                                        gradePoint = 4.00
                                                    } else if (letterGrade == 'A') {
                                                        gradePoint = 3.75
                                                    } else if (letterGrade == 'A-') {
                                                        gradePoint = 3.50
                                                    } else if (letterGrade == 'B+') {
                                                        gradePoint = 3.25
                                                    } else if (letterGrade == 'B') {
                                                        gradePoint = 3.00
                                                    } else if (letterGrade == 'B-') {
                                                        gradePoint = 2.75
                                                    } else if (letterGrade == 'C+') {
                                                        gradePoint = 2.50
                                                    } else if (letterGrade == 'C') {
                                                        gradePoint = 2.25
                                                    } else if (letterGrade == 'D') {
                                                        gradePoint = 2.00
                                                    } else if (letterGrade == 'F') {
                                                        gradePoint = 0
                                                    }

                                                    gp.push(gradePoint);
                                                } else {
                                                    if (e > 19.75) {
                                                        letterGrade = 'A+'
                                                    } else if (e > 18.74 && e <= 19.75) {
                                                        letterGrade = 'A'
                                                    } else if (e > 17.49 && e <= 18.5) {
                                                        letterGrade = 'A-'
                                                    } else if (e > 16.24 && e <= 17.25) {
                                                        letterGrade = 'B+'
                                                    } else if (e > 14.99 && e <= 16) {
                                                        letterGrade = 'B'
                                                    } else if (e > 13.74 && e <= 14.75) {
                                                        letterGrade = 'B-'
                                                    } else if (e > 12.49 && e <= 13.5) {
                                                        letterGrade = 'C+'
                                                    } else if (e > 11.24 && e <= 12.25) {
                                                        letterGrade = 'C'
                                                    } else if (e > 9.99 && e <= 11) {
                                                        letterGrade = 'D'
                                                    } else if (e <= 9.99) {
                                                        letterGrade = 'F'
                                                    }

                                                    lg.push(letterGrade)

                                                    if (letterGrade == 'A+') {
                                                        gradePoint = 4.00
                                                    } else if (letterGrade == 'A') {
                                                        gradePoint = 3.75
                                                    } else if (letterGrade == 'A-') {
                                                        gradePoint = 3.50
                                                    } else if (letterGrade == 'B+') {
                                                        gradePoint = 3.25
                                                    } else if (letterGrade == 'B') {
                                                        gradePoint = 3.00
                                                    } else if (letterGrade == 'B-') {
                                                        gradePoint = 2.75
                                                    } else if (letterGrade == 'C+') {
                                                        gradePoint = 2.50
                                                    } else if (letterGrade == 'C') {
                                                        gradePoint = 2.25
                                                    } else if (letterGrade == 'D') {
                                                        gradePoint = 2.00
                                                    } else if (letterGrade == 'F') {
                                                        gradePoint = 0
                                                    }

                                                    gp.push(gradePoint);
                                                }
                                                gradeObtained += e
                                            }

                                            let extraPoints = 0
                                            for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                if (gp[i] > 2) {
                                                    extraPoints += gp[i] - 2
                                                }
                                            }

                                            let extraGPA = extraPoints;
                                            let GPAinCompSub = 0
                                            for (let i = 0; i < gp.length - 1; i++) {
                                                const e = gp[i];
                                                GPAinCompSub += e
                                            }

                                            let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 16;
                                            let finalGPAString = totalFinalGPA.toFixed(2);
                                            let finalGPA = Number(finalGPAString)
                                            let calculatedGrade

                                            if (finalGPA > 3.99) {
                                                calculatedGrade = 'A+'
                                            } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                calculatedGrade = 'A'
                                            } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                calculatedGrade = 'A-'
                                            } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                calculatedGrade = 'B+'
                                            } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                calculatedGrade = 'B'
                                            } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                calculatedGrade = 'B-'
                                            } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                calculatedGrade = 'C+'
                                            } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                calculatedGrade = 'C'
                                            } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                calculatedGrade = 'D'
                                            } else if (finalGPA <= 1.99) {
                                                calculatedGrade = 'F'
                                            }

                                            if (finalGPA > 4) {
                                                finalGPA = "4.00"
                                            }  
                                            new Promise((resolve, reject) => {
                                                annual_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                resolve(annual_term_allMarks)
                                            })

                                        }
                                    }

                                    let allData_3 = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance };

                                    res.send(allData_3);
                                }
                            })
                        }
                    })
                }

            });
        });
        } else if (cid == '6') {

            con.connect(function (err) {

                let sql = `SELECT * FROM first_r_6th WHERE sid = "${sid}" AND cid = "${cid}"`;
                con.query(sql, function (err, result) {
                    if (result.length <= 0) {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        let allData = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks };
                        res.send(allData);
                    }
                    else {
                        let first_term_allMarks = [];
                        let second_term_allMarks = [];
                        let annual_term_allMarks = [];
                        for (const data in result) {
                            if (Object.hasOwnProperty.call(result, data)) {
                                const sub = result[data];
                                let quranTazbeed = sub.quranTazbeed;
                                let hadith = sub.hadith;
                                let mizan = sub.mizan;
                                let arabic = sub.arabic;
                                let arabic_2 = sub.arabic_2;
                                let spokenArabic = sub.spokenArabic;
                                let bangla = sub.bangla;
                                let english = sub.english;
                                let spokenEnglish = sub.spokenEnglish;
                                let math = sub.math;
                                let BGS = sub.BGS;
                                let science = sub.science;
                                let computer = sub.computer;
                                let QN = sub.QN;
                                let AGM = sub.AGM;
                                let aqaed = sub.aqaed;
                                let FM = sub.FM;
                                let ICT = sub.ICT;

                                let gradeObtained = 0;

                                // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                let g = [hadith, arabic, arabic_2, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, mizan, AGM];
                                let gp = [];
                                let lg = [];

                                for (let i = 0; i < g.length; i++) {
                                    const e = g[i];
                                    Number(e)
                                    let letterGrade;
                                    let gradePoint;

                                    // if (i < 8) {
                                    //     if (e > 79) {
                                    //         letterGrade = 'A+'
                                    //     } else if (e > 74 && e <= 79) {
                                    //         letterGrade = 'A'
                                    //     } else if (e > 69 && e <= 74) {
                                    //         letterGrade = 'A-'
                                    //     } else if (e > 64 && e <= 69) {
                                    //         letterGrade = 'B+'
                                    //     } else if (e > 59 && e <= 64) {
                                    //         letterGrade = 'B'
                                    //     } else if (e > 54 && e <= 59) {
                                    //         letterGrade = 'B-'
                                    //     } else if (e > 49 && e <= 54) {
                                    //         letterGrade = 'C+'
                                    //     } else if (e > 44 && e <= 49) {
                                    //         letterGrade = 'C'
                                    //     } else if (e > 39 && e <= 44) {
                                    //         letterGrade = 'D'
                                    //     } else if (e <= 39) {
                                    //         letterGrade = 'F'
                                    //     }

                                    //     lg.push(letterGrade)

                                    //     if (letterGrade == 'A+') {
                                    //         gradePoint = 4.00
                                    //     } else if (letterGrade == 'A') {
                                    //         gradePoint = 3.75
                                    //     } else if (letterGrade == 'A-') {
                                    //         gradePoint = 3.50
                                    //     } else if (letterGrade == 'B+') {
                                    //         gradePoint = 3.25
                                    //     } else if (letterGrade == 'B') {
                                    //         gradePoint = 3.00
                                    //     } else if (letterGrade == 'B-') {
                                    //         gradePoint = 2.75
                                    //     } else if (letterGrade == 'C+') {
                                    //         gradePoint = 2.50
                                    //     } else if (letterGrade == 'C') {
                                    //         gradePoint = 2.25
                                    //     } else if (letterGrade == 'D') {
                                    //         gradePoint = 2.00
                                    //     } else if (letterGrade == 'F') {
                                    //         gradePoint = 0
                                    //     }

                                    //     gp.push(gradePoint);
                                    // } else if (i == 8) {
                                    //     if (e > 59.25) {
                                    //         letterGrade = 'A+'
                                    //     } else if (e > 55.5 && e <= 59.25) {
                                    //         letterGrade = 'A'
                                    //     } else if (e > 51.75 && e <= 55.5) {
                                    //         letterGrade = 'A-'
                                    //     } else if (e > 48 && e <= 51.75) {
                                    //         letterGrade = 'B+'
                                    //     } else if (e > 44.25 && e <= 48) {
                                    //         letterGrade = 'B'
                                    //     } else if (e > 40.5 && e <= 44.25) {
                                    //         letterGrade = 'B-'
                                    //     } else if (e > 36.75 && e <= 40.5) {
                                    //         letterGrade = 'C+'
                                    //     } else if (e > 33 && e <= 36.75) {
                                    //         letterGrade = 'C'
                                    //     } else if (e > 29.25 && e <= 33) {
                                    //         letterGrade = 'D'
                                    //     } else {
                                    //         letterGrade = 'F'
                                    //     }

                                    //     lg.push(letterGrade)

                                    //     if (letterGrade == 'A+') {
                                    //         gradePoint = 4.00
                                    //     } else if (letterGrade == 'A') {
                                    //         gradePoint = 3.75
                                    //     } else if (letterGrade == 'A-') {
                                    //         gradePoint = 3.50
                                    //     } else if (letterGrade == 'B+') {
                                    //         gradePoint = 3.25
                                    //     } else if (letterGrade == 'B') {
                                    //         gradePoint = 3.00
                                    //     } else if (letterGrade == 'B-') {
                                    //         gradePoint = 2.75
                                    //     } else if (letterGrade == 'C+') {
                                    //         gradePoint = 2.50
                                    //     } else if (letterGrade == 'C') {
                                    //         gradePoint = 2.25
                                    //     } else if (letterGrade == 'D') {
                                    //         gradePoint = 2.00
                                    //     } else if (letterGrade == 'F') {
                                    //         gradePoint = 0
                                    //     }

                                    //     gp.push(gradePoint);
                                    // } else if (i > 8 && i < 13) {
                                    //     if (e > 39.5) {
                                    //         letterGrade = 'A+'
                                    //     } else if (e > 37 && e <= 39.5) {
                                    //         letterGrade = 'A'
                                    //     } else if (e > 34.5 && e <= 37) {
                                    //         letterGrade = 'A-'
                                    //     } else if (e > 32 && e <= 34.5) {
                                    //         letterGrade = 'B+'
                                    //     } else if (e > 29.5 && e <= 32) {
                                    //         letterGrade = 'B'
                                    //     } else if (e > 27 && e <= 29.5) {
                                    //         letterGrade = 'B-'
                                    //     } else if (e > 24.5 && e <= 27) {
                                    //         letterGrade = 'C+'
                                    //     } else if (e > 22 && e <= 24.5) {
                                    //         letterGrade = 'C'
                                    //     } else if (e > 19.99 && e <= 22) {
                                    //         letterGrade = 'D'
                                    //     } else {
                                    //         letterGrade = 'F'
                                    //     }

                                    //     lg.push(letterGrade)

                                    //     if (letterGrade == 'A+') {
                                    //         gradePoint = 4.00
                                    //     } else if (letterGrade == 'A') {
                                    //         gradePoint = 3.75
                                    //     } else if (letterGrade == 'A-') {
                                    //         gradePoint = 3.50
                                    //     } else if (letterGrade == 'B+') {
                                    //         gradePoint = 3.25
                                    //     } else if (letterGrade == 'B') {
                                    //         gradePoint = 3.00
                                    //     } else if (letterGrade == 'B-') {
                                    //         gradePoint = 2.75
                                    //     } else if (letterGrade == 'C+') {
                                    //         gradePoint = 2.50
                                    //     } else if (letterGrade == 'C') {
                                    //         gradePoint = 2.25
                                    //     } else if (letterGrade == 'D') {
                                    //         gradePoint = 2.00
                                    //     } else if (letterGrade == 'F') {
                                    //         gradePoint = 0
                                    //     }

                                    //     gp.push(gradePoint);
                                    // } else {
                                    //     if (e > 19.75) {
                                    //         letterGrade = 'A+'
                                    //     } else if (e > 18.74 && e <= 19.75) {
                                    //         letterGrade = 'A'
                                    //     } else if (e > 17.49 && e <= 18.5) {
                                    //         letterGrade = 'A-'
                                    //     } else if (e > 16.24 && e <= 17.25) {
                                    //         letterGrade = 'B+'
                                    //     } else if (e > 14.99 && e <= 16) {
                                    //         letterGrade = 'B'
                                    //     } else if (e > 13.74 && e <= 14.75) {
                                    //         letterGrade = 'B-'
                                    //     } else if (e > 12.49 && e <= 13.5) {
                                    //         letterGrade = 'C+'
                                    //     } else if (e > 11.24 && e <= 12.25) {
                                    //         letterGrade = 'C'
                                    //     } else if (e > 9.99 && e <= 11) {
                                    //         letterGrade = 'D'
                                    //     } else if (e <= 9.99) {
                                    //         letterGrade = 'F'
                                    //     }

                                    //     lg.push(letterGrade)

                                    //     if (letterGrade == 'A+') {
                                    //         gradePoint = 4.00
                                    //     } else if (letterGrade == 'A') {
                                    //         gradePoint = 3.75
                                    //     } else if (letterGrade == 'A-') {
                                    //         gradePoint = 3.50
                                    //     } else if (letterGrade == 'B+') {
                                    //         gradePoint = 3.25
                                    //     } else if (letterGrade == 'B') {
                                    //         gradePoint = 3.00
                                    //     } else if (letterGrade == 'B-') {
                                    //         gradePoint = 2.75
                                    //     } else if (letterGrade == 'C+') {
                                    //         gradePoint = 2.50
                                    //     } else if (letterGrade == 'C') {
                                    //         gradePoint = 2.25
                                    //     } else if (letterGrade == 'D') {
                                    //         gradePoint = 2.00
                                    //     } else if (letterGrade == 'F') {
                                    //         gradePoint = 0
                                    //     }

                                    //     gp.push(gradePoint);
                                    // }

                                    if (i < 7) {
                                        if (e > 79) {
                                            letterGrade = 'A+'
                                        } else if (e > 74 && e <= 79) {
                                            letterGrade = 'A'
                                        } else if (e > 69 && e <= 74) {
                                            letterGrade = 'A-'
                                        } else if (e > 64 && e <= 69) {
                                            letterGrade = 'B+'
                                        } else if (e > 59 && e <= 64) {
                                            letterGrade = 'B'
                                        } else if (e > 54 && e <= 59) {
                                            letterGrade = 'B-'
                                        } else if (e > 49 && e <= 54) {
                                            letterGrade = 'C+'
                                        } else if (e > 44 && e <= 49) {
                                            letterGrade = 'C'
                                        } else if (e > 39 && e <= 44) {
                                            letterGrade = 'D'
                                        } else if (e <= 39) {
                                            letterGrade = 'F'
                                        }

                                        lg.push(letterGrade)

                                        if (letterGrade == 'A+') {
                                            gradePoint = 4.00
                                        } else if (letterGrade == 'A') {
                                            gradePoint = 3.75
                                        } else if (letterGrade == 'A-') {
                                            gradePoint = 3.50
                                        } else if (letterGrade == 'B+') {
                                            gradePoint = 3.25
                                        } else if (letterGrade == 'B') {
                                            gradePoint = 3.00
                                        } else if (letterGrade == 'B-') {
                                            gradePoint = 2.75
                                        } else if (letterGrade == 'C+') {
                                            gradePoint = 2.50
                                        } else if (letterGrade == 'C') {
                                            gradePoint = 2.25
                                        } else if (letterGrade == 'D') {
                                            gradePoint = 2.00
                                        } else if (letterGrade == 'F') {
                                            gradePoint = 0
                                        }

                                        gp.push(gradePoint);
                                    } else if (i > 6 && i < 13) {
                                        if (e > 39.5) {
                                            letterGrade = 'A+'
                                        } else if (e > 37 && e <= 39.5) {
                                            letterGrade = 'A'
                                        } else if (e > 34.5 && e <= 37) {
                                            letterGrade = 'A-'
                                        } else if (e > 32 && e <= 34.5) {
                                            letterGrade = 'B+'
                                        } else if (e > 29.5 && e <= 32) {
                                            letterGrade = 'B'
                                        } else if (e > 27 && e <= 29.5) {
                                            letterGrade = 'B-'
                                        } else if (e > 24.5 && e <= 27) {
                                            letterGrade = 'C+'
                                        } else if (e > 22 && e <= 24.5) {
                                            letterGrade = 'C'
                                        } else if (e > 19.99 && e <= 22) {
                                            letterGrade = 'D'
                                        } else {
                                            letterGrade = 'F'
                                        }

                                        lg.push(letterGrade)

                                        if (letterGrade == 'A+') {
                                            gradePoint = 4.00
                                        } else if (letterGrade == 'A') {
                                            gradePoint = 3.75
                                        } else if (letterGrade == 'A-') {
                                            gradePoint = 3.50
                                        } else if (letterGrade == 'B+') {
                                            gradePoint = 3.25
                                        } else if (letterGrade == 'B') {
                                            gradePoint = 3.00
                                        } else if (letterGrade == 'B-') {
                                            gradePoint = 2.75
                                        } else if (letterGrade == 'C+') {
                                            gradePoint = 2.50
                                        } else if (letterGrade == 'C') {
                                            gradePoint = 2.25
                                        } else if (letterGrade == 'D') {
                                            gradePoint = 2.00
                                        } else if (letterGrade == 'F') {
                                            gradePoint = 0
                                        }

                                        gp.push(gradePoint);
                                    } else {
                                        if (e > 19.75) {
                                            letterGrade = 'A+'
                                        } else if (e > 18.74 && e <= 19.75) {
                                            letterGrade = 'A'
                                        } else if (e > 17.49 && e <= 18.5) {
                                            letterGrade = 'A-'
                                        } else if (e > 16.24 && e <= 17.25) {
                                            letterGrade = 'B+'
                                        } else if (e > 14.99 && e <= 16) {
                                            letterGrade = 'B'
                                        } else if (e > 13.74 && e <= 14.75) {
                                            letterGrade = 'B-'
                                        } else if (e > 12.49 && e <= 13.5) {
                                            letterGrade = 'C+'
                                        } else if (e > 11.24 && e <= 12.25) {
                                            letterGrade = 'C'
                                        } else if (e > 9.99 && e <= 11) {
                                            letterGrade = 'D'
                                        } else if (e <= 9.99) {
                                            letterGrade = 'F'
                                        }

                                        lg.push(letterGrade)

                                        if (letterGrade == 'A+') {
                                            gradePoint = 4.00
                                        } else if (letterGrade == 'A') {
                                            gradePoint = 3.75
                                        } else if (letterGrade == 'A-') {
                                            gradePoint = 3.50
                                        } else if (letterGrade == 'B+') {
                                            gradePoint = 3.25
                                        } else if (letterGrade == 'B') {
                                            gradePoint = 3.00
                                        } else if (letterGrade == 'B-') {
                                            gradePoint = 2.75
                                        } else if (letterGrade == 'C+') {
                                            gradePoint = 2.50
                                        } else if (letterGrade == 'C') {
                                            gradePoint = 2.25
                                        } else if (letterGrade == 'D') {
                                            gradePoint = 2.00
                                        } else if (letterGrade == 'F') {
                                            gradePoint = 0
                                        }

                                        gp.push(gradePoint);
                                    }
                                    gradeObtained += e
                                }

                                let extraPoints = 0
                                for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                    if (gp[i] > 2) {
                                        extraPoints += gp[i] - 2
                                    }
                                }

                                let extraGPA = extraPoints;
                                let GPAinCompSub = 0
                                for (let i = 0; i < gp.length - 1; i++) {
                                    const e = gp[i];
                                    GPAinCompSub += e
                                }

                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                let finalGPAString = totalFinalGPA.toFixed(2);
                                let finalGPA = Number(finalGPAString)
                                let calculatedGrade

                                if (finalGPA > 3.99) {
                                    calculatedGrade = 'A+'
                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                    calculatedGrade = 'A'
                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                    calculatedGrade = 'A-'
                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                    calculatedGrade = 'B+'
                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                    calculatedGrade = 'B'
                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                    calculatedGrade = 'B-'
                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                    calculatedGrade = 'C+'
                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                    calculatedGrade = 'C'
                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                    calculatedGrade = 'D'
                                } else if (finalGPA <= 1.99) {
                                    calculatedGrade = 'F'
                                }

                                if (finalGPA > 4) {
                                    finalGPA = "4.00"
                                }

                                new Promise((resolve, reject) => {
                                    first_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA], [extraPoints]];
                                    resolve(first_term_allMarks)
                                })
                            }
                        }
                        let allData = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance };
                        let sql = `SELECT * FROM second_r_6th WHERE sid = "${sid}"`
                        con.query(sql, function (err, result) {
                            if (result.length <= 0) {
                                res.send(allData);
                            } else {
                                // let second_term_allMarks;
                                for (const data in result) {
                                    if (Object.hasOwnProperty.call(result, data)) {
                                        const sub = result[data];
                                        let quranTazbeed = sub.quranTazbeed;
                                        let hadith = sub.hadith;
                                        let mizan = sub.mizan;
                                        let arabic = sub.arabic;
                                        let arabic_2 = sub.arabic_2;
                                        let spokenArabic = sub.spokenArabic;
                                        let bangla = sub.bangla;
                                        let english = sub.english;
                                        let spokenEnglish = sub.spokenEnglish;
                                        let math = sub.math;
                                        let BGS = sub.BGS;
                                        let science = sub.science;
                                        let computer = sub.computer;
                                        let QN = sub.QN;
                                        let AGM = sub.AGM;
                                        let aqaed = sub.aqaed;
                                        let FM = sub.FM;
                                        let ICT = sub.ICT;

                                        let gradeObtained = 0;

                                        // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                        let g = [hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, AGM];
                                        let gp = [];
                                        let lg = [];

                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;

                                            if (i < 8) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else if (i == 8) {
                                                if (e > 59.25) {
                                                    letterGrade = 'A+'
                                                } else if (e > 55.5 && e <= 59.25) {
                                                    letterGrade = 'A'
                                                } else if (e > 51.75 && e <= 55.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 48 && e <= 51.75) {
                                                    letterGrade = 'B+'
                                                } else if (e > 44.25 && e <= 48) {
                                                    letterGrade = 'B'
                                                } else if (e > 40.5 && e <= 44.25) {
                                                    letterGrade = 'B-'
                                                } else if (e > 36.75 && e <= 40.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 33 && e <= 36.75) {
                                                    letterGrade = 'C'
                                                } else if (e > 29.25 && e <= 33) {
                                                    letterGrade = 'D'
                                                } else {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else if (i > 8 && i < 13) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                } else {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                }

                                                lg.push(letterGrade)

                                                if (letterGrade == 'A+') {
                                                    gradePoint = 4.00
                                                } else if (letterGrade == 'A') {
                                                    gradePoint = 3.75
                                                } else if (letterGrade == 'A-') {
                                                    gradePoint = 3.50
                                                } else if (letterGrade == 'B+') {
                                                    gradePoint = 3.25
                                                } else if (letterGrade == 'B') {
                                                    gradePoint = 3.00
                                                } else if (letterGrade == 'B-') {
                                                    gradePoint = 2.75
                                                } else if (letterGrade == 'C+') {
                                                    gradePoint = 2.50
                                                } else if (letterGrade == 'C') {
                                                    gradePoint = 2.25
                                                } else if (letterGrade == 'D') {
                                                    gradePoint = 2.00
                                                } else if (letterGrade == 'F') {
                                                    gradePoint = 0
                                                }

                                                gp.push(gradePoint);
                                            }
                                            gradeObtained += e
                                        }

                                        let extraPoints = 0
                                        for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                            if (gp[i] > 2) {
                                                extraPoints += gp[i] - 2
                                            }
                                        }

                                        let extraGPA = extraPoints;
                                        let GPAinCompSub = 0
                                        for (let i = 0; i < gp.length - 1; i++) {
                                            const e = gp[i];
                                            GPAinCompSub += e
                                        }

                                        let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                        let finalGPAString = totalFinalGPA.toFixed(2);
                                        let finalGPA = Number(finalGPAString)
                                        let calculatedGrade

                                        if (finalGPA > 3.99) {
                                            calculatedGrade = 'A+'
                                        } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                            calculatedGrade = 'A'
                                        } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                            calculatedGrade = 'A-'
                                        } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                            calculatedGrade = 'B+'
                                        } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                            calculatedGrade = 'B'
                                        } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                            calculatedGrade = 'B-'
                                        } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                            calculatedGrade = 'C+'
                                        } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                            calculatedGrade = 'C'
                                        } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                            calculatedGrade = 'D'
                                        } else if (finalGPA <= 1.99) {
                                            calculatedGrade = 'F'
                                        }

                                        if (finalGPA > 4) {
                                            finalGPA = "4.00"
                                        }
                                        new Promise((resolve, reject) => {
                                            second_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                            resolve(second_term_allMarks)
                                        })

                                    }
                                }

                                let allData_2 = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance };

                                let sql = `SELECT * FROM annual_r_6th WHERE sid = "${sid}"`
                                con.query(sql, function (err, result) {
                                    if (result.length <= 0) {
                                        res.send(allData_2);
                                    } else {
                                        // let annual_term_allMarks
                                        for (const data in result) {
                                            if (Object.hasOwnProperty.call(result, data)) {
                                                const sub = result[data];
                                                let quranTazbeed = sub.quranTazbeed;
                                                let hadith = sub.hadith;
                                                let mizan = sub.mizan;
                                                let arabic = sub.arabic;
                                                let arabic_2 = sub.arabic_2;
                                                let spokenArabic = sub.spokenArabic;
                                                let bangla = sub.bangla;
                                                let english = sub.english;
                                                let spokenEnglish = sub.spokenEnglish;
                                                let math = sub.math;
                                                let BGS = sub.BGS;
                                                let science = sub.science;
                                                let computer = sub.computer;
                                                let QN = sub.QN;
                                                let AGM = sub.AGM;
                                                let aqaed = sub.aqaed;
                                                let FM = sub.FM;
                                                let ICT = sub.ICT;

                                                let gradeObtained = 0;

                                                // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                                let g = [hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, AGM];
                                                let gp = [];
                                                let lg = [];

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    Number(e)
                                                    let letterGrade;
                                                    let gradePoint;

                                                    if (i < 8) {
                                                        if (e > 79) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 74 && e <= 79) {
                                                            letterGrade = 'A'
                                                        } else if (e > 69 && e <= 74) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 64 && e <= 69) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 59 && e <= 64) {
                                                            letterGrade = 'B'
                                                        } else if (e > 54 && e <= 59) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 49 && e <= 54) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 44 && e <= 49) {
                                                            letterGrade = 'C'
                                                        } else if (e > 39 && e <= 44) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 39) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else if (i == 8) {
                                                        if (e > 59.25) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 55.5 && e <= 59.25) {
                                                            letterGrade = 'A'
                                                        } else if (e > 51.75 && e <= 55.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 48 && e <= 51.75) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 44.25 && e <= 48) {
                                                            letterGrade = 'B'
                                                        } else if (e > 40.5 && e <= 44.25) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 36.75 && e <= 40.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 33 && e <= 36.75) {
                                                            letterGrade = 'C'
                                                        } else if (e > 29.25 && e <= 33) {
                                                            letterGrade = 'D'
                                                        } else {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else if (i > 8 && i < 13) {
                                                        if (e > 39.5) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 37 && e <= 39.5) {
                                                            letterGrade = 'A'
                                                        } else if (e > 34.5 && e <= 37) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 32 && e <= 34.5) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 29.5 && e <= 32) {
                                                            letterGrade = 'B'
                                                        } else if (e > 27 && e <= 29.5) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 24.5 && e <= 27) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 22 && e <= 24.5) {
                                                            letterGrade = 'C'
                                                        } else if (e > 19.99 && e <= 22) {
                                                            letterGrade = 'D'
                                                        } else {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    } else {
                                                        if (e > 19.75) {
                                                            letterGrade = 'A+'
                                                        } else if (e > 18.74 && e <= 19.75) {
                                                            letterGrade = 'A'
                                                        } else if (e > 17.49 && e <= 18.5) {
                                                            letterGrade = 'A-'
                                                        } else if (e > 16.24 && e <= 17.25) {
                                                            letterGrade = 'B+'
                                                        } else if (e > 14.99 && e <= 16) {
                                                            letterGrade = 'B'
                                                        } else if (e > 13.74 && e <= 14.75) {
                                                            letterGrade = 'B-'
                                                        } else if (e > 12.49 && e <= 13.5) {
                                                            letterGrade = 'C+'
                                                        } else if (e > 11.24 && e <= 12.25) {
                                                            letterGrade = 'C'
                                                        } else if (e > 9.99 && e <= 11) {
                                                            letterGrade = 'D'
                                                        } else if (e <= 9.99) {
                                                            letterGrade = 'F'
                                                        }

                                                        lg.push(letterGrade)

                                                        if (letterGrade == 'A+') {
                                                            gradePoint = 4.00
                                                        } else if (letterGrade == 'A') {
                                                            gradePoint = 3.75
                                                        } else if (letterGrade == 'A-') {
                                                            gradePoint = 3.50
                                                        } else if (letterGrade == 'B+') {
                                                            gradePoint = 3.25
                                                        } else if (letterGrade == 'B') {
                                                            gradePoint = 3.00
                                                        } else if (letterGrade == 'B-') {
                                                            gradePoint = 2.75
                                                        } else if (letterGrade == 'C+') {
                                                            gradePoint = 2.50
                                                        } else if (letterGrade == 'C') {
                                                            gradePoint = 2.25
                                                        } else if (letterGrade == 'D') {
                                                            gradePoint = 2.00
                                                        } else if (letterGrade == 'F') {
                                                            gradePoint = 0
                                                        }

                                                        gp.push(gradePoint);
                                                    }
                                                    gradeObtained += e
                                                }

                                                let extraPoints = 0
                                                for (let i = gp.length - 1; i >= gp.length - 1; i--) {
                                                    if (gp[i] > 2) {
                                                        extraPoints += gp[i] - 2
                                                    }
                                                }

                                                let extraGPA = extraPoints;
                                                let GPAinCompSub = 0
                                                for (let i = 0; i < gp.length - 1; i++) {
                                                    const e = gp[i];
                                                    GPAinCompSub += e
                                                }

                                                let totalFinalGPA = (Number(GPAinCompSub) + Number(extraGPA)) / 13;
                                                let finalGPAString = totalFinalGPA.toFixed(2);
                                                let finalGPA = Number(finalGPAString)
                                                let calculatedGrade

                                                if (finalGPA > 3.99) {
                                                    calculatedGrade = 'A+'
                                                } else if (finalGPA > 3.74 && finalGPA <= 3.99) {
                                                    calculatedGrade = 'A'
                                                } else if (finalGPA > 3.49 && finalGPA <= 3.74) {
                                                    calculatedGrade = 'A-'
                                                } else if (finalGPA > 3.24 && finalGPA <= 3.49) {
                                                    calculatedGrade = 'B+'
                                                } else if (finalGPA > 2.99 && finalGPA <= 3.24) {
                                                    calculatedGrade = 'B'
                                                } else if (finalGPA > 2.74 && finalGPA <= 2.99) {
                                                    calculatedGrade = 'B-'
                                                } else if (finalGPA > 2.49 && finalGPA <= 2.74) {
                                                    calculatedGrade = 'C+'
                                                } else if (finalGPA > 2.24 && finalGPA <= 2.49) {
                                                    calculatedGrade = 'C'
                                                } else if (finalGPA > 1.99 && finalGPA <= 2.24) {
                                                    calculatedGrade = 'D'
                                                } else if (finalGPA <= 1.99) {
                                                    calculatedGrade = 'F'
                                                }

                                                if (finalGPA > 4) {
                                                    finalGPA = "4.00"
                                                }
                                                new Promise((resolve, reject) => {
                                                    annual_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, AGM], [calculatedGrade], [gradeObtained], [lg], [gp], [finalGPA]];
                                                    resolve(annual_term_allMarks)
                                                })

                                            }
                                        }

                                        let allData_3 = { getFM, getSub, getPM, first_term_allMarks, second_term_allMarks, annual_term_allMarks, FTermAttendance, STermAttendance, ATermAttendance };

                                        res.send(allData_3);
                                    }
                                })
                            }
                        })
                    }

                });
            });
        }
})

// result.post('/getHighestMark', (req, res) => {
//     let cid = req.body.cid;
//     let campus = req.body.campus;
//     let term = req.body.term;
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
//         if (cid == 100) {
//             if (term == "First") {
//                 let sql = `SELECT * FROM first_r_play_nursery`
//                 con.query(sql, (err, result) => {
//                     let Quran = 0;
//                     let Islamiat = 0;
//                     let Arabic = 0;
//                     let Bangla = 0;
//                     let English = 0;
//                     let Math = 0;
//                     let Drawing = 0;
//                     let GK = 0 ;
//                     let handWriting = 0;
//                     let AGM = 0;
//                     for (let i = 0; i < result.length; i++) {
//                         const e = result[i];
//                         let arabic = e.arabic
//                         let bangla = e.bangla
//                         let math = e.math
//                         let english = e.english
//                         let islamiat = e.islamiat
//                         let HR = e.HR
//                         let GK_ = e.GK
//                         let AGM_ = e.AGM
//                         let drawing = e.drawing
//                         let quranTazbeed = e.quranTazbeed
//                         if (quranTazbeed > Quran) {
//                             Quran = quranTazbeed;
//                         }
//                         if (islamiat > Islamiat) {
//                             Islamiat = islamiat;
//                         }
//                         if (arabic > Arabic) {
//                             Arabic = arabic;
//                         }
//                         if (bangla > Bangla) {
//                             Bangla = bangla;
//                         }
//                         if (english > English) {
//                             English = english
//                         }
//                         if (math > Math) {
//                             Math = math
//                         }
//                         if (drawing > Drawing) {
//                             Drawing = drawing
//                         }
//                         if (GK_ > GK) {
//                             GK = GK_
//                         }
//                         if (HR > handWriting) {
//                             handWriting = HR 
//                         }
//                         if (AGM_ > AGM) {
//                             AGM = AGM_
//                         }
//                     }

//                     let highestMarks = [ Quran, Islamiat, Arabic, Bangla, English, Math, Drawing, GK, handWriting, AGM ]
//                     res.send(highestMarks)
//                 })
//             }
//         }
//     })

// })

result.get('/updateResult', (req, res) => {
    res.render('updateResult', {title: 'Update result'})
})

result.get('/file_upload', (req, res) => {
    res.render('result_file_upload', { title: 'Update result' })
})

result.get('/class/:cid', (req, res) => {
    let cid = req.params.cid
    if (cid == '99') {
        res.render('RUF_N', {title: 'Update result'})
    } else if (cid == '100') {
        res.render('RUF_P', { title: 'Update result' })
    } else if (cid == '1' || cid == '2') {
        res.render('RUF_C1-C2', {title: 'Update result'})
    } else if (cid == '3') {
        res.render('RUF_C3-C5', {title: 'Update result'})
    } else if (cid == '4') {
        res.render('RUF_C4', {title: 'Update result'})
    } else if (cid == '5') {
        res.render('RUF_C5', { title: 'Update result' })
    } else if (cid == '6') {
        res.render('RUF_C6', { title: 'Update result' })
    }
})

result.post('/update', (req, res) => {
    let sid = req.body.sid
    let cid = req.body.cid
    let bangla = req.body.bangla
    let english = req.body.english
    let drawing = req.body.drawing;
    let handWriting = req.body.HR;
    let quranTazbeed = req.body.quranTazbeed;
    let islamiat = req.body.islamiat;
    let arabic = req.body.arabic;
    let arabic_2 = req.body.arabic_2;
    let spokenArabic = req.body.spokenArabic;
    let banglaWithGrammar = req.body.banglaWithGrammar;
    let englishWithGrammar = req.body.englishWithGrammar;
    let spokenEnglish = req.body.spokenEnglish;
    let math = req.body.math;
    let BGS = req.body.BGS;
    let computer = req.body.computer;
    let wordBook = req.body.wordBook;
    let GK = req.body.GK;
    let AGM = req.body.AGM;
    let hadith = req.body.hadith;
    let MTZT = req.body.MTZT;
    let mizan = req.body.mizan;
    let science = req.body.science;
    let TM = req.body.TM;
    let QN = req.body.QN;
    let aqaed = req.body.aqaed;
    let FM = req.body.FM;
    let ICT = req.body.ICT;

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
    var sql = `SELECT * FROM allstudents WHERE sid = ? AND cid = ?`;
        con.query(sql, [sid, cid], function (err, result) {
            if (result.length <= 0) {
                res.render('updateResult', {errorMessage: 'Please input correct info!'})
            } else {
                if (cid == '99') {
                    var sql = `INSERT INTO first_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, islamiat, HR, AGM)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${islamiat}", "${handWriting}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_N', {title: 'Result U_Form', successMsg: 'Result updated successfully!'})
                    })
                } else if (cid == '100') {
                    var sql = `INSERT INTO first_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, quranTazbeed, AGM, islamiat, HR)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${quranTazbeed}", "${AGM}", "${islamiat}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_P', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '1' || cid == '2') {
                    var sql = `INSERT INTO first_r_1st_2nd (cid, sid, bangla, math, english, GK, computer, islamiat, HR, arabic, spokenArabic, spokenEnglish, wordBook, drawing, quranTazbeed, AGM)
                    VALUES ("${cid}", "${sid}", "${bangla}", "${math}", "${english}", "${GK}", "${computer}", "${islamiat}", "${handWriting}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${wordBook}", "${drawing}", "${quranTazbeed}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C1-C2', {title: 'Result U_Form', successMsg: 'Result updated successfully!'})
                    })
                } else if (cid == '3') {
                    var sql = `INSERT INTO first_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, computer, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${computer}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C3-C5', {title: 'Result U_Form', successMsg: 'Result updated successfully!'})
                    })
                } else if (cid == '4') {
                    var sql = `INSERT INTO first_r_4th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, spokenEnglish, computer, MTZT, mizan, bangla, english, BGS, science, wordBook, TM, QN, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${MTZT}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${wordBook}", "${TM}", "${QN}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C4', {title: 'Result U_Form', successMsg: 'Result updated successfully!'})
                    })
                } else if (cid == '5') {
                    var sql = `INSERT INTO first_r_5th (cid, sid, math, quranTazbeed, arabic, spokenArabic, spokenEnglish, computer, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, FM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${FM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '6') {
                    var sql = `INSERT INTO first_r_6th (cid, sid, math, quranTazbeed, arabic, arabic_2, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, ICT)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${arabic_2}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${ICT}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C6', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                }
            }
        });
    });
})

result.post('/update/secondTerm', (req, res) => {
    let sid = req.body.sid
    let cid = req.body.cid
    let bangla = req.body.bangla
    let english = req.body.english
    let drawing = req.body.drawing;
    let handWriting = req.body.HR;
    let quranTazbeed = req.body.quranTazbeed;
    let islamiat = req.body.islamiat;
    let aquied = req.body.aquied;
    let arabic = req.body.arabic;
    let arabic_2 = req.body.arabic_2;
    let spokenArabic = req.body.spokenArabic;
    let banglaWithGrammar = req.body.banglaWithGrammar;
    let englishWithGrammar = req.body.englishWithGrammar;
    let spokenEnglish = req.body.spokenEnglish;
    let math = req.body.math;
    let BGS = req.body.BGS;
    let computer = req.body.computer;
    let wordBook = req.body.wordBook;
    let GK = req.body.GK;
    let AGM = req.body.AGM;
    let hadith = req.body.hadith;
    let MTZT = req.body.MTZT;
    let mizan = req.body.mizan;
    let science = req.body.science;
    let TM = req.body.TM;
    let QN = req.body.QN;
    let aqaed = req.body.aqaed;
    let FM = req.body.FM;
    let ICT = req.body.ICT;

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
    var sql = `SELECT * FROM allstudents WHERE sid = ? AND cid = ?`;
        con.query(sql, [sid, cid], function (err, result) {
            if (result.length <= 0) {
                res.render('updateResult', { errorMessage: 'Please input correct info!' })
            } else {
                if (cid == '99') {
                    var sql = `INSERT INTO second_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, islamiat, HR, AGM)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${islamiat}", "${handWriting}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_N', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '100') {
                    var sql = `INSERT INTO second_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, quranTazbeed, AGM, islamiat, HR)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${quranTazbeed}", "${AGM}", "${islamiat}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_P', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '1' || cid == '2') {
                    var sql = `INSERT INTO second_r_1st_2nd (cid, sid, bangla, math, english, GK, computer, islamiat, HR, arabic, spokenArabic, spokenEnglish, wordBook, drawing, quranTazbeed, AGM)
                    VALUES ("${cid}", "${sid}", "${bangla}", "${math}", "${english}", "${GK}", "${computer}", "${islamiat}", "${handWriting}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${wordBook}", "${drawing}", "${quranTazbeed}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C1-C2', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '3') {
                    var sql = `INSERT INTO second_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, computer, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${computer}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C3-C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '4') {
                    var sql = `INSERT INTO second_r_4th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, spokenEnglish, computer, MTZT, mizan, bangla, english, BGS, science, wordBook, TM, QN, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${MTZT}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${wordBook}", "${TM}", "${QN}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C4', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '5') {
                    var sql = `INSERT INTO second_r_5th (cid, sid, math, quranTazbeed, arabic, spokenArabic, spokenEnglish, computer, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, FM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${FM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '6') {
                    var sql = `INSERT INTO second_r_6th (cid, sid, math, quranTazbeed, arabic, arabic_2, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, ICT)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${arabic_2}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${ICT}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C6', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                }
            }
        });
    });
})

result.post('/update/thirdTerm', (req, res) => {
    let sid = req.body.sid
    let cid = req.body.cid
    let bangla = req.body.bangla
    let english = req.body.english
    let drawing = req.body.drawing;
    let handWriting = req.body.HR;
    let quranTazbeed = req.body.quranTazbeed;
    let islamiat = req.body.islamiat;
    let aquied = req.body.aquied;
    let arabic = req.body.arabic;
    let spokenArabic = req.body.spokenArabic;
    let banglaWithGrammar = req.body.banglaWithGrammar;
    let englishWithGrammar = req.body.englishWithGrammar;
    let spokenEnglish = req.body.spokenEnglish;
    let math = req.body.math;
    let BGS = req.body.BGS;
    let computer = req.body.computer;
    let wordBook = req.body.wordBook;
    let GK = req.body.GK;
    let hadith = req.body.hadith;
    let MTZT = req.body.MTZT;
    let mizan = req.body.mizan;
    let science = req.body.science;

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
        var sql = `SELECT * FROM allstudents WHERE sid = ? AND cid = ?`;
        con.query(sql, [sid, cid], function (err, result) {
            if (result.length <= 0) {
                res.render('updateResult', { errorMessage: 'Please input correct info!' })
            } else {
                if (cid == '99') {
                    var sql = `INSERT INTO third_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, quranTazbeed, wordBook, islamiat, HR)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${quranTazbeed}", "${wordBook}", "${islamiat}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_N', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '100') {
                    var sql = `INSERT INTO third_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, quranTazbeed, wordBook, islamiat, HR)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${quranTazbeed}", "${wordBook}", "${islamiat}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_P', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '1' || cid == '2') {
                    var sql = `INSERT INTO third_r_1st_2nd (cid, sid, bangla, math, english, GK, computer, islamiat, HR, arabic, spokenArabic, spokenEnglish, wordBook, drawing, quranTazbeed)
                    VALUES ("${cid}", "${sid}", "${bangla}", "${math}", "${english}", "${GK}", "${computer}", "${islamiat}", "${handWriting}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${wordBook}", "${drawing}", "${quranTazbeed}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C1-C2', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '3') {
                    var sql = `INSERT INTO third_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, aquied, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, computer, wordBook, GK, HR)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${aquied}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${computer}", "${wordBook}", "${GK}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C3-C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '4' || cid == '5') {
                    var sql = `INSERT INTO third_r_4th_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, spokenEnglish, computer, GK, HR, hadith, MTZT, mizan, bangla, english, BGS, science)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${GK}", "${handWriting}", "${hadith}", "${MTZT}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C4-C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                }
            }
        });
    });
})

result.post('/update/annualTerm', (req, res) => {
    let sid = req.body.sid
    let cid = req.body.cid
    let bangla = req.body.bangla
    let english = req.body.english
    let drawing = req.body.drawing;
    let handWriting = req.body.HR;
    let quranTazbeed = req.body.quranTazbeed;
    let islamiat = req.body.islamiat;
    let arabic = req.body.arabic;
    let arabic_2 = req.body.arabic_2;
    let spokenArabic = req.body.spokenArabic;
    let banglaWithGrammar = req.body.banglaWithGrammar;
    let englishWithGrammar = req.body.englishWithGrammar;
    let spokenEnglish = req.body.spokenEnglish;
    let math = req.body.math;
    let BGS = req.body.BGS;
    let computer = req.body.computer;
    let wordBook = req.body.wordBook;
    let GK = req.body.GK;
    let AGM = req.body.AGM;
    let hadith = req.body.hadith;
    let MTZT = req.body.MTZT;
    let mizan = req.body.mizan;
    let science = req.body.science;
    let TM = req.body.TM;
    let QN = req.body.QN;
    let aqaed = req.body.aqaed;
    let FM = req.body.FM;
    let ICT = req.body.ICT;

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
    var sql = `SELECT * FROM allstudents WHERE sid = ? AND cid = ?`;
        con.query(sql, [sid, cid], function (err, result) {
            if (result.length <= 0) {
                res.render('updateResult', { errorMessage: 'Please input correct info!' })
            } else {
                if (cid == '99') {
                    var sql = `INSERT INTO annual_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, islamiat, HR, AGM)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${islamiat}", "${handWriting}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_N', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '100') {
                    var sql = `INSERT INTO annual_r_play_nursery (cid, sid, arabic, bangla, math, english, GK, drawing, quranTazbeed, AGM, islamiat, HR)
                    VALUES ("${cid}", "${sid}", "${arabic}", "${bangla}", "${math}", "${english}", "${GK}", "${drawing}", "${quranTazbeed}", "${AGM}", "${islamiat}", "${handWriting}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_P', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '1' || cid == '2') {
                    var sql = `INSERT INTO annual_r_1st_2nd (cid, sid, bangla, math, english, GK, computer, islamiat, HR, arabic, spokenArabic, spokenEnglish, wordBook, drawing, quranTazbeed, AGM)
                    VALUES ("${cid}", "${sid}", "${bangla}", "${math}", "${english}", "${GK}", "${computer}", "${islamiat}", "${handWriting}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${wordBook}", "${drawing}", "${quranTazbeed}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C1-C2', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '3') {
                    var sql = `INSERT INTO annual_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, computer, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${computer}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C3-C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '4') {
                    var sql = `INSERT INTO annual_r_4th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, spokenEnglish, computer, MTZT, mizan, bangla, english, BGS, science, wordBook, TM, QN, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${MTZT}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${wordBook}", "${TM}", "${QN}", "${AGM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C4', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '5') {
                    var sql = `INSERT INTO annual_r_5th (cid, sid, math, quranTazbeed, arabic, spokenArabic, spokenEnglish, computer, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, FM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${spokenArabic}", "${spokenEnglish}", "${computer}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${FM}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C5', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                } else if (cid == '6') {
                    var sql = `INSERT INTO annual_r_6th (cid, sid, math, quranTazbeed, arabic, arabic_2, mizan, bangla, english, BGS, science, hadith, QN, AGM, aqaed, ICT)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${arabic}", "${arabic_2}", "${mizan}", "${bangla}", "${english}", "${BGS}", "${science}", "${hadith}", "${QN}", "${AGM}", "${aqaed}", "${ICT}")`;
                    con.query(sql, (err, result) => {
                        res.render('RUF_C6', { title: 'Result U_Form', successMsg: 'Result updated successfully!' })
                    })
                }
            }
        });
    });
})


module.exports = result;