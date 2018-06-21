<template>
  <div class="main">
    <a :href="divId" v-smooth-scroll="{ duration: 1000, offset: 0 }"><div id="mouse" class="mouse-down"></div></a>
    <aHeader></aHeader>
    <div class="container clearfix">
      <div class="row clearfix">
        <div id="one" class="left image clearfix">
          <div id="img1" class="images-2"></div>
          <div id="img2" class="images-2" v-if="window.innerWidth > 992"></div>
        </div>
        <!-- <div id="one-other-pic" class="left image">
          <div style="background-image:url('../assets/44blue.jpg')"></div>
        </div> -->
        <div id="oneHalf" class="right text clearfix">
          <h1>Our Story From Tara:</h1>
          <h3>Derek and I have a unique story. The thing that has been the biggest blessing to me is how we have managed to be the partner that the other  needed in the various stages of life we have found each other. We first met our Freshman year of high school. Derek and I shared a few classes together and some mutual friends. One of my first interactions with him that I can remember is him trying to teach me how to skateboard at a friend’s birthday party.  I don’t think I humored him much with the skateboard, I was far too afraid of not being a natural on my first try. As a young adult I would avoid venerability at almost any cost, so I kept my barriers up during most of our interactions. Which is probably why it took him until April to ask me out. We ended up spending a lot of time together playing basketball in PE and then Derek eventually started walking me up to the buses at the end of the school day. We dated off and on throughout high school and into our first year of college.
          </h3>
          <h3>
          After that we had a 9 year separation. I asked to meet up with him a couple of times with little response. It took some persistence but he finally agreed to meet up with me. We were both incredibly nervous and unsure of what meeting up again would be like. At this point all we knew is that we knew nothing about each other. We both anticipated that it would be a quick chat, just an hour at best. We ended up talking for 4 hours before we checked the time. Being together again was comfortable and easy. We covered so much in that time, but there was still a desire to know the other person more.  We both decided we wanted to keep hanging out after that. Life had brought us both through some less than ideal circumstances and we each learned a lot through our respective experiences.
          </h3>
          <h3>
          We are both so excited for our wedding, but so much more excited for continuing our journey together in marriage! We dream about taking time to travel, to build a home together, and to make a family someday.</h3>
        </div>
      </div>
      <div class="row clearfix">
        <div id="two" class="right image clearfix">
          <h1 id="tank-title">Tank Approved :)</h1>
          <div class="images-3"  id="img3"></div>
          <div class="images-3"  id="img4" v-if="window.innerWidth > 992"></div>
          <div  class="images-3" id="img5" v-if="window.innerWidth > 992"></div>

        </div>
        <div id="twoHalf" class="left text clearfix">
          <div class="padding">
            <h1>Wedding Party</h1>
            <div class="peep">
              <div class="peep-left">
                <div id="courtney" class="peep-img"></div>
                <h3>Courtney: Maid of Honor <br>(Sister)</h3>
              </div>
              <div class="peep-right">
                <h3>Favorite Memory:<br><br> “ The Easter Sunday that we played outside all day. Josh, myself and you all pretended we were pregnant and stuffed pillows in our tummy’s and butts! Then we ran around outside and pretended to sumo wrestle  and play with the stability ball. ”</h3>
              </div>
            </div>
            <div class="peep">
              <div class="peep-left">
                <div id="paige" class="peep-img"></div>
                <h3>Paige: Bridesmaid <br>(Camp Coach)</h3>
              </div>
              <div class="peep-right">
                <h3>Favorite Memory:<br><br> “ Our look! The fact you are the only one on the planet the knows what I am thinking when I give you that look. No words are needed. You just know. And you always know exactly what to say or do! ”</h3>
              </div>
            </div>
            <div class="peep">
              <div class="peep-left">
                <div id="kalen" class="peep-img"></div>
                <h3>Kalen: Bridesmaid<br> (Pride Prep)</h3>
              </div>
              <div class="peep-right">
                <h3>Favorite Memory: <br><br>“ The first time we ever met when I was interviewing her for a coaching position. After talking with her for just a few minutes we realized she had either coached with or knew almost every coach I had ever had growing up and we spent a majority of the time trying to figure out how we had never met before! She was such an easy person to talk to. ”</h3>
              </div>
            </div>
            <div class="peep">
              <div class="peep-left">
                <div id="derek" class="peep-img"></div>
                <h3>Derek: Best Man <br>(Best Friend)</h3>
              </div>
              <div class="peep-right">
                <h3>Most Admired Quality: <br><br>“ His quality I admire most is loyalty. 100%. That guy will stop whatever he is doing to help a friend in need. ”</h3>
              </div>
            </div>
            <div class="peep">
              <div class="peep-left">
                <div id="jayce" class="peep-img"></div>
                <h3>Jayce: Groomsman<br> (Brother)</h3>
              </div>
              <div class="peep-right">
                <h3>Most Admired Quality: <br><br>"His sense of adventure. He's always ready to wander off into unknown territory or push the limits well beyond where the rest of us chicken out. He has always been one of the best adventure partners anyone could ask for. "</h3>
              </div>
            </div>
            <div class="peep">
              <div class="peep-left">
                <div id="sean" class="peep-img"></div>
                <h3>Sean: Groomsman<br> (Brother)</h3>
              </div>
              <div class="peep-right">
                <h3>Most Admired Quality: <br><br>" "</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div id="three" class="left image clearfix">
          <div id="img6"></div>
        </div>
        <div id="threeHalf" class="right text clearfix">
          <div class="padding">
            <div v-if="!thankYou">
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

                <button v-if="!sending && !error" v-on:click.prevent="submitForm">Submit Payment</button>
                <button v-else-if="error">
                  <div class="leftEye"></div>
                  <div class="rightEye"></div>
                  <div class="mouth"></div>
                </button>
                <button v-else>
                  <div class="leftEye"></div>
                  <div class="rightEye"></div>
                  <div class="mouth"></div>
                </button>
              </form>
            </div>
            <div v-else>
              <h1 style="margin-top: 50%;">Thank you so much for your donation to the Tara & Derek Honey Moon Fund :)</h1>
            </div>
            <div class="progress-container">
              <div id="progress-bar"></div>
            </div>
            <div class="current-goal">
              <span style="float:left;">Current ${{ currentTotal }}.00</span>
            
              <span style="float:right;">Goal ${{ goal / 100 }}.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div id="four" class="right image map clearfix">
          <googleMap></googleMap>
        </div>
        <div id="fourHalf" class="left text clearfix">
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
      card: {},
      goal: 300000,
      currentTotal: 0,
      sending: false,
      loading: false,
      thankYou: false,
      thankYouAmount: '',
      error: false,
      window: window
    }
  },
  watch: {
    amount(val){
      if(this.error && val.length >= 1){
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = '';
        this.error = false;
      }
    }
  },
  mounted (){
    this.getCharges();
    
    this.$nextTick(()=>{
      var self = this;
      setTimeout(function(){ self.setHeight(); },300);
     
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

      $(window).on('resize', function(){
        // self.setHeight();
      });

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

      self.resizable(document.getElementById('amount'),10);

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

        this.line = new ProgressBar.Line('#progress-bar', {
          easing: 'easeInOut',
          color: '#fca4e0',
          strokeWidth: 8,
          trailWidth: 8,
          duration: 1400,
          svgStyle: {
            borderRadius: '5px',
            boxShadow: '0 8px 6px -6px black'
          }
        });

    })
  },
  methods: {
    submitForm(e){
      var self = this;
      this.sending = true;
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
              // url: 'http://localhost:3000/stripe-charge', 
              url: '/stripe-charge',            
              success: function(data) {
                  console.log('success');
                  // console.log('data: ',JSON.stringify(data));
                  self.thankYouAmount = self.amount;
                  setTimeout(function(){
                    self.sending = false;
                    self.reset();
                    self.thankYou = true;
                    
                  }, 1000);
                  
                  self.getCharges();
              },
              error: function(err){
                console.log('error: ',err);
                self.sending = false;
                self.$nextTick(function(){
                  var errorElement = document.getElementById('card-errors');
                  errorElement.textContent = 'Something went wrong. Please make sure to enter an amount.';
                  self.error = true;
                })
              }
        });
      }
    },
    getCharges(){
      var self = this;
      $.ajax({
        type: 'GET',
        contentType: 'application/json',
        // url: 'http://localhost:3000/get-total', 
        url: '/get-total',            
        success: function(data) {
            console.log('success');
            // console.log('data: ',JSON.stringify(data));
        },
        error: function(err){
          console.log('error: ',err);
        }
      }).done(function(data){
        // console.log('in done: ', data);

        self.currentTotal = data.amount / 100;
        var percent = data.amount / self.goal;
        console.log(percent);

        self.line.animate(percent);

      });
    },
    reset(){
      this.amount = '';
    },
    resizable (el, factor) {
        var int = Number(factor) || 7.7;
        function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
        var e = 'keyup,keypress,focus,blur,change'.split(',');
        for (var i in e) el.addEventListener(e[i],resize,false);
        resize();
    },
    setHeight(){
      this.$nextTick(()=>{

        var images = $('.images-3');
        var otherImages = $('.images-2');


        for(var i = 0; i < images.length; i++){
          
          if(window.innerWidth > 420){

            $(images[i]).height(images[i].parentElement.parentElement.clientHeight / 3);

          } else {
            console.log(window.innerHeight);
            $(images[i]).height(window.innerHeight);

          }

        }

        for(var j = 0; j < otherImages.length; j++){

          if(window.innerWidth > 420){

            $(otherImages[j]).height(otherImages[j].parentElement.parentElement.clientHeight / 2);

          } else {

            // console.log(window.innerHeight);
            $(otherImages[i]).height(window.innerHeight);

          }

        }
      })
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
  position: relative;
}

