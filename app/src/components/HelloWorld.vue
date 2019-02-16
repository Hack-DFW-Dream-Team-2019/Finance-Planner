<template>
  <div>
    <p>Hello</p><p>{{ this.random }}</p>
    <button v-on:click="randomfunction()" >click</button>
    <exm></exm>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  components: {
    'exm' : example
  },
  data: function() {
    return{
        random: 0
    }
  },
  methods: {
    randomfunction: function(){
      this.random = this.random + 1;
    }
  },
  computed:{
    random: function(){
      return 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
