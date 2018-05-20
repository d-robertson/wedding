<template>
  <div class="header">
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
  color: #42b983;
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
    top: 124px;
    margin-right: 24px;

}

div.arrow-img img {
  width: 100%;
  max-width: 500px;
}
</style>