<template>
  <div class="flex-v-center">
    <h4 class="">{{ text }}</h4>
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  props: ["text", "font-size"],
};
</script>

<style scoped>
.underline {
  height: 4px;
  width: 35px;
  background-color: #d81800;
  margin-bottom: 40px;
}
/* font size: 14px */
</style>
