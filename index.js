var SECRET_KEY = "sk_test_VDn5o8Jc7JuB48LFh0aLT9yC";
var PUBLISHABLE_KEY = 'pk_test_7fpPwU9xfngIbMCkOULqWQSD';

var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;

var app = require("express")();
var stripe = require("stripe")(keySecret);


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

// stripe node server
app.post("/charge", function (req, res) {
  var amount = 1500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(function (customer) {
    stripe.charges.create({
      amount: customer.amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    });
  })
  .catch(function (err) {
    console.log("Error:", err);
  })

  .then(function (charge) {
    res.render("thankyou.html");
  });
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
