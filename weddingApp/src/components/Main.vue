<template>
  <div class="main">
    <a :href="divId" v-smooth-scroll="{ duration: 1000, offset: 0 }"><div id="mouse" class="mouse-down"></div></a> 
    <aHeader></aHeader>
    <div class="container">
      <div id="one" class="row">
        <div class="left image">
          <img src="../assets/8586blue.jpg">
        </div>
        <div class="right text">
          <h1>Our Story</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
          <h3>Impedit ducimus ipsam doloremque necessitatibus blanditiis quas tenetur, asperiores corporis? Animi nulla necessitatibus quasi, quia dignissimos commodi, soluta optio error ullam id illo dolorem explicabo, placeat facere possimus voluptatem pariatur sunt harum. Pariatur, harum repudiandae laudantium deleniti alias, beatae veritatis aspernatur. Maxime.</h3>
        </div>
      </div>
      <div id="two" class="row">
        <div class="right image">
          <img src="../assets/112blue.jpg">
        </div>
        <div class="left text">

        </div>
      </div>
      <div id="three" class="row">
        <div class="left image">
          <img src="../assets/8640blue.jpg">
        </div>
        <div class="right text">

        </div>
      </div>
      <div id="four" class="row">
        <div class="right image">
          <googleMap></googleMap>
        </div>
        <div class="left text">

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

export default {
  name: 'Main',
  components: {aHeader,aFooter,googleMap},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      divId: '#one'
    }
  },
  mounted (){
    this.$nextTick(()=>{
      var self = this;
      function offset(el) {
          var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      // var $output = $('#output');
      $(window).on('scroll', function () {
          var scrollTop     = $('body').scrollTop(),
              mouse = document.getElementById('mouse'),
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
      });
    })
  },
  watch: {

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
  color: #42b983;
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
  margin-top: -10px;
}

.left {
  width: 100%;
  min-height: 100vh;
  float: left;
  text-align: left;
  height: auto;
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

@media (min-width: 992px){
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}
</style>
