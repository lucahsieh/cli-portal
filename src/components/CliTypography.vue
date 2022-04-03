<template>
  <div class="flex">
    <h5 class="">{{ text }}</h5>
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  props: ["text", "font-size"],
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.underline {
  height: 4px;
  width: 35px;
  background-color: #d81800;
}
/* font size: 14px */
</style>