#tank-title {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  color: #1a1927;
  font-size: 40px;
}

div#one.left div{
  /*height: 518px;*/
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

div#one.text {
  height: 1052px;
}

.text {
  /*width: 100%;*/
  /*background: #d9d8d7;*/
  background: #f2f2f2;
}

.peep {
  width: 100%;
  height: 400px;
}

.peep img{
    width: 250px;
    height: 206px;
    object-fit: cover;
}

.peep .peep-img {
  width: 250px;
  height: 206px;
  background-size: cover;
  margin: auto;
}

.clearfix {
    overflow: auto;
}
  

#img1{background-image:url('../assets/8586blue.jpg'); background-position: center; background-size: cover;}
@media(max-width: 420px){
  #img1{background-image:url('../assets/8586blue.jpg'); background-position: center; background-size: cover; height: 100vh}
}
#img2{background-image:url('../assets/44blue.jpg'); background-position: center; background-size: cover;}
#img3{background-image:url('../assets/112blue.jpg'); background-position: center; background-size: cover;}
#img4{background-image:url('../assets/dtblue.jpg'); background-position: center; background-size: cover;}
#img5{background-image:url('../assets/happy-tank-blue.jpg');background-position: center; background-size: cover;}
#img6{background-image:url('../assets/8640blue.jpg'); background-position: center; background-size: cover; height: 100vh;}


