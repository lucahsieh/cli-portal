<template>
  <div class="root">
    <cli-progressbar v-bind:currentIndx="2"></cli-progressbar>
    <cli-typography text="文件上傳" class="mb-4"></cli-typography>

    <div class="grid-container">
      <b-container>
        <b-row>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="彩色身分證/居留證(正面)*"
                :mandatory="true"
              ></cli-fileuploader>
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="彩色最高/同等學歷證明*"
                :mandatory="true"
              ></cli-fileuploader>
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="彩色國外學歷認證文件"
                :mandatory="false"
              ></cli-fileuploader>
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="姓名變更證明文件"
                :mandatory="false"
              ></cli-fileuploader>
            </div>
          </b-col>

          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="壽險公會優惠報名申請書*"
                :mandatory="true"
              ></cli-fileuploader>
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="壽險公會優惠報名證明文件*"
                :mandatory="true"
              ></cli-fileuploader>
            </div>
          </b-col>
          <b-col cols="12" md="4" sm="6" lg="3">
            <div class="group">
              <cli-fileuploader
                title="特殊試場申請書"
                :mandatory="false"
              ></cli-fileuploader>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="btn-group">
      <b-button class="action-btn shadow red" variant="white">
        上一步
      </b-button>
      <!-- use secondary when button is enabled -->
      <b-button class="action-btn shadow" variant="light" disabled>
        文件上傳
      </b-button>
    </div>
  </div>
</template>

<script>
import CliTypography from "../components/CliTypography.vue";
import CliProgressBar from "../components/CliProgressBar.vue";
import CliFileUploader from "../components/CliFileUploader.vue";

export default {
  name: "RegistrationView",
  components: {
    "cli-typography": CliTypography,
    "cli-progressbar": CliProgressBar,
    "cli-fileuploader": CliFileUploader,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  font-size: 14px;
}
.root {
  padding: 0 16px;
  height: 90vh;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grid-container {
  max-width: 960px;
}
.group {
  text-align: left;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.group small {
  font-size: 9px;
}
.action-btn {
  width: 160px;
  height: 46px;
  margin: 5px;
}
.btn-group {
  display: flex;
  margin-top: 55px;
  height: 820px;
  padding-bottom: 80px;
}
.red {
  color: #d81800;
}
</style>
