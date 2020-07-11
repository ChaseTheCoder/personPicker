const express = require('express');
const methodOverride = require('method-override');
const app = express();
const nameController = require('./controllers/nameController');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
    next();
});

app.get('/', (req, res)=>{
    res.render('home');
});

app.use('/picker', nameController);

app.listen(7000, ()=>{
    console.log('Listening on port 7000');
});