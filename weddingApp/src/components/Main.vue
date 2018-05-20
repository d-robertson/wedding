<template>
  <div class="main">
    <aHeader></aHeader>
    <div class="container">
      <div class="row">
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
      <div class="row">
        <div class="right image">
          <img src="../assets/112blue.jpg">
        </div>
        <div class="left text">
          
        </div>
      </div>
      <div class="row">
        <div class="left image">
          <img src="../assets/8640blue.jpg">
        </div>
        <div class="right text">
          
        </div>
      </div>
      <div class="row">
        <div class="right image">
          <h1>static google image for restaraunt location</h1>
        </div>
        <div class="left text">
          
        </div>
      </div>
    </div>
    <aFooter></aFooter>
  </div>
</template>

<script>
import aHeader from '@/components/Header'
import aFooter from '@/components/Footer'
export default {
  name: 'Main',
  components: {aHeader,aFooter},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  color: #42b983;
}
div.main {
  background: #1a1927;
  /*background: #d9d8d7;*/
}

div.container {
  max-width: 1200px;
  margin: auto;
}

div.row {
  /*height: 100vh;*/
  width: 100%;
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
