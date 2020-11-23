<template>
  <div id="app" :style="{ backgroundColor: backgroundColor}">
    <HelloWorld @setBackgroundColor="setBackgroundColor" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      backgroundColor: "#ffffff"
    };
  },
  methods: {
    setBackgroundColor(code) {
      this.backgroundColor = code;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100%;
}

html, body { height: 100%; }

</style>
