require('dotenv').config();
var express = require('express');
var stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_BQokikJOvBiI2HlWgH4olfQ2');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/stripe', function(req, res) {
  var token = req.body.stripeToken;
  var amount = req.body.amount;

  var charge = stripe.charges.create({
    amount: parseInt(amount, 10),
    currency: 'usd',
    description: 'Derek and Tara Honeymoon Fund',
    source: token
  }, function(err, charge) {
    if(err) {
      return res.status(500).json(err);
    }

    return res.status(200).json(charge);
  });
});

app.get('/*', function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, function() { console.log(`Listening on port: ${PORT}`) });
