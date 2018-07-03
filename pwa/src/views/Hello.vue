<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="Vue.js PWA" width="100" height="100">
    <h1>{{ msg }}</h1>
    <router-link to="/stats" tag="button" class="btn-router" aria-label="stats">Show me statistics</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}

.btn-router {
  background-color: #fff;
  font-size: 16px;
  word-spacing: 1px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495E; /* #3b8070; */
  color: #35495E; /* #3b8070; */
  text-decoration: none;
  padding: 10px 30px;
}

.btn-router:hover {
  color: #fff;
  background-color: #35495E; /* #3b8070; */
}
</style>
