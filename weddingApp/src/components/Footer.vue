<template>
  <div id="five" class="footer">
    <router-link to="/stream"><h1>View Live Stream</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'aFooter',
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
  color: #fca4e0;
}

div.footer {
  height: 200px;
  width: 100%;
  background-color: #121327;
  position: relative;
  display: inline-block;
  bottom: 0;
  left: 0;
}
</style>