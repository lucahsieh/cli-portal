<template>
  <div id="app">
    <div id="header" class="shadow">
      <div><img src="@/assets/chinalife_logo.svg?data" /></div>
      <h6 class="nav-title">業務資格測驗報名</h6>
    </div>
    <b-container class="bv-example-row">
      <b-row> </b-row>
      <b-row>
        <b-col>
          <nav>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
          </nav>
          <router-view
        /></b-col>
      </b-row>
    </b-container>
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
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  padding: 16px 36px;
  // box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 25%);
  z-index: 100;
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

.fixed-full-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 95vh;
  padding: 36px 36px;
}
.flex-v-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-v-center {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.input-label {
  font-size: 16px;
  font-weight: 400;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
