var keys = require("./config");

process.env.SECRET_KEY = keys.SECRET_KEY;
process.env.PUBLISHABLE_KEY = keys.PUBLISHABLE_KEY;

var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;

var express = require("express");
var app = express();
var stripe = require("stripe")(keySecret);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

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

// stripe node server
app.post("/charge", function (req, res) {
  var amount = 1500;


  console.log('----CL--------');
  console.log(req.body);
  console.log('------------');

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(function (customer) {
    stripe.charges.create({
      amount: amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    });
    console.log("customer: ", customer);
  })
  .catch(function (err) {
    console.log("Error:", err);
  })

  .then(function (charge) {
    console.log("charge: ", charge);
    res.render("thankyou");
  });
 }
);

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
