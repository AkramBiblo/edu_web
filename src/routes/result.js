const express = require("express");
const result = express.Router();
var bodyParser = require("body-parser");
const multer = require("multer");
// const upload = multer({ dest: './src/uploadedFiles/' })
const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");
// const { JSONParser } = require("formidable/parsers");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
let cookieParser = require("cookie-parser");
result.use(cookieParser());

result.post("/getResult/:sid", (req, res) => {
    let sid = req.params.sid;
    let campus = req.body.campus;
    let c;
    let cls = req.body.cname;
    let shift = req.body.shift;
    let term = req.body.term;
    let year = req.body.year;
    switch(cls) {
        case 'Nursery':
          c = "N"
          break;
        case 'K.G':
          c = "KG"
          break;
        case 'Class 1':
          c = "C1"
          break;
        case 'Class 2':
            c = "C2"
            break;
        case 'Class 3':
            c = "C3"
            break;
        case 'Class 4':
            c = "C4"
            break;
        case 'Class 5':
            c = "C5"
            break;
        case 'Class 6':
            c = "C6"
            break;
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

    con.connect((err) => {
        let sql = `SELECT * FROM allstudents WHERE preferredClass = "${cls}" AND shift = "${shift}"`;
        con.query(sql, (err, result) => {
            if (result.length > 0) {
                let markedSid = sid
            let data = []
            let t;
            let F_terms = {N : "first_r_play_nursery", KG : "first_r_play_nursery", C1:"first_r_1st_2nd", C2:"first_r_1st_2nd", C3:"first_r_3rd_5th", C4:"first_r_4th", C5:"first_r_5th", C6:"first_r_6th"}
            let M_terms = {N : "second_r_play_nursery", KG : "second_r_play_nursery", C1:"second_r_1st_2nd", C2:"second_r_1st_2nd", C3:"second_r_3rd_5th", C4:"second_r_4th", C5:"second_r_5th", C6:"second_r_6th"}
            let A_terms = {N : "annual_r_play_nursery", KG : "annual_r_play_nursery", C1:"annual_r_1st_2nd", C2:"annual_r_1st_2nd", C3:"annual_r_3rd_5th", C4:"annual_r_4th", C5:"annual_r_5th", C6:"annual_r_6th"}
            
            if (term == "First Term") {
                t = F_terms[c]
            } else if (term == "Mid Term") {
                t = M_terms[c]
            } else if (term == "Annual Term") {
                t = A_terms[c]
            } 
            let counter = 1
            let limit = result.length
            let database = []
                result.forEach((student) => {

                    let sid = student.sid;
                    let name = student.nameEnglish
                    let sql = `SELECT * FROM ${t} WHERE sid = "${sid}"`
                    con.query(sql, (err, result) => {
                        let studentData = [name, result, sid]
                        data.push(studentData)
                        if (counter == limit) {
                            organizeData(data, markedSid)
                            } else {
                                counter++
                            }

                    })
                })

                function organizeData(data, markedsid) {
                    data.forEach((data) => {
                        let dataLength = data[1].length
                        if (dataLength > 0) {
                            const sub = data[1][0];
                                let cid = sub.cid;
                                let sid = sub.sid;
                                let name = data[0];
                                        let arabic = sub.arabic
                                        let bangla = sub.bangla
                                        let math = sub.math
                                        let english = sub.english
                                        let islamiat = sub.islamiat
                                        let handWriting = sub.HR
                                        let GK = sub.GK
                                        let drawing = sub.drawing
                                        let AGM = sub.AGM
                                        let quranTazbeed = sub.quranTazbeed
                                        let spokenArabic = sub.spokenArabic;
                                        let spokenEnglish = sub.spokenEnglish;
                                        let wordBook = sub.wordBook;
                                        let computer = sub.computer;
                                        let banglaWithGrammar = sub.banglaWithGrammar;
                                        let englishWithGrammar = sub.englishWithGrammar;
                                        let BGS = sub.BGS;
                                        let science = sub.science;
                                        let hadith = sub.hadith;
                                        let MTZT = sub.MTZT;
                                        let mizan = sub.mizan;
                                        let QN = sub.QN;
                                        let TM = sub.TM;
                                        let aqaed = sub.aqaed;
                                        let FM = sub.FM;
                                        let arabic_2 = sub.arabic_2;
                                        let ICT = sub.ICT;

                                        let gradeObtained = 0
                                        let g;
                                        let mainSubjectQty = 0;
                                        let gN = [arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM];
                                        let gK = [quranTazbeed,islamiat,arabic,bangla,english,math,drawing,GK,handWriting,AGM];
                                        let g12 = [quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting];
                                        let g3 = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, computer, AGM];
                                        let g4 = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, TM, MTZT, spokenArabic, spokenEnglish, computer, wordBook, AGM];
                                        let g5 = [hadith, arabic, mizan, bangla, english, math, aqaed, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                                        let g6 = [hadith, arabic, arabic_2, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, mizan, AGM];
                                        // Class
                                        if (cid == 99) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = gN;
                                            mainSubjectQty = 5
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 7
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                       

                                        } else if (cid == 100) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = gK;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 7
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                       
                                        } else if (cid == 1 || cid == 2) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = g12;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 12
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 3) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = g3;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 5 && i < 9) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 13
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 4) {
                                             let studentFullData = []
                                             resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = g4;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 11) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 16
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 5) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = g5;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 11) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 15
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 6) {
                                            let studentFullData = []
                                            resultArray.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    studentFullData.push(data)
                                                }
                                            })
                                            g = g6;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 13) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 13
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                        }
                                       
                        }
                        
                    })

                    setRanking(database, markedsid)
                }

                function setRanking(database, markedsid) {
                    let rankingPosition = []
                    let studentCompleteData = []
                    for (let i = 0; i < database.length; i++) {
                        const student = database[i];
                        let sid = student[1]
                        let name = student[2]
                        let mark = student[3]
                        let gp = student[4]
                        let totalMarks = student[5]
                        totalMarks = Number(totalMarks)
                        let addGPA = student[5]
                        let GPA = student[7]
                        GPA = Number(GPA)
                        let LG = student[8]

                        let backPosition = 0
                        if (rankingPosition.length < 1) {
                            rankingPosition.push(student)
                        } else {
                            let lastIndex = rankingPosition.length - 1

                            for (let j = 0; j < rankingPosition.length; j++) {
                                const element = rankingPosition[j];
                                let GPA_ = element[7]
                                GPA_ = Number(GPA_)
                                let totalMarks_ = element[5]
                                totalMarks_ = Number(totalMarks_)
                                if (GPA > GPA_) {
                                    rankingPosition.splice(j, 0, student)
                                    backPosition = 0
                                    j = rankingPosition.length
                                } else if (GPA == GPA_) {
                                        if (totalMarks > totalMarks_) {
                                            rankingPosition.splice(j, 0, student)
                                            backPosition = 0
                                            j = rankingPosition.length
                                            
                                        } else {
                                            if (j == lastIndex) {
                                                rankingPosition.push(student)
                                                backPosition = 0
                                            }
                                        }
                                } else if (GPA < GPA_) {
                                    backPosition = j + 1
                                }
                                
                            }

                            if (backPosition > 0) {
                                rankingPosition.splice(backPosition, 0, student)
                            }
                        }

                    }

                    for (let finalCount = 0; finalCount < rankingPosition.length; finalCount++) {
                        const student = rankingPosition[finalCount];
                        let sid = student[1]
                        let name = student[2]
                        let mark = student[3]
                        let gp = student[4]
                        let totalMarks = student[5]
                        totalMarks = Number(totalMarks)
                        let addGPA = student[5]
                        let GPA = student[7]
                        GPA = Number(GPA)
                        let LG = student[8]

                        // Getting Highest Marks
                        let highestMarkGot = []
                        let letterGradeOfIndividualSub = []
                        for (let mrk = 0; mrk < mark.length; mrk++) {
                            let highestM = 0
                            for (let dbs = 0; dbs < rankingPosition.length; dbs++) {
                                const db = database[dbs];
                                let marks = db[3]
                                let m = marks[mrk]
                                if (m > highestM) {
                                    highestM = m
                                }
                            }
                            highestMarkGot.push(highestM)

                            let calculatedGrade;
                            if (gp[mrk] > 3.99) {
                                calculatedGrade = 'A+'
                            } else if (gp[mrk] > 3.74 && gp[mrk] <= 3.99) {
                                calculatedGrade = 'A'
                            } else if (gp[mrk] > 3.49 && gp[mrk] <= 3.74) {
                                calculatedGrade = 'A-'
                            } else if (gp[mrk] > 3.24 && gp[mrk] <= 3.49) {
                                calculatedGrade = 'B+'
                            } else if (gp[mrk] > 2.99 && gp[mrk] <= 3.24) {
                                calculatedGrade = 'B'
                            } else if (gp[mrk] > 2.74 && gp[mrk] <= 2.99) {
                                calculatedGrade = 'B-'
                            } else if (gp[mrk] > 2.49 && gp[mrk] <= 2.74) {
                                calculatedGrade = 'C+'
                            } else if (gp[mrk] > 2.24 && gp[mrk] <= 2.49) {
                                calculatedGrade = 'C'
                            } else if (gp[mrk] > 1.99 && gp[mrk] <= 2.24) {
                                calculatedGrade = 'D'
                            } else if (gp[mrk] <= 1.99) {
                                calculatedGrade = 'F'
                            }
                            
                            letterGradeOfIndividualSub.push(calculatedGrade)
                        }

                        if (sid == markedsid) {
                            studentCompleteData.push(student)
                            studentCompleteData.push(highestMarkGot)
                            studentCompleteData.push(letterGradeOfIndividualSub)
                            let rankPosition = finalCount + 1
                            studentCompleteData.push(rankPosition)
                        }
                    }

                    // console.log(studentCompleteData)
                    if (studentCompleteData.length > 0) {
                        res.send(studentCompleteData)
                    } else {
                        studentCompleteData.push("Result is not available!")
                        res.send(studentCompleteData)
                    }
                    
                    
                }
                
            }
        })
    })
})

