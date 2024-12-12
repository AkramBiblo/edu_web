const express = require('express');
const payment = express.Router();
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const getDBInfo = require('../../db')
const con = getDBInfo.con
let cookieParser = require("cookie-parser");
payment.use(cookieParser());

payment.get('/update', (req, res) => {
  res.render('payment', {
    title: 'Payment'
    })
})
 
payment.post('/pay', (req, res) => {
    let name = req.body.name;
    let sid = req.body.sid;
    let disc = req.body.paymentDisc;
    let paid = req.body.paid;
    let pStatus = req.body.paymentStatus;
    let date = new Date()
    let y = date.getFullYear()
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

    Number(paid)
    date = date.toLocaleDateString("us-in")

    let campus_key = req.cookies.campus_key;
    const getDBInfo = require("../../db");
    let con = getDBInfo.connectToDatabase(campus_key)

    con.connect(function(err) {
      
      var sql = `INSERT INTO payments (sid, date, month, year, name, amount, paymentDisc, status)
          VALUES ("${sid}", "${date}", "${m}", "${y}", "${name}", "${paid}", "${disc}", "${pStatus}")`
          con.query(sql, function (err, result) {
            res.render('payment', {successMsg: 'payment updated successfully!'})
          })
    });
})

payment.get("/payQuery/:m/:y", (req, res) => {
  let month = req.params.m
  if (month < 10) {
    month = "0" + month
  }
  let year = req.params.y
  let campus_key = req.cookies.campus_key;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)

  con.connect(function (err) {

    var sql = `SELECT * FROM payments WHERE month = "${month}" AND year = "${year}"`;
    con.query(sql, function (err, result) {

      if (result.length <= 0) {
        let data = [`<div class="alert alert-danger">
                      <h4>No record found</h4>
                    </div>`]
        res.send(data);
      } else {
        let totalPayments = 0; 
        for (const data of result) {
          let amount = data.amount
          totalPayments = Number(totalPayments) + Number(amount)
        }

        // let data = [result = result, exp = totalExp]
        let htmlCode = []
        for (const elem of result) {
          let sid = elem.sid
          let date = elem.date
          let desc = elem.paymentDisc
          let amount = elem.amount
          let status = elem.status
          htmlCode.push(`<tr>
            <td class="text-center">${date}</td>
            <td class="text-center">${sid}</td>
            <td>${desc}</td>
            <td class="text-center">${amount}</td>
            <td class="text-center">${status}</td>
        </tr>`)
      }
        let data = [htmlCode, totalPayments]
        res.send(data);
      }
    });
  });
});

payment.post('/info', (req, res) => {
  let sid = req.body.sid;
  let campus_key = req.cookies.campus_key
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
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
  
  con.connect(function(err) {
        var sql = `SELECT * FROM payments WHERE sid = '${sid}'`;
        con.query(sql, function (err, result) {
          res.send(result)
        })
  })
}) 

payment.get("/expenses", (req, res) => {
  let campus_key = req.cookies.campus_key;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
  con.connect(function (err) {
    var sql = "SELECT * FROM expenses";
    con.query(sql, function (err, result) {

      if (result.length <= 0) {
        res.render("expenses", {
          title: 'Expenses'
        });
      } else {
        let totalExp = 0; 
        for (const data of result) {
          let exp = data.amount
          totalExp = Number(totalExp) + Number(exp)
        }
        res.render("expenses", {
          message: result,
          exp: {exp: totalExp},
          title: 'Expenses'
        });
      }
    });
  });
});

payment.get("/expenses/:m/:y", (req, res) => {
  let month = req.params.m
  if (month < 10) {
    month = "0" + month
  }
  let year = req.params.y
  let campus_key = req.cookies.campus_key;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)

  con.connect(function (err) {

    var sql = `SELECT * FROM expenses WHERE month = "${month}" AND year = "${year}"`;
    con.query(sql, function (err, result) {

      if (result.length <= 0) {
        let data = [`<div class="alert alert-danger">
                      <h4>No record found</h4>
                    </div>`]
        res.send(data);
      } else {
        let totalExp = 0; 
        for (const data of result) {
          let exp = data.amount
          totalExp = Number(totalExp) + Number(exp)
        }

        // let data = [result = result, exp = totalExp]
        let htmlCode = []
        for (const elem of result) {
          let date = elem.date
          let desc = elem.description
          let amount = elem.amount
          let status = elem.status
          htmlCode.push(`<tr>
            <td class="text-center">${date}</td>
            <td>${desc}</td>
            <td class="text-center">${amount}</td>
            <td class="text-center">${status}</td>
        </tr>`)
      }
        let data = [htmlCode, totalExp]
        res.send(data);
      }
    });
  });
});

payment.post('/expense', (req, res) => {
  let desc = req.body.description
  let amount = req.body.amount;
  let status = req.body.paymentStatus;
  let date = new Date();
  let m = date.getMonth();
  m++
  if (m < 10) {
    m = "0" + m
  }

  // let d = date.getDate();
  // if (d < 10) {
  //   d = "0" + d
  // }

  let y = date.getFullYear();
  date = date.toLocaleDateString("us-in")
  let campus_key = req.cookies.campus_key;
  const getDBInfo = require("../../db");
  let con = getDBInfo.connectToDatabase(campus_key)
  con.connect(function (err) {
    var sql = `INSERT INTO expenses (description, amount, status, month, year, date) VALUES ("${desc}", "${amount}", "${status}", "${m}", "${y}", "${date}")`;
    con.query(sql, function (err, result) {});
    
    var sql = "SELECT * FROM expenses";
    con.query(sql, function (err, result) {

      if (result.length <= 0) {
        res.send("No expenses available.");
      } else {
        let totalExp = 0; 
        for (const data of result) {
          let exp = data.amount
          totalExp = Number(totalExp) + Number(exp)
        }
        res.render("expenses", {
          message: result,
          exp: {exp: totalExp},
          title: 'Expenses',
          successMsg: `Expenses updated successfully!`
        });
      }
    });
  
  });

  // res.render('expenses', {title: 'Expenses info', successMsg: `Expenses updated successfully!`})
})

module.exports = payment;