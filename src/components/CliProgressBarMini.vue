<template>
  <div class="container">
    <div
      v-for="n in totalStep"
      :key="n"
      class="bar"
      v-bind:class="{ 'bar-active': n - 1 <= currentIndx }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["currentIndx", "totalStep"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.bar {
  width: 20vw;
  min-width: 98px;
  max-width: 198px;
  height: 6px;
  border-radius: 5px;
  background-color: #ced4da;
  margin: 4px;
}
.bar-active {
  background-color: #ff7362;
}
</style>
