const express = require('express');
const hbs = require('hbs');

var app = express();

// set some hbs stuff
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
// express will automaticall tag content text, json etc

// root route
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'fan mail from some flounders'
  });
});

// get ( route, handler)
app.get('/about', (req, res) => {
  //res.send('about page');
  res.render('about.hbs', {
    pageTitle: 'About Page from handlebars',
    currentYear: new Date().getFullYear()
  });
});

// create /bad route. send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'bad request'
  });
})
// set up port to liston on. 3000 is typical for local dev.
// second argument is optional function
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
