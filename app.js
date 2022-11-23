const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const PORT = 3000;

let app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({'extended':false}));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// Routes
app.get('/', (req, res) => {
    res.render('report');
});

app.post('/', (req, res) => {
    res.render('summary', {
        firstName: "Trevor",
        lastName: "Noah",
        email: "email@email.com",
        lostItem: "Umbrella",
        location: "MRT",
        description: ["bulky", "expensive"]
    })
});

app.listen(PORT, () => {
    console.log("Server started")
});