result.post("/getResultSheet", (req, res) => {
    let campus = req.body.campus;
    let c = req.body.class;
    let cls;
    let shift = req.body.shift;
    let term = req.body.term;
    let year = req.body.year;
    
    switch(c) {
        case 'N':
          cls = "Nursery"
          break;
        case 'KG':
          cls = "K.G"
          break;
        case 'C1':
          cls = "Class 1"
          break;
        case 'C2':
            cls = "Class 2"
            break;
        case 'C3':
            cls = "Class 3"
            break;
        case 'C4':
            cls = "Class 4"
            break;
        case 'C5':
            cls = "Class 5"
            break;
        case 'C6':
            cls = "Class 6"
            break;
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

    con.connect((err) => {
        let sql = `SELECT * FROM allstudents WHERE preferredClass = "${cls}" AND shift = "${shift}"`;
        con.query(sql, (err, result) => {
            if (result.length > 0) {
            let data = []
            let t;
            let F_terms = {N : "first_r_play_nursery", KG : "first_r_play_nursery", C1:"first_r_1st_2nd", C2:"first_r_1st_2nd", C3:"first_r_3rd_5th", C4:"first_r_4th", C5:"first_r_5th", C6:"first_r_6th"}
            let M_terms = {N : "second_r_play_nursery", KG : "second_r_play_nursery", C1:"second_r_1st_2nd", C2:"second_r_1st_2nd", C3:"second_r_3rd_5th", C4:"second_r_4th", C5:"second_r_5th", C6:"second_r_6th"}
            let A_terms = {N : "annual_r_play_nursery", KG : "annual_r_play_nursery", C1:"annual_r_1st_2nd", C2:"annual_r_1st_2nd", C3:"annual_r_3rd_5th", C4:"annual_r_4th", C5:"annual_r_5th", C6:"annual_r_6th"}
            
            if (term == "First Term") {
                t = F_terms[c]
            } else if (term == "Mid Term") {
                t = M_terms[c]
            } else if (term == "Annual Term") {
                t = A_terms[c]
            } 
            let counter = 1
            let limit = result.length
            let database = []
                result.forEach((student) => {

                    let sid = student.sid;
                    let name = student.nameEnglish
                    let sql = `SELECT * FROM ${t} WHERE sid = "${sid}"`
                    con.query(sql, (err, result) => {
                        let studentData = [name, result]
                        data.push(studentData)
                        if (counter == limit) {
                            organizeData(data)
                            } else {
                                counter++
                            }

                    })
                })

                function organizeData(data) {
                    data.forEach((data) => {
                        let dataLength = data[1].length
                        if (dataLength > 0) {
                            const sub = data[1][0];
                                let cid = sub.cid;
                                let sid = sub.sid;
                                let name = data[0];
                                        let arabic = sub.arabic
                                        let bangla = sub.bangla
                                        let math = sub.math
                                        let english = sub.english
                                        let islamiat = sub.islamiat
                                        let handWriting = sub.HR
                                        let GK = sub.GK
                                        let drawing = sub.drawing
                                        let AGM = sub.AGM
                                        let quranTazbeed = sub.quranTazbeed
                                        let spokenArabic = sub.spokenArabic;
                                        let spokenEnglish = sub.spokenEnglish;
                                        let wordBook = sub.wordBook;
                                        let computer = sub.computer;
                                        let banglaWithGrammar = sub.banglaWithGrammar;
                                        let englishWithGrammar = sub.englishWithGrammar;
                                        let BGS = sub.BGS;
                                        let science = sub.science;
                                        let hadith = sub.hadith;
                                        let MTZT = sub.MTZT;
                                        let mizan = sub.mizan;
                                        let QN = sub.QN;
                                        let TM = sub.TM;
                                        let aqaed = sub.aqaed;
                                        let FM = sub.FM;
                                        let arabic_2 = sub.arabic_2;
                                        let ICT = sub.ICT;

                                        let gradeObtained = 0
                                        let g;
                                        let mainSubjectQty = 0;
                                        let gN = [arabic, islamiat, bangla, english, math, drawing, GK, handWriting, AGM];
                                        let gK = [quranTazbeed,islamiat,arabic,bangla,english,math,drawing,GK,handWriting,AGM];
                                        let g12 = [quranTazbeed, islamiat, arabic, bangla, english, math, spokenArabic, spokenEnglish, wordBook, computer, drawing, GK, AGM, handWriting];
                                        let g3 = [quranTazbeed, islamiat, arabic, math, banglaWithGrammar, englishWithGrammar, science, BGS, GK, wordBook, spokenEnglish, spokenArabic, computer, AGM];
                                        let g4 = [quranTazbeed, arabic, bangla, english, islamiat, math, mizan, BGS, science, QN, TM, MTZT, spokenArabic, spokenEnglish, computer, wordBook, AGM];
                                        let g5 = [hadith, arabic, mizan, bangla, english, math, aqaed, QN, quranTazbeed, BGS, science, spokenArabic, spokenEnglish, computer, AGM];
                                        let g6 = [hadith, arabic, arabic_2, bangla, english, math, aqaed, BGS, QN, quranTazbeed, ICT, science, mizan, AGM];
                                        // Class
                                        if (cid == 99) {
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = gN;
                                            mainSubjectQty = 5
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 7
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                       

                                        } else if (cid == 100) {
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = gK;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 7
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                       
                                        } else if (cid == 1 || cid == 2) {
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = g12;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else {
                                                if (e > 19.75) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 12
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 3) {
                                            // mainSubjectQty = 6
                                            // i > 5 && i < 9
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = g3;
                                            mainSubjectQty = 6
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 5 && i < 9) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 13
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 4) {
                                            // g = g4
                                            // mainSubjectQty = 7
                                            // i > 6 && i < 11
                                             let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = g4;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 11) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 16
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 5) {
                                            // g = g5
                                            // mainSubjectQty = 7
                                            // i > 6 && i < 11
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = g5;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 11) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 15
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)

                                        } else if (cid == 6) {
                                            // g = g6
                                            // mainSubjectQty = 7
                                            // i > 6 && i < 13
                                            let studentFullData = []
                                            resultArray_2.forEach((data) => {
                                                let classId = data[0]
                                                classId = Number(classId)
                                                if (classId == cid) {
                                                    let subjects = data[2]
                                                    studentFullData.push(subjects)
                                                }
                                            })
                                            g = g6;
                                            mainSubjectQty = 7
                                            let gp = [];
                                            let lg = [];
                                        for (let i = 0; i < g.length; i++) {
                                            const e = g[i];
                                            Number(e)
                                            let letterGrade;
                                            let gradePoint;
                                            
                                            if (i < mainSubjectQty) {
                                                if (e > 79) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 74 && e <= 79) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 69 && e <= 74) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 64 && e <= 69) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 59 && e <= 64) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 54 && e <= 59) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 49 && e <= 54) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 44 && e <= 49) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 39 && e <= 44) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 39) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
                                                gp.push(gradePoint);
                                            } else if (i > 6 && i < 13) {
                                                if (e > 39.5) {
                                                    letterGrade = 'A+'
                                                    gradePoint = 4.00
                                                } else if (e > 37 && e <= 39.5) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 34.5 && e <= 37) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 32 && e <= 34.5) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 29.5 && e <= 32) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 27 && e <= 29.5) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 24.5 && e <= 27) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 22 && e <= 24.5) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 19.99 && e <= 22) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
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
                                                    gradePoint = 4.00
                                                } else if (e > 18.74 && e <= 19.75) {
                                                    letterGrade = 'A'
                                                    gradePoint = 3.75
                                                } else if (e > 17.49 && e <= 18.5) {
                                                    letterGrade = 'A-'
                                                    gradePoint = 3.50
                                                } else if (e > 16.24 && e <= 17.25) {
                                                    letterGrade = 'B+'
                                                    gradePoint = 3.25
                                                } else if (e > 14.99 && e <= 16) {
                                                    letterGrade = 'B'
                                                    gradePoint = 3.00
                                                } else if (e > 13.74 && e <= 14.75) {
                                                    letterGrade = 'B-'
                                                    gradePoint = 2.75
                                                } else if (e > 12.49 && e <= 13.5) {
                                                    letterGrade = 'C+'
                                                    gradePoint = 2.50
                                                } else if (e > 11.24 && e <= 12.25) {
                                                    letterGrade = 'C'
                                                    gradePoint = 2.25
                                                } else if (e > 9.99 && e <= 11) {
                                                    letterGrade = 'D'
                                                    gradePoint = 2.00
                                                } else if (e <= 9.99) {
                                                    letterGrade = 'F'
                                                    gradePoint = 0
                                                }

                                                // lg.push(letterGrade)
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

                                        let additionalGPA = Number(extraGPA) / 13
                                        additionalGPA = additionalGPA.toFixed(2)
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

                                        if (finalGPA >= 4) {
                                            finalGPA = "4.00"
                                        }

                                        studentFullData.push(sid)
                                        studentFullData.push(name)
                                        studentFullData.push(g)
                                        studentFullData.push(gp)
                                        studentFullData.push(gradeObtained)
                                        studentFullData.push(additionalGPA)
                                        studentFullData.push(finalGPA)
                                        studentFullData.push(calculatedGrade)
                                        database.push(studentFullData)
                                        }
                                       
                        }
                        
                    })

                    setRanking(database)
                }

                function setRanking(database) {
                    let rankingPosition = []
                    for (let i = 0; i < database.length; i++) {
                        const student = database[i];
                        let sid = student[1]
                        let name = student[2]
                        let mark = student[3]
                        let gp = student[4]
                        let totalMarks = student[5]
                        totalMarks = Number(totalMarks)
                        let addGPA = student[5]
                        let GPA = student[7]
                        GPA = Number(GPA)
                        let LG = student[8]
                        let gpaReserved = 0
                            let totalMarksReserved = 0
                            let frontPosition = 0
                            let frontPositionSet = false;
                            let backPosition = 0
                        if (rankingPosition.length < 1) {
                            rankingPosition.push(student)
                        } else {
                            let lastIndex = rankingPosition.length - 1

                            for (let j = 0; j < rankingPosition.length; j++) {
                                const element = rankingPosition[j];
                                let GPA_ = element[7]
                                GPA_ = Number(GPA_)
                                let totalMarks_ = element[5]
                                totalMarks_ = Number(totalMarks_)
                                if (GPA > GPA_) {
                                    rankingPosition.splice(j, 0, student)
                                    backPosition = 0
                                    j = rankingPosition.length
                                } else if (GPA == GPA_) {
                                        if (totalMarks > totalMarks_) {
                                            rankingPosition.splice(j, 0, student)
                                            backPosition = 0
                                            j = rankingPosition.length
                                            
                                        } else {
                                            if (j == lastIndex) {
                                                rankingPosition.push(student)
                                                backPosition = 0
                                            }
                                        }
                                } else if (GPA < GPA_) {
                                    backPosition = j + 1
                                }
                                
                            }

                            if (backPosition > 0) {
                                rankingPosition.splice(backPosition, 0, student)
                            }
                        }
                    }
                    res.send(rankingPosition)
                    
                }
                
            }
        })
    })

})

