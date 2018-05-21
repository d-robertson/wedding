<template>
  <div class="main">
    <a :href="divId" v-smooth-scroll="{ duration: 1000, offset: 0 }"><div id="mouse" class="mouse-down"></div></a>
    <aHeader></aHeader>
    <div class="container">
      <div class="row">
        <div id="one" class="left image">
          <img src="../assets/8586blue.jpg">
        </div>
        <div id="oneHalf" class="right text">
          <h1>Our Story</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
        </div>
      </div>
      <div class="row">
        <div id="two" class="right image">
          <img src="../assets/112blue.jpg">
        </div>
        <div id="twoHalf" class="left text">
          <div class="padding">
            <h1>This is where more info will go</h1>
            <h2>The peeps or something not sure yet.</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="three" class="left image">
          <img src="../assets/8640blue.jpg">
        </div>
        <div id="threeHalf" class="right text">
          <div class="padding">
            <h1>No Registry but if you wish to help us honey moon we are accepting donations</h1>
            <form v-on:submit.prevent="submitForm" method="post" id="payment-form">
              <div class="form-row">
                <span>$</span><input id="amount" class="amount"  type="tel" v-model="amount" placeholder="10"><span>.00</span>
              </div>
              <div class="form-row">
                <label for="card-element">
                  Credit or debit card
                </label>
                <div id="card-element">
                  <!-- A Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display Element errors. -->
                <div id="card-errors" role="alert"></div>
              </div>

              <button v-on:click.prevent="submitForm">Submit Payment</button>
            </form>
            <div class="progress-container">
              <div id="progress-bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="four" class="right image map">
          <googleMap></googleMap>
        </div>
        <div id="fourHalf" class="left text">
          <div class="padding">
            <h1>This is where we will be partying</h1>
            <h2>41 Lakeshore Dr, Sagle, ID 83860</h2>
            <h2>Located in: The Lodge at Sandpoint</h2>
            <a href="https://www.41southsandpoint.com/menus" target="_blank"><h2>The Menu</h2></a>
          </div>
        </div>
      </div>
    </div>
    <aFooter></aFooter>
  </div>
</template>

<script>
import aHeader from '@/components/Header';
import aFooter from '@/components/Footer';
import googleMap from '@/components/Map';

var stripe = Stripe('pk_test_QSiBmoY5dCOzEwDO9aQFMS5v');
var elements = stripe.elements();

