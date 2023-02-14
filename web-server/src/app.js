const express = require('express');
const path = require('path');
const app = express()
const hbs = require('hbs');

//defining paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDir));

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help page',
        name : 'Erico-droid',
        message: 'This is the help page.'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'EricoDroid'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'EricoDroid'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        weather: 'sunny',
        time: '1.00',
        location: 'Nairobi, Kenya'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        advise: 'help article has not been found!',
        name: "Erico-droid"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        advise: 'page not found',
        name: "Erico-droid"
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000...');
})
