const express = require('express');
const router = express.Router();
let cookieParser = require("cookie-parser");
router.use(cookieParser());

// Reserved
// const getDBInfo = require("../../db");
//     const con = getDBInfo.con;
//     con.connect((err) => {
//         let sql = `SELECT * FROM admin`
//         con.query(sql, (err, result) => {
//             let data = result[0]
//         })
//     })

router.get("/", (req, res) => {
    res.render("home", {title: "Home"})
})




module.exports = router;