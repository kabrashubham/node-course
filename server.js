const express = require('express');
const hbs = require('hbs');
var app = express();



hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))


app.use((req,res,next)=>{

})

app.get('/',(req,res)=>{
// res.send('Hello');
res.render('home.hbs',{
    pageTitle:'Welcome to Home Page!!!!!!',
    currentYear: new Date().getFullYear()
});
});


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page!!!!!!',
        currentYear: new Date().getFullYear()
    });
    });

app.listen(3000);