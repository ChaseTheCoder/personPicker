const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res)=>{
    res.render('/main/main.ejs');
});

module.exports = router;