#courtney {
  background-image: url('../assets/courtney.png');
}

#paige {
  background-image: url('../assets/paige.png');
}

#kalen {
  background-image: url('../assets/kalen.jpg');
  background-position: center;
}

#derek {
  background-image: url('../assets/derek-pederson.png');
}

#jayce {
  background-image: url('../assets/metelo.jpg');
  background-position: center;
  background-size: cover;
}

#sean {
  background-image: url('../assets/44blue.jpg');
}

.peep-left {
  float: left;
  height: auto;
  width: 50%;
}

.peep-left h3{
  padding: 0 24px;
}

.peep-right {
  float: right;
  height: auto;
  width: 50%;
}

.peep-right h3 {
  margin: 0;
  padding-top: 0;

}

@media(max-width: 992px){
  .peep-left {
    width: 100%;
  }
  .peep-right {
    width: 100%;
  }
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
  position: absolute; bottom: 130px;
  width: calc(100% - 24px);
  
}
@media(max-width: 500px){
  #threeHalf h1 {font-size: 18px;}
  #threeHalf span {font-size: 18px;}
}


/*.progress-container .progress-bar svg {
  border-radius: 5px;
}*/

.current-goal {
  position: absolute;
  bottom: 90px;
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
  width: 30px;
  -webkit-transition: width 0.25s;
  transition: width 0.25s;
}

