const express = require('express');
const routine = express.Router();
var bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
// var XLSX = require("xlsx");
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const getDBInfo = require('../../db')
const con = getDBInfo.con

const classRoutines =  [
    
    [   className = 'Play',
        AllSubjects = ['Arabic', 'Qaida', 'Bangla', 'English', 'Math', 'Drawing'],
        ['Qaida', 'English', 'Tiffin Break', 'Math', 'Drawing'],
        ['Qaida', 'Bangla', 'Tiffin Break', 'Arabic', 'MQ'],
        ['Qaida', 'English', 'Tiffin Break', 'Math', 'Drawing'],
        ['Qaida', 'Bangla', 'Tiffin Break', 'Arabic', 'MQ'],
        ['Qaida', 'English', 'Tiffin Break', 'Math', 'Drawing'],
        ['Qaida', 'Bangla', 'Tiffin Break', 'Arabic', 'MQ']
    ],
    [   className = 'Nursery',
        ['Qaida', 'English', 'Tiffin Break', 'Bangla', 'Math'],
        ['Qaida', 'Arabic', 'Tiffin Break', 'MQ', 'GK'],
        ['Qaida', 'English', 'Tiffin Break', 'Bangla', 'Math'],
        ['Qaida', 'Arabic', 'Tiffin Break', 'MQ', 'GK'],
        ['Qaida', 'English', 'Tiffin Break', 'Bangla', 'Math'],
        ['Qaida', 'Arabic', 'Tiffin Break', 'MQ', 'GK']
    ],
    [   className = 'Class 1',
        ['Arabic', 'English', 'Tiffin Break',  'Math', 'Qaida'],
        ['Bangla', 'Quraan', 'Tiffin Break', 'Aqaid', 'Qaida'],
        ['Arabic', 'English', 'Tiffin Break',  'Math', 'Qaida'],
        ['Bangla', 'Quraan', 'Tiffin Break', 'Aqaid', 'Qaida'],
        ['Arabic', 'English', 'Tiffin Break',  'Math', 'Qaida'],
        ['Bangla', 'Quraan', 'Tiffin Break', 'Aqaid', 'Qaida']
    ],
    [   className = 'Class 2',
        ['Math', 'Arabic', 'Tiffin Break', 'Qaida', 'Bangla'],
        ['Quraan', 'Qaida', 'Tiffin Break', 'English', 'Aqaid'],
        ['Math', 'Arabic', 'Tiffin Break', 'Qaida', 'Bangla'],
        ['Quraan', 'Qaida', 'Tiffin Break', 'English', 'Aqaid'],
        ['Math', 'Arabic', 'Tiffin Break', 'Qaida', 'Bangla'],
        ['Quraan', 'Qaida', 'Tiffin Break', 'English', 'Aqaid']
    ],
    [   className = 'Class 3',
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science'],
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science'],
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science']
    ],
    [   className = 'Class 4',
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science'],
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science'],
        ['Bangla', 'Math', 'Tiffin Break', 'Arabic', 'Quraan + Aqaid'],
        ['Social science', 'English', 'Tiffin Break', 'Grammer', 'Science']
    ],
    [   className = 'Class 5',
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science'],
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science'],
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science']
    ],
    [   className = 'Class 6',
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science'],
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science'],
        ['Math', 'Arabic', 'Tiffin Break', 'English', 'English'],
        ['Social science', 'Bangla', 'Tiffin Break', 'Quraan + Aqaid', 'Science']
    ]

]

routine.get('/:id', (req, res) => {
    let cid = req.params.id
    Number(cid)
    let p = classRoutines[cid]
    res.render('classRoutine', {message: p})
})












module.exports = routine;



