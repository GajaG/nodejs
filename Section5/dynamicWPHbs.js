const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method}/${req.url}`;
    console.log(log);
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs', {
        pageTitle:'Under Maintenance',
        content:'App is being upgraded! We\'ll be right back!'
    });
});

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('homePage.hbs',{
        pageTitle : 'Home Page',
        welcomeString : 'Welcome to HBS demo'
    });
});

app.get('/about',(req,res)=>{
    res.render('aboutPage.hbs',{
        pageTitle : 'About Page'
    });
});



app.listen(3000, ()=>console.log('Server is up on port 3000'));