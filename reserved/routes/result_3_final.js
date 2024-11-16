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
        "Attd. & G.M"//
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
        "Attd. & G.M"
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
          "Attd. & G.M",//
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
      "Attd. & G.M",//
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
      "Bengali & B. Grammar",//
      "English & E. Grammar",//
        "Science",//
        "Bangladesh & Global Studies",//
        "General Knowledge",//
      "Word Book",//
      "Spoken English",//
      "Spoken Arabic",//
      "Attd. & G.M"//
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 50, 50, 50, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 20, 20, 20, 10, 10, 10, 10]),
  ],
  [
    (cid = "4"),
    (className = "Class 4"),
    (AllSubjects = [
      "Quran & Tazbeed", //
      "Arabic", //
      "Bengali & Bangali Grammar", //
      "English & English Grammar", //
      "Islamiat & Fiqh", //
      "Mathematics", //
      "Mizan", //
        "Bangladesh & Global Studies", //
        "Science", //
        "Qasasun Nabeyeen (History)", //
      "Mufidut Talibin", //
      "Spoken Arabic", //
      "Spoken English", //
      "Computer", //
      "Word Book", //
      "Talimul Mutallim", //
      "Attd. & G.M", //
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 100, 50, 50, 50, 25, 25, 25, 25, 25, 25, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 40, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10]),
  ],
  [
    (cid = "5"),
    (className = "Class 5"),
    (AllSubjects = [
        "Quran & Hadith (Writing)",//100
        "Arabic 1 & 2",//100
        "Mizan Monsaeeb",//100
        "Bengali & Bangali Grammar", //100
        "English & English Grammar", //100
        "Mathematics",//100
        "Aquied & Fiqh",//50
        "Fiqhul Muyassar",//50
        "Qasasun Nabeyeen 1", //50
        "Quran & Tazbeed (Oral)",//50
        "Bangladesh & Global Studies",//50
        "Science",//50
        "Spoken Arabic",//25
        "Spoken English",//25
        "Computer",//25
        "Attd. & G.M"//25
    ]),
      (FullMarks = [100, 100, 100, 100, 100, 100, 50, 50, 50, 50, 50, 50, 25, 25, 25, 25]),
      (passMarks = [40, 40, 40, 40, 40, 40, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10]),
  ],
  [
    (cid = "6"),
    (className = "Class 6"),
    (AllSubjects = [
        "Quran & Hadith (Writing)",//100//
        "Arabic 1st",//100//
        "Arabic 2nd",//100//
        "Mizan Monsaeeb",//100//
        "Bengali & Bangali Grammar", //100//
        "English & English Grammar", //100//
        "Mathematics",//100//
        "Aqaed Fiqh & Fiqhul M.",//100//
        "Qasasun Nabeyeen (History)", //50//
        "Quran & Tazbeed (Oral)",//50//
        "ICT",//50//
        "B.G. Studies 1 & 2",//75//
        "Science 1 & 2",//50//
        "Attd. & G.M"//25//
    ]),
    (FullMarks = [100, 100, 100, 100, 100, 100, 100, 100, 50, 50, 50, 75, 50, 25]),
    (passMarks = [40, 40, 40, 40, 40, 40, 40, 40, 20, 20, 20, 30, 20, 10]),
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
                                        
                                        let g = [
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
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained+= e
                                        }
                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                        if (devMark > 79) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark > 74 && devMark <= 79) {
                                            calculatedGrade = 'A'
                                        } else if (devMark > 69 && devMark <= 74) {
                                            calculatedGrade = 'A-'
                                        } else if (devMark > 64 && devMark <= 69) {
                                            calculatedGrade = 'B+'
                                        } else if (devMark > 59 && devMark <= 64) {
                                            calculatedGrade = 'B'
                                        } else if (devMark > 54 && devMark <= 59) {
                                            calculatedGrade = 'B-'
                                        } else if (devMark > 49 && devMark <= 54) {
                                            calculatedGrade = 'C+'
                                        } else if (devMark > 44 && devMark <= 49) {
                                            calculatedGrade = 'C'
                                        } else if (devMark > 39 && devMark <= 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark <= 39) {
                                            calculatedGrade = 'F'
                                        }
                                        new Promise((resolve, reject) => {
                                            
                                            first_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                                let g = [
                                                    islamiat,
                                                    arabic,
                                                    bangla,
                                                    english,
                                                    math,
                                                    GK,
                                                    handWriting,
                                                    drawing,
                                                    AGM
                                                    ];
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }        
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                                        let g = [
                                                            islamiat,
                                                            arabic,
                                                            bangla,
                                                            english,
                                                            math,
                                                            GK,
                                                            handWriting,
                                                            drawing,
                                                            AGM
                                                            ];
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                        if (devMark > 79) {
                                                            calculatedGrade = 'A+'
                                                        } else if (devMark > 74 && devMark <= 79) {
                                                            calculatedGrade = 'A'
                                                        } else if (devMark > 69 && devMark <= 74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (devMark > 64 && devMark <= 69) {
                                                            calculatedGrade = 'B+'
                                                        } else if (devMark > 59 && devMark <= 64) {
                                                            calculatedGrade = 'B'
                                                        } else if (devMark > 54 && devMark <= 59) {
                                                            calculatedGrade = 'B-'
                                                        } else if (devMark > 49 && devMark <= 54) {
                                                            calculatedGrade = 'C+'
                                                        } else if (devMark > 44 && devMark <= 49) {
                                                            calculatedGrade = 'C'
                                                        } else if (devMark > 39 && devMark <= 44) {
                                                            calculatedGrade = 'D'
                                                        } else if (devMark <= 39) {
                                                            calculatedGrade = 'F'
                                                        }             
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained+= e
                                        }
                                        
                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                        if (devMark > 79) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark > 74 && devMark <= 79) {
                                            calculatedGrade = 'A'
                                        } else if (devMark > 69 && devMark <= 74) {
                                            calculatedGrade = 'A-'
                                        } else if (devMark > 64 && devMark <= 69) {
                                            calculatedGrade = 'B+'
                                        } else if (devMark > 59 && devMark <= 64) {
                                            calculatedGrade = 'B'
                                        } else if (devMark > 54 && devMark <= 59) {
                                            calculatedGrade = 'B-'
                                        } else if (devMark > 49 && devMark <= 54) {
                                            calculatedGrade = 'C+'
                                        } else if (devMark > 44 && devMark <= 49) {
                                            calculatedGrade = 'C'
                                        } else if (devMark > 39 && devMark <= 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark <= 39) {
                                            calculatedGrade = 'F'
                                        }
                                        new Promise((resolve, reject) => {
                                                
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }        
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                        if (devMark > 79) {
                                                            calculatedGrade = 'A+'
                                                        } else if (devMark > 74 && devMark <= 79) {
                                                            calculatedGrade = 'A'
                                                        } else if (devMark > 69 && devMark <= 74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (devMark > 64 && devMark <= 69) {
                                                            calculatedGrade = 'B+'
                                                        } else if (devMark > 59 && devMark <= 64) {
                                                            calculatedGrade = 'B'
                                                        } else if (devMark > 54 && devMark <= 59) {
                                                            calculatedGrade = 'B-'
                                                        } else if (devMark > 49 && devMark <= 54) {
                                                            calculatedGrade = 'C+'
                                                        } else if (devMark > 44 && devMark <= 49) {
                                                            calculatedGrade = 'C'
                                                        } else if (devMark > 39 && devMark <= 44) {
                                                            calculatedGrade = 'D'
                                                        } else if (devMark <= 39) {
                                                            calculatedGrade = 'F'
                                                        }              
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, drawing, GK, handWriting, AGM], [calculatedGrade], [gradeObtained]];
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
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained+= e
                                        }
                                        
                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                            if (devMark >= 80) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark >= 75 && devMark < 79) {
                                            calculatedGrade = 'A'
                                        }else if (devMark >= 70 && devMark < 74) {
                                            calculatedGrade = 'A-'
                                        }else if (devMark >= 65 && devMark < 69) {
                                            calculatedGrade = 'B+'
                                        }else if (devMark >= 60 && devMark < 64) {
                                            calculatedGrade = 'B'
                                        }else if (devMark >= 55 && devMark < 59) {
                                            calculatedGrade = 'B-'
                                        }else if (devMark >= 50 && devMark < 54) {
                                            calculatedGrade = 'C+'
                                        }else if (devMark >= 45 && devMark < 49) {
                                            calculatedGrade = 'C'
                                        }else if (devMark >= 40 && devMark < 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark < 33) {
                                            calculatedGrade = 'F'
                                        } 

                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained]];
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

                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }        
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained]];
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
                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            gradeObtained+= e
                                                        }
                                                        
                                                            let length = g.length
                                                            let devMark = gradeObtained / length
                                                            let calculatedGrade
                                                        if (devMark > 79) {
                                                            calculatedGrade = 'A+'
                                                        } else if (devMark > 74 && devMark <= 79) {
                                                            calculatedGrade = 'A'
                                                        } else if (devMark > 69 && devMark <= 74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (devMark > 64 && devMark <= 69) {
                                                            calculatedGrade = 'B+'
                                                        } else if (devMark > 59 && devMark <= 64) {
                                                            calculatedGrade = 'B'
                                                        } else if (devMark > 54 && devMark <= 59) {
                                                            calculatedGrade = 'B-'
                                                        } else if (devMark > 49 && devMark <= 54) {
                                                            calculatedGrade = 'C+'
                                                        } else if (devMark > 44 && devMark <= 49) {
                                                            calculatedGrade = 'C'
                                                        } else if (devMark > 39 && devMark <= 44) {
                                                            calculatedGrade = 'D'
                                                        } else if (devMark <= 39) {
                                                            calculatedGrade = 'F'
                                                        } 

                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting], [calculatedGrade], [gradeObtained]];
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


                                        let gradeObtained = 0
                                        // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                        "Quran & Tazbeed",//
                                            "Islamiat & Fiqh",//
                                            "Arabic",//
                                            "Math",//
                                            "Bengali & B. Grammar",//
                                            "English & E. Grammar",//
                                            "Science",//
                                            "Bangladesh & Global Studies",//
                                            "General Knowledge",//
                                            "Word Book",//
                                            "Spoken English",//
                                            "Spoken Arabic",//
                                            "AGM"//
                                        let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained+= e
                                        }
                                        
                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                        if (devMark > 79) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark > 74 && devMark <= 79) {
                                            calculatedGrade = 'A'
                                        } else if (devMark > 69 && devMark <= 74) {
                                            calculatedGrade = 'A-'
                                        } else if (devMark > 64 && devMark <= 69) {
                                            calculatedGrade = 'B+'
                                        } else if (devMark > 59 && devMark <= 64) {
                                            calculatedGrade = 'B'
                                        } else if (devMark > 54 && devMark <= 59) {
                                            calculatedGrade = 'B-'
                                        } else if (devMark > 49 && devMark <= 54) {
                                            calculatedGrade = 'C+'
                                        } else if (devMark > 44 && devMark <= 49) {
                                            calculatedGrade = 'C'
                                        } else if (devMark > 39 && devMark <= 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark <= 39) {
                                            calculatedGrade = 'F'
                                        }  

                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained]];
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
                                                let gradeObtained = 0
                                                let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM];
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }          
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained]];
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
                                                        let gradeObtained = 0
                                                        let g = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM];
                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            gradeObtained+= e
                                                        }
                                                        
                                                            let length = g.length
                                                            let devMark = gradeObtained / length
                                                            let calculatedGrade
                                                        if (devMark > 79) {
                                                            calculatedGrade = 'A+'
                                                        } else if (devMark > 74 && devMark <= 79) {
                                                            calculatedGrade = 'A'
                                                        } else if (devMark > 69 && devMark <= 74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (devMark > 64 && devMark <= 69) {
                                                            calculatedGrade = 'B+'
                                                        } else if (devMark > 59 && devMark <= 64) {
                                                            calculatedGrade = 'B'
                                                        } else if (devMark > 54 && devMark <= 59) {
                                                            calculatedGrade = 'B-'
                                                        } else if (devMark > 49 && devMark <= 54) {
                                                            calculatedGrade = 'C+'
                                                        } else if (devMark > 44 && devMark <= 49) {
                                                            calculatedGrade = 'C'
                                                        } else if (devMark > 39 && devMark <= 44) {
                                                            calculatedGrade = 'D'
                                                        } else if (devMark <= 39) {
                                                            calculatedGrade = 'F'
                                                        }         
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, AGM], [calculatedGrade], [gradeObtained]];
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
                                        
                                        // 'Quraan Majid', 'Akaeed & Fiqh', 'Arabic 1st', 'Arabic 2nd', 'Bangla 1st', 'Bangla 2nd', 'English 1st', 'English 2nd', 'Math', 'Science', 'Bangladesh & Globalisation', 'Nazerah'
                                            let g = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained+= e
                                        }
                                        
                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                        if (devMark > 79) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark > 74 && devMark <= 79) {
                                            calculatedGrade = 'A'
                                        } else if (devMark > 69 && devMark <= 74) {
                                            calculatedGrade = 'A-'
                                        } else if (devMark > 64 && devMark <= 69) {
                                            calculatedGrade = 'B+'
                                        } else if (devMark > 59 && devMark <= 64) {
                                            calculatedGrade = 'B'
                                        } else if (devMark > 54 && devMark <= 59) {
                                            calculatedGrade = 'B-'
                                        } else if (devMark > 49 && devMark <= 54) {
                                            calculatedGrade = 'C+'
                                        } else if (devMark > 44 && devMark <= 49) {
                                            calculatedGrade = 'C'
                                        } else if (devMark > 39 && devMark <= 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark <= 39) {
                                            calculatedGrade = 'F'
                                        }  

                                        new Promise((resolve, reject) => {
                                            first_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained]];
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
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained+= e
                                                }
                                                
                                                    let length = g.length
                                                    let devMark = gradeObtained / length
                                                    let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }          
                                                new Promise((resolve, reject) => {
                                                    second_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained]];
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
                                                        for (let i = 0; i < g.length; i++) {
                                                            const e = g[i];
                                                            gradeObtained+= e
                                                        }
                                                        
                                                            let length = g.length
                                                            let devMark = gradeObtained / length
                                                            let calculatedGrade
                                                        if (devMark > 79) {
                                                            calculatedGrade = 'A+'
                                                        } else if (devMark > 74 && devMark <= 79) {
                                                            calculatedGrade = 'A'
                                                        } else if (devMark > 69 && devMark <= 74) {
                                                            calculatedGrade = 'A-'
                                                        } else if (devMark > 64 && devMark <= 69) {
                                                            calculatedGrade = 'B+'
                                                        } else if (devMark > 59 && devMark <= 64) {
                                                            calculatedGrade = 'B'
                                                        } else if (devMark > 54 && devMark <= 59) {
                                                            calculatedGrade = 'B-'
                                                        } else if (devMark > 49 && devMark <= 54) {
                                                            calculatedGrade = 'C+'
                                                        } else if (devMark > 44 && devMark <= 49) {
                                                            calculatedGrade = 'C'
                                                        } else if (devMark > 39 && devMark <= 44) {
                                                            calculatedGrade = 'D'
                                                        } else if (devMark <= 39) {
                                                            calculatedGrade = 'F'
                                                        }         
                                                        new Promise((resolve, reject) => {
                                                            annual_term_allMarks = [[quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, MTZT, spokenArabic, spokenEnglish, computer, wordBook, TM, AGM], [calculatedGrade], [gradeObtained]];
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
                            let g = [hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                            for (let i = 0; i < g.length; i++) {
                                const e = g[i];
                                gradeObtained += e
                            }

                            let length = g.length
                            let devMark = gradeObtained / length
                            let calculatedGrade
                            if (devMark > 79) {
                                calculatedGrade = 'A+'
                            } else if (devMark > 74 && devMark <= 79) {
                                calculatedGrade = 'A'
                            } else if (devMark > 69 && devMark <= 74) {
                                calculatedGrade = 'A-'
                            } else if (devMark > 64 && devMark <= 69) {
                                calculatedGrade = 'B+'
                            } else if (devMark > 59 && devMark <= 64) {
                                calculatedGrade = 'B'
                            } else if (devMark > 54 && devMark <= 59) {
                                calculatedGrade = 'B-'
                            } else if (devMark > 49 && devMark <= 54) {
                                calculatedGrade = 'C+'
                            } else if (devMark > 44 && devMark <= 49) {
                                calculatedGrade = 'C'
                            } else if (devMark > 39 && devMark <= 44) {
                                calculatedGrade = 'D'
                            } else if (devMark <= 39) {
                                calculatedGrade = 'F'
                            }

                            new Promise((resolve, reject) => {
                                first_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained]];
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
                                    for (let i = 0; i < g.length; i++) {
                                        const e = g[i];
                                        gradeObtained += e
                                    }

                                    let length = g.length
                                    let devMark = gradeObtained / length
                                    let calculatedGrade
                                    if (devMark > 79) {
                                        calculatedGrade = 'A+'
                                    } else if (devMark > 74 && devMark <= 79) {
                                        calculatedGrade = 'A'
                                    } else if (devMark > 69 && devMark <= 74) {
                                        calculatedGrade = 'A-'
                                    } else if (devMark > 64 && devMark <= 69) {
                                        calculatedGrade = 'B+'
                                    } else if (devMark > 59 && devMark <= 64) {
                                        calculatedGrade = 'B'
                                    } else if (devMark > 54 && devMark <= 59) {
                                        calculatedGrade = 'B-'
                                    } else if (devMark > 49 && devMark <= 54) {
                                        calculatedGrade = 'C+'
                                    } else if (devMark > 44 && devMark <= 49) {
                                        calculatedGrade = 'C'
                                    } else if (devMark > 39 && devMark <= 44) {
                                        calculatedGrade = 'D'
                                    } else if (devMark <= 39) {
                                        calculatedGrade = 'F'
                                    }
                                    new Promise((resolve, reject) => {
                                        second_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained]];
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
                                            for (let i = 0; i < g.length; i++) {
                                                const e = g[i];
                                                gradeObtained += e
                                            }

                                            let length = g.length
                                            let devMark = gradeObtained / length
                                            let calculatedGrade
                                            if (devMark > 79) {
                                                calculatedGrade = 'A+'
                                            } else if (devMark > 74 && devMark <= 79) {
                                                calculatedGrade = 'A'
                                            } else if (devMark > 69 && devMark <= 74) {
                                                calculatedGrade = 'A-'
                                            } else if (devMark > 64 && devMark <= 69) {
                                                calculatedGrade = 'B+'
                                            } else if (devMark > 59 && devMark <= 64) {
                                                calculatedGrade = 'B'
                                            } else if (devMark > 54 && devMark <= 59) {
                                                calculatedGrade = 'B-'
                                            } else if (devMark > 49 && devMark <= 54) {
                                                calculatedGrade = 'C+'
                                            } else if (devMark > 44 && devMark <= 49) {
                                                calculatedGrade = 'C'
                                            } else if (devMark > 39 && devMark <= 44) {
                                                calculatedGrade = 'D'
                                            } else if (devMark <= 39) {
                                                calculatedGrade = 'F'
                                            }
                                            new Promise((resolve, reject) => {
                                                annual_term_allMarks = [[hadith, arabic, mizan, bangla, english, math, aqaed, FM, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM], [calculatedGrade], [gradeObtained]];
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
                                let g = [hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM];
                                for (let i = 0; i < g.length; i++) {
                                    const e = g[i];
                                    gradeObtained += e
                                }

                                let length = g.length
                                let devMark = gradeObtained / length
                                let calculatedGrade
                                if (devMark > 79) {
                                    calculatedGrade = 'A+'
                                } else if (devMark > 74 && devMark <= 79) {
                                    calculatedGrade = 'A'
                                } else if (devMark > 69 && devMark <= 74) {
                                    calculatedGrade = 'A-'
                                } else if (devMark > 64 && devMark <= 69) {
                                    calculatedGrade = 'B+'
                                } else if (devMark > 59 && devMark <= 64) {
                                    calculatedGrade = 'B'
                                } else if (devMark > 54 && devMark <= 59) {
                                    calculatedGrade = 'B-'
                                } else if (devMark > 49 && devMark <= 54) {
                                    calculatedGrade = 'C+'
                                } else if (devMark > 44 && devMark <= 49) {
                                    calculatedGrade = 'C'
                                } else if (devMark > 39 && devMark <= 44) {
                                    calculatedGrade = 'D'
                                } else if (devMark <= 39) {
                                    calculatedGrade = 'F'
                                }

                                new Promise((resolve, reject) => {
                                    first_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM], [calculatedGrade], [gradeObtained]];
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

                                        let gradeObtained = 0
                                        let g = [hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            gradeObtained += e
                                        }

                                        let length = g.length
                                        let devMark = gradeObtained / length
                                        let calculatedGrade
                                        if (devMark > 79) {
                                            calculatedGrade = 'A+'
                                        } else if (devMark > 74 && devMark <= 79) {
                                            calculatedGrade = 'A'
                                        } else if (devMark > 69 && devMark <= 74) {
                                            calculatedGrade = 'A-'
                                        } else if (devMark > 64 && devMark <= 69) {
                                            calculatedGrade = 'B+'
                                        } else if (devMark > 59 && devMark <= 64) {
                                            calculatedGrade = 'B'
                                        } else if (devMark > 54 && devMark <= 59) {
                                            calculatedGrade = 'B-'
                                        } else if (devMark > 49 && devMark <= 54) {
                                            calculatedGrade = 'C+'
                                        } else if (devMark > 44 && devMark <= 49) {
                                            calculatedGrade = 'C'
                                        } else if (devMark > 39 && devMark <= 44) {
                                            calculatedGrade = 'D'
                                        } else if (devMark <= 39) {
                                            calculatedGrade = 'F'
                                        }
                                        new Promise((resolve, reject) => {
                                            second_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM], [calculatedGrade], [gradeObtained]];
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

                                                let gradeObtained = 0
                                                let g = [hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM];
                                                for (let i = 0; i < g.length; i++) {
                                                    const e = g[i];
                                                    gradeObtained += e
                                                }

                                                let length = g.length
                                                let devMark = gradeObtained / length
                                                let calculatedGrade
                                                if (devMark > 79) {
                                                    calculatedGrade = 'A+'
                                                } else if (devMark > 74 && devMark <= 79) {
                                                    calculatedGrade = 'A'
                                                } else if (devMark > 69 && devMark <= 74) {
                                                    calculatedGrade = 'A-'
                                                } else if (devMark > 64 && devMark <= 69) {
                                                    calculatedGrade = 'B+'
                                                } else if (devMark > 59 && devMark <= 64) {
                                                    calculatedGrade = 'B'
                                                } else if (devMark > 54 && devMark <= 59) {
                                                    calculatedGrade = 'B-'
                                                } else if (devMark > 49 && devMark <= 54) {
                                                    calculatedGrade = 'C+'
                                                } else if (devMark > 44 && devMark <= 49) {
                                                    calculatedGrade = 'C'
                                                } else if (devMark > 39 && devMark <= 44) {
                                                    calculatedGrade = 'D'
                                                } else if (devMark <= 39) {
                                                    calculatedGrade = 'F'
                                                }
                                                new Promise((resolve, reject) => {
                                                    annual_term_allMarks = [[hadith, arabic, arabic_2, mizan, bangla, english, math, aqaed, QN, quranTazbeed, ICT, BGS, science, AGM], [calculatedGrade], [gradeObtained]];
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

result.get('/updateResult', (req, res) => {
    res.render('updateResult', {title: 'Update result'})
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
                    var sql = `INSERT INTO first_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${AGM}")`;
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
                    var sql = `INSERT INTO second_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${AGM}")`;
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
                    var sql = `INSERT INTO annual_r_3rd_5th (cid, sid, math, quranTazbeed, islamiat, arabic, spokenArabic, banglaWithGrammar, englishWithGrammar, spokenEnglish, BGS, wordBook, GK, science, AGM)
                    VALUES ("${cid}", "${sid}", "${math}", "${quranTazbeed}", "${islamiat}", "${arabic}", "${spokenArabic}", "${banglaWithGrammar}", "${englishWithGrammar}", "${spokenEnglish}", "${BGS}", "${wordBook}", "${GK}", "${science}", "${AGM}")`;
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