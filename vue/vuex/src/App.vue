<template>
  <div id="app">
      <button
        v-on:click="$store.commit('increment', 10)"
      >증가</button>
      <button
        v-on:click="$store.commit('decrement')"
      >감소</button>
      <p>{{ count }} </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count; // store count의 상태값
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