result.get('/updateResult', (req, res) => {
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name", "term_name", "admin"])
    setTimeout(() => {
      let class_name = dataQuery[0]
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      let term_name = dataQuery[3]
      let admin = dataQuery[4]
      res.render('updateResult', {
        title: 'Update result',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name,
        term_name: term_name,
        admin: admin
        })
    }, 2000)
})

result.get('/file_upload', (req, res) => {
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "term_name"])
    setTimeout(() => {
      let class_name = dataQuery[0]
      let term_name = dataQuery[1]
      res.render('result_file_upload', {
        title: 'Update result',
        class_name: class_name,
        term_name: term_name
        })
    }, 2000)
})

result.get('/resultSheets', (req, res) => {
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let dataQuery = getDBInfo.getDataFrom(campus_key, ["class_name", "section_name", "shift_name", "term_name", "admin"])
    setTimeout(() => {
      let class_name = dataQuery[0]
      let section_name = dataQuery[1]
      let shift_name = dataQuery[2]
      let term_name = dataQuery[3]
      let admin = dataQuery[4]
      res.render('resultSheet', {
        title: 'Result Sheet',
        class_name: class_name,
        section_name: section_name,
        shift_name: shift_name,
        term_name: term_name,
        admin: admin
        })
    }, 2000)
})

