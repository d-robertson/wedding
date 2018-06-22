<template>
  <div class="stream">
    <h1>Stream</h1>
    <iframe src="https://player.twitch.tv/?channel=largemoose421" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/largemoose421?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from largemoose421 on www.twitch.tv</a>
    <iframe src="https://www.twitch.tv/embed/largemoose421/chat" frameborder="0" scrolling="no" height="500" width="350"></iframe>
  </div>
</template>

<script>
export default {
  name: 'aStream',
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

div.stream{

}
</style>
