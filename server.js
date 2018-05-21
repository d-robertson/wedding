require('dotenv').config();
var express = require('express');
var stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_PlzL4RMbQugwTqbQccUZVxy4');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/weddingApp/dist`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());



app.post('/stripe-charge', function(req, res) {
  console.log(req.body);
  var token = req.body.stripeToken.id;
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

// var totalAmount = 0;

function getCharges(res, startingAfter, previousCharges){
  var totalAmount = 0;
  if(startingAfter != null){
    var charges = stripe.charges.list(
      { limit: 100, starting_after: startingAfter},
      function(err, charges) {
        // console.log(err);
        // asynchronously called

        if(charges.data){
          if(charges.data.length && charges.has_more){
            if(previousCharges && previousCharges.length){
              charges.data.concat(previousCharges);
            }
            getCharges(res, charges.data[99].id, charges.data);
          } else {
            if(previousCharges && previousCharges.length){
              charges.data.concat(previousCharges);

              for(var j = 0; j < charges.data.length; j++){
                totalAmount += charges.data[j].amount;
              }
              console.log('total in fun: ', totalAmount);
              res.send({amount: totalAmount});
            }
          }
        }
      }
    );

    
  } else {
    var charges = stripe.charges.list(
      { limit: 100 },
      function(err, charges) {
        console.log('charges: ',charges);
        // asynchronously called

        if(charges.data){
          if(charges.data.length && charges.has_more){
            getCharges(res, charges.data[99].id, charges.data);
          } else {
            for(var i = 0; i < charges.data.length; i++){
              totalAmount += charges.data[i].amount;
            }
            console.log('total in fun: ', totalAmount);
            res.send({amount: totalAmount});
          }
        }
      }
    );
    
  }
}

app.get('/get-total', function(req, res){

  // console.log(req.body);
  getCharges(res, null, null);
  // var charges = stripe.charges.list(
  //   { limit: 100},
  //   function(err, charges) {
  //     console.log(err);
  //     console.log(charges);
  //     // asynchronously called
  //   }
  // );  

  // console.log('all: ',allChargesAmount);
  // res.send({ amount: allChargesAmount });
  
});

app.get('/*', function(req, res) {
  res.sendFile(`${__dirname}/weddingApp/dist/index.html`);
});

app.listen(PORT, function() { console.log(`Listening on port: ${PORT}`) });
