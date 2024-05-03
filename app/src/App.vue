<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>哈希：{{ gitInfo.COMMIT_HASH }}</p>
    <p>分支：{{ gitInfo.BRANCH }}</p>
    <p>版本：{{ gitInfo.VERSION }}</p>
    <p>分支：{{ gitInfo.LASTCOMMITDATETIME }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    const gitInfo = {
      COMMIT_HASH: process.env.COMMIT_HASH,
      BRANCH: process.env.BRANCH,
      VERSION: process.env.VERSION,
      LASTCOMMITDATETIME: process.env.LASTCOMMITDATETIME,
    }
    return {
      gitInfo,
    }
  },

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
