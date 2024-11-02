const express = require('express');
const router = express.Router();
let cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/", (req, res) => {
    res.render("home", {title: "Home"})
})


module.exports = router;