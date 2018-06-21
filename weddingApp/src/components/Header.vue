<template>
  <div class="header">
    <div class="scrollLink">
      <router-link to="/stream"><h1>View Live Stream</h1></router-link>
    </div>
    <div class="titles">
      <h2>Tara & Derek's</h2>
      <h1>Happy Wedding Day</h1>
    </div>
    <div class="arrow-img">
      <img src="../assets/arrowwhite.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'aHeader',
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
  color: #f2f2f2;
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

div.header {
  width: 100%;
  height: 100vh;
  /*background-image: url('');*/
  background-color: #121327;
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
}

div.header .scrollLink{
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  /*max-width: 320px;*/
  height: 40px;
  z-index: 1;
  color: #fca4e0;
  background-color: #121327;
}

div.header .scrollLink a h1 {
  color: #fca4e0;
  font-size: 22px;
  margin: 5px;
}



div.titles {
  margin-top: 200px;
}

div.arrow-img {
  /*height: auto;*/
  /*width: auto;*/
  /*background-image: url('../assets/arrow.png');*/
    position: absolute;
    left: 0;
    right: 0;
    top: 156px;
    margin-right: 24px;

}

div.arrow-img img {
  width: 100%;
  max-width: 500px;
}

@media (min-width: 992px){
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
  div.arrow-img {
    top: 124px;
  }
}
</style>