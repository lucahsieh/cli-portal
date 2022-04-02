<template>
  <div class="home flex-v-center full-page">
    <cli-progressbar></cli-progressbar>
  </div>
</template>

<script>
import CliProgressBar from "../components/CliProgressBar.vue";

export default {
  name: "HomeView",
  components: { "cli-progressbar": CliProgressBar },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