export default {
  name: 'Main',
  components: {aHeader,aFooter,googleMap},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      divId: '#one',
      amount: '',
      total: 0,
      card: {}
    }
  },
  mounted (){
    this.$nextTick(()=>{
      var self = this;
      var numInputs = document.querySelectorAll("input[type='tel']");
      for(var i = 0; i < numInputs.length; i++){
          numInputs[i].addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57){
                  evt.preventDefault();
            }
          });
      }
      function offset(el) {
          var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      // var $output = $('#output');
      $(window).on('scroll', function () {

        if(window.innerWidth < 992){

          var mouse = document.getElementById('mouse'),
              offsetMouse = offset(mouse),
              one = document.getElementById('one'),
              oneOffset = offset(one),
              two = document.getElementById('two'),
              twoOffset = offset(two),
              three = document.getElementById('three'),
              threeOffset = offset(three),
              four = document.getElementById('four'),
              fourOffset = offset(four),
              five = document.getElementById('five'),
              fiveOffset = offset(five),
              oneHalf = document.getElementById('oneHalf'),
              oneHalfOffset = offset(oneHalf),
              twoHalf = document.getElementById('twoHalf'),
              twoHalfOffset = offset(twoHalf),
              threeHalf = document.getElementById('threeHalf'),
              threeHalfOffset = offset(threeHalf),
              fourHalf = document.getElementById('fourHalf'),
              fourHalfOffset = offset(fourHalf)

            if(offsetMouse.top < oneOffset.top){
              self.divId = '#one';
            } else if(offsetMouse.top > oneOffset.top && offsetMouse.top < oneHalfOffset.top){
              self.divId = '#oneHalf';
            } else if(offsetMouse.top > oneHalfOffset.top && offsetMouse.top < twoOffset.top){
              self.divId = '#two';
            } else if(offsetMouse.top > twoOffset.top && offsetMouse.top < twoHalfOffset.top){
              self.divId = '#twoHalf';
            } else if(offsetMouse.top > twoHalfOffset.top && offsetMouse.top < threeOffset.top){
              self.divId = '#three';
            } else if(offsetMouse.top > threeOffset.top && offsetMouse.top < threeHalfOffset.top){
              self.divId = '#threeHalf';
            } else if(offsetMouse.top > threeHalfOffset.top && offsetMouse.top < fourOffset.top){
              self.divId = '#four';
            } else if(offsetMouse.top > fourOffset.top && offsetMouse.top < fourHalfOffset.top){
              self.divId = '#fourHalf';
            } else if(offsetMouse.top > fourHalfOffset.top && offsetMouse.top < fiveOffset.top){
              self.divId = '#five';
            }
        } else {
          var mouse = document.getElementById('mouse'),
              offsetMouse = offset(mouse),
              one = document.getElementById('one'),
              oneOffset = offset(one),
              two = document.getElementById('two'),
              twoOffset = offset(two),
              three = document.getElementById('three'),
              threeOffset = offset(three),
              four = document.getElementById('four'),
              fourOffset = offset(four),
              five = document.getElementById('five'),
              fiveOffset = offset(five)

            if(offsetMouse.top < oneOffset.top){
              self.divId = '#one';
            } else if(offsetMouse.top > oneOffset.top && offsetMouse.top < twoOffset.top){
              self.divId = '#two';
            } else if(offsetMouse.top > twoOffset.top && offsetMouse.top < threeOffset.top){
              self.divId = '#three';
            } else if(offsetMouse.top > threeOffset.top && offsetMouse.top < fourOffset.top){
              self.divId = '#four';
            } else if(offsetMouse.top > fourOffset.top && offsetMouse.top < fiveOffset.top){
              self.divId = '#five';
            }
        }
      });


      function resizable (el, factor) {
        var int = Number(factor) || 7.7;
        function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
        var e = 'keyup,keypress,focus,blur,change'.split(',');
        for (var i in e) el.addEventListener(e[i],resize,false);
        resize();
      }
      resizable(document.getElementById('amount'),10);

      // Custom styling can be passed to options when creating an Element.
      var style = {
        base: {
          color: '#303238',
          fontSize: '16px',
          color: "#32325d",
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: '#ccc',
          },
        },
        invalid: {
          color: '#e5424d',
          ':focus': {
            color: '#303238',
          },
        },
      };

      // Create an instance of the card Element.
      var card = elements.create('card', {style: style});

      // Add an instance of the card Element into the `card-element` <div>.
      card.mount('#card-element');

      card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      this.card = card;

      var line = new ProgressBar.Line('#progress-bar', {
        easing: 'easeInOut',
        color: '#fca4e0',
        strokeWidth: 4,
        trailWidth: 4,
        duration: 1400
      });

      line.animate(.67);

    })
  },
  methods: {
    submitForm(e){
      var self = this;
      e.preventDefault();
      var form = document.getElementById('payment-form');

      stripe.createToken(self.card).then(function(result) {
        if (result.error) {
          // Inform the customer that there was an error.
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token);
        }
      });
        

      function stripeTokenHandler(token) {
        var data = {};
        data.stripeToken = token;
        data.amount = self.amount * 100;

        console.log(data);
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
              contentType: 'application/json',
              url: 'http://localhost:3000/stripe-charge',            
              success: function(data) {
                  console.log('success');
                  console.log(JSON.stringify(data));
              },
              error: function(err){
                console.log('error: ',err);
              }
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fca4e0;
}
div.main {
  background: #1a1927;
  /*background: #d9d8d7;*/
}

div.mouse-down {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40px;
    background-image: url('../assets/mouse-down.png');
    width: 80px;
    height: 80px;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    /*#fca4e0*/
}

div.mouse-down:hover {
  cursor: pointer;
}

div.container {
  max-width: 1200px;
  margin: auto;
}

div.row {
  /*height: 100vh;*/
  width: 100%;
  display: inline-block;
  /*margin-top: -10px;*/
}

.left {
  width: 100%;
  min-height: 100vh;
  float: left;
  text-align: left;
  height: auto;
  position: relative;
}
.left h1 {
  text-align: center;
}
.right h1 {
  text-align: center;
}

.right  h3 {
  padding: 24px;
}
.left h3 {
  padding: 24px;
}
.right {
  width: 100%;
  min-height: 100vh;
  float: right;
  text-align: left;
  height: auto;
  position: relative;
}

div.right.map {
  height: 100vh;
}

.image img {
  object-fit: cover;
  width: 100%;
  height: 100vh;
}

.text {
  /*width: 100%;*/
  /*height: 100%;*/
  /*background: #d9d8d7;*/
  background: #f2f2f2;
}

.padding {
  padding: 12px;
}

form button {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    color: #f2f2f2;
    background-color: #1a1927;
    margin-top: 12px;
    font-size: 16px;
}

form button:hover {
  opacity: .8;
  color: #fca4e0;
  cursor: pointer;
}

form .form-row {
    border: solid 1px;
    border-radius: 5px;
    padding: 16px;
}

form #card-element {
  padding: 12px;
}

form label {
  padding-left: 12px;
}

.progress-container {
  position: absolute; bottom: 24px;
  width: calc(100% - 24px);
}

.amount {
  background: transparent;
  font-size: 22px;
  font-family: 'Love Ya Like A Sister', cursive;
  border: none;
  padding: 12px 0px 12px 12px;
  min-width: 30px!important;
  max-width: 99.99%!important;
  -webkit-transition: width 0.25s;
  transition: width 0.25s;
}

span {
  font-size: 22px;
}

input:focus {
  outline: none;
}

@media (min-width: 992px){
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}
</style>