result.get('/form/:class_name', (req, res) => {
    let class_name = req.params.class_name;
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
    let subj_class_name = `subjects_of_${class_name}`;
    let subjectTable = subj_class_name.replaceAll(/\s/g, "_");
    let getSubject = `SELECT * FROM ${subjectTable}`
    con.query(getSubject, (err, result) => {
        let subjects = result;
        let dataQuery = getDBInfo.getDataFrom(campus_key, ["term_name"])
        setTimeout(() => {
            let term_name = dataQuery[0]
            res.render("resultUploadForm", {
                class_name: class_name,
                subjects: subjects,
                term_name: term_name,
                title: "Result Upload Form"
            })
          }, 2000)
        
    })
})

result.post("/update", (req, res) => {
    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)
    let class_name = req.body.class_name;
    let resultTable = `${class_name}_result`
    let revisedResultTableName = resultTable.replaceAll(/\s/g, "_");
    let subj_class_name = `subjects_of_${class_name}`;
    let subjectTable = subj_class_name.replaceAll(/\s/g, "_");
    let getSubject = `SELECT * FROM ${subjectTable}`
    con.query(getSubject, (err, result) => {
        let subjects = result;
        let sid = req.body.sid;
        let year = req.body.year;
        let term = req.body.term;
        let inputQry = `INSERT INTO ${revisedResultTableName} (sid, year, term) VALUES ("${sid}", "${year}", "${term}")`
        con.query(inputQry, (err, result) => {})
        setTimeout(() => {
            for (let i = 0; i < subjects.length; i++) {
                const subject = subjects[i];
                let subject_name = subject.subject_name;
                let resultTableSubjectHead = subject_name.replaceAll(/\s/g, "_");
                let s = req.body[subject_name];
                let updateResult = `UPDATE ${revisedResultTableName} SET ${resultTableSubjectHead} = "${s}" WHERE sid = "${sid}" AND year = "${year}" AND term = "${term}"`
                con.query(updateResult, (err, result) => {})
            }
            renderBackToForm(class_name)
        }, 1000);
    });

    function renderBackToForm(c) {
        let class_name = c;
        let campus_key = req.cookies.campus_key;
        const getDBInfo = require("../../db");
        let con = getDBInfo.connectToDatabase(campus_key)
        let subj_class_name = `subjects_of_${class_name}`;
        let subjectTable = subj_class_name.replaceAll(/\s/g, "_");
        let getSubject = `SELECT * FROM ${subjectTable}`
        con.query(getSubject, (err, result) => {
            let subjects = result;
            let dataQuery = getDBInfo.getDataFrom(campus_key, ["term_name"])
            setTimeout(() => {
                let term_name = dataQuery[0]
                res.render("resultUploadForm", {
                    class_name: class_name,
                    subjects: subjects,
                    term_name: term_name,
                    title: "Result Upload Form",
                    successMsg: "Result uploaded successfully!"
                })
              }, 2000)
            
        })
    }
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
  result.post(
    "/result_file_upload",
    urlencodedParser,
    upload.single("Result"),
    // upload.array('photos', 4),
    function (req, res) {
      let F = file = req.file.filename;
      let sid = req.body.sid;
      let campus_key = req.cookies.campus_key
        const getDBInfo = require("../../db");
        let con = getDBInfo.connectToDatabase(campus_key)
      con.connect((err) => {
        let sql = `UPDATE allstudents SET f_t_result_file = "${F}" WHERE sid = "${sid}"`
        con.query(sql, (err, result) => {
          res.render("result_file_upload", {successMsg: "Result uploaded successfully!"})
        })
      })
  
    })

module.exports = result;