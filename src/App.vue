<template>
  <div id="app">
    <div id="header" class="shadow-sm p-3">
      <div class="header-logo-size">
        <b-img src="@/assets/chinalife_logo_v2.svg" fluid alt="中國人壽" />
      </div>
      <h6 class="nav-title">業務資格測驗報名</h6>
    </div>

    <nav>
      <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#header {
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-title {
  margin-bottom: 0px;
}

.full-page {
  height: 85vh;
  padding: 0 16px;
}
.flex-v-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-v-center {
  top: 64px;
  position: fixed;
  display: flex;
  right: 0;
  left: 0;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.input-label {
  font-size: 16px;
  font-weight: 400;
}
.header-logo-size {
  height: 32px;
  width: 137.71px;
}
</style>
