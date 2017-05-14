var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// routes

// routes - index
app.get('/', function(request, response) {
  response.render('/index');
});

app.get('/index.html', function(request, response) {
  response.render('/index');
});

// routes - classes
app.get('/classes.html', function(request, response) {
  response.render('/classes');
});

// routes - faq
app.get('/faq.html', function(request, response) {
  response.render('/freqAsked');
});

// routes - store
app.get('/store.html', function(request, response) {
  response.render('/store');
});

// routes - about the Instructor
app.get('/aboutTheInstructor.html', function(request, response) {
  response.render('/aboutTheInstructor');
});
app.get('/abouttheinstructor.html', function(request, response) {
  response.render('/aboutTheInstructor');
});


// routes - undefined
app.get('*', function(request, response) {
  response.render('/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
