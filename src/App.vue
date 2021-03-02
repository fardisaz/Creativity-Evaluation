<template>
  <div id="app">
    <evaluation></evaluation>
  </div>
</template>

<script>
import Evaluation from "./pages/Evaluation.vue";
export default {
  name: "app",
  components: { Evaluation },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, Arial;
  background-color: rgb(234, 206, 245);
}
</style>