span {
  font-size: 22px;
}

input:focus {
  outline: none;
}

.loader {
    /*border: 10px solid #black;*/
    border-top: 10px solid #fca4e0;
    border-right: 10px solid #fca4e0;
    border-bottom: 10px solid #fca4e0;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    -webkit-animation: spin-data-v-54d3a52e 2s linear infinite;
    animation: spin-data-v-54d3a52e 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (min-width: 992px){
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}

/*body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #292929;
}*/
body .leftEye,
body .rightEye {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fca4e0;
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
          animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
body .rightEye {
  -webkit-animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
          animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
body .mouth {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1.3px #fca4e0;
  border-right: solid 1.3px rgba(223,223,194,0);
  border-left: solid 1.3px rgba(223,223,194,0);
  border-bottom: solid 1.3px rgba(223,223,194,0);
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(360deg);
          transform: translate(-50%, -50%) rotate(360deg);
  -webkit-animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
          animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
@-webkit-keyframes mouthAnimation {
  0% {
    -webkit-transform: translate(-50%, -50%) rotateX(180deg);
            transform: translate(-50%, -50%) rotateX(180deg);
  }
  10% {
    -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
            transform: translate(-50%, -50%) rotateZ(360deg);
  }
  40% {
    -webkit-transform: translate(-50%, -50%) rotateZ(320deg);
            transform: translate(-50%, -50%) rotateZ(320deg);
  }
  60% {
    -webkit-transform: translate(-50%, -50%) rotateZ(900deg);
            transform: translate(-50%, -50%) rotateZ(900deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotateZ(900deg);
            transform: translate(-50%, -50%) rotateZ(900deg);
  }
}
@keyframes mouthAnimation {
  0% {
    -webkit-transform: translate(-50%, -50%) rotateX(180deg);
            transform: translate(-50%, -50%) rotateX(180deg);
  }
  10% {
    -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
            transform: translate(-50%, -50%) rotateZ(360deg);
  }
  40% {
    -webkit-transform: translate(-50%, -50%) rotateZ(320deg);
            transform: translate(-50%, -50%) rotateZ(320deg);
  }
  60% {
    -webkit-transform: translate(-50%, -50%) rotateZ(900deg);
            transform: translate(-50%, -50%) rotateZ(900deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotateZ(900deg);
            transform: translate(-50%, -50%) rotateZ(900deg);
  }
}
@-webkit-keyframes leftEyeAnimation {
  0% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  50% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  60% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(-150%, -50%);
            transform: translate(-150%, -50%);
  }
  90% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(-150%, -50%);
            transform: translate(-150%, -50%);
  }
  100% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
}
@keyframes leftEyeAnimation {
  0% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  50% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  60% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(-150%, -50%);
            transform: translate(-150%, -50%);
  }
  90% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(-150%, -50%);
            transform: translate(-150%, -50%);
  }
  100% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
}
@-webkit-keyframes rightEyeAnimation {
  0% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  50% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  60% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  70% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  75% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  80% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  90% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  100% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
}
@keyframes rightEyeAnimation {
  0% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  50% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  60% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  70% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  75% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  80% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  90% {
    width: 4px;
    height: 4px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  100% {
    width: 10px;
    height: 10px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
}

</style>
