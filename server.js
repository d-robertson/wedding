require('dotenv').config();
var express = require('express');
var stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_PlzL4RMbQugwTqbQccUZVxy4');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/weddingApp/dist`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.post('/stripe-charge', function(req, res) {
  console.log(req.body);
  var token = req.body.stripeToken;
  var amount = req.body.amount;

  console.log(token);

  var charge = stripe.charges.create({
    amount: amount,
    currency: 'usd',
    description: 'Derek and Tara Honeymoon Fund',
    source: token
  }, function(err, charge) {
    if(err) {
      console.log(err);
      return res.status(500).json(err);
    }

    return res.status(200).json(charge);
  });
});

app.get('/*', function(req, res) {
  res.sendFile(`${__dirname}/weddingApp/dist/index.html`);
});

app.listen(PORT, function() { console.log(`Listening on port: ${PORT}`) });
