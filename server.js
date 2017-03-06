const express = require('express');

var app = express();

// express will automaticall tag content text, json etc

// root route
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andy',
    likes: [
      'biking',
      'music'
    ]
  });
});

// get ( route, handler)
app.get('/about', (req, res) => {
  res.send('about page');
});


// create /bad route. send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'bad request'
  });
})
// set up port to liston on. 3000 is typical for local dev
app.listen(3000);
