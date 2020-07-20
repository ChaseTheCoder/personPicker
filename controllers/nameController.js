const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res)=>{
    db.Names.find({}, (err, allNames) => {
        if (err) return console.log(err);
        console.log('All Names = ', allNames);

        res.render('main/main', {
            names: allNames,
        });
    })
});

router.post('/edit', (req, res) => {
    console.log(req.body);
    db.Names.create(req.body, (err, newNames)=> {
        if (err) return console.log(err);

        res.redirect('/edit');
    });
});

router.get("/edit", (req, res)=>{
    db.Names.find({}, (err, allNames) => {
        if (err) return console.log(err);
        console.log('All Names = ', allNames);

        res.render('main/edit', {
            names: allNames,
        });
    })
});

router.delete('/edit', (req, res) => {
    db.Names.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        if (err) return console.log(err);
        res.redirect('/edit');
    });
});


module.exports = router;