const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('unable to append to server.log');
    }
  });
  next();
});

// the following bypasses everything after it from rendering.
// -----  since next never gets called

// app.use((req, res, next) => {
//   res.render('maintain.hbs', {
//     pageTitle: "We'll be right back"
//   })
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})
// express will automatically tag content text, json etc

// root route
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'fan mail from some flounders'
  });
});

// get ( route, handler)
app.get('/about', (req, res) => {
  //res.send('about page');
  res.render('about.hbs', {
    pageTitle: 'About Page',
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
