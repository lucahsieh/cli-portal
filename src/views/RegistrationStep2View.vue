<template>
  <div class="root">
    <cli-progressbar v-bind:currentIndx="1"></cli-progressbar>
    <cli-typography text="報名填寫" class="mb-4"></cli-typography>

    <div class="max-width-860">
      <b-container>
        <b-row>
          <b-col cols="12" md="4">
            <div class="group">
              <label>報考測驗日期</label>
              <b-form-input
                v-model="date"
                placeholder="2022/02/12"
                disabled
              ></b-form-input>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>測驗考區*</label>
              <b-form-select
                :options="placeOptions"
                value="taipei"
              ></b-form-select>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>申請報名優惠*</label>
              <b-form-select
                :options="booleanValue"
                value="true"
              ></b-form-select>
              <small>※具低收入戶、身心障礙或原住民身份者可申請</small>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <div class="group">
              <label>報考科目*</label>
              <b-form-select
                :options="subject"
                disabled
                value="all"
              ></b-form-select>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>報考學歷*</label>
              <b-form-select :options="degree" value="college"></b-form-select>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>應繳報名費</label>
              <b-form-input
                v-model="text"
                placeholder="$550元"
                disabled
              ></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <div class="group">
              <label>姓名*</label>
              <b-form-input v-model="text" placeholder="張曉美"></b-form-input>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>身分證/居留證號</label>
              <b-form-input
                v-model="text"
                placeholder="A223456789"
                disabled
              ></b-form-input>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="group">
              <label>聯絡電話*</label>
              <b-form-input
                v-model="text"
                placeholder="0912345678"
              ></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <div class="group">
              <label>出生年月日*</label>
              <b-form-input
                v-model="text"
                type="date"
                placeholder="1992/10/22"
              ></b-form-input>
            </div>
          </b-col>
          <b-col cols="12" md="8">
            <div class="group">
              <label>E-mail*</label>
              <b-form-input
                v-model="email"
                placeholder="a0923456789@gmail.com"
              ></b-form-input>
              <b-form-text id="input-live-help">※可收信為主</b-form-text>
            </div>
          </b-col>
          <!-- <b-col cols="12" md="4">
            <div class="group">
              <label>開班地區</label>
              <b-form-input
                v-model="text"
                placeholder="北A訓練中心"
                disabled
              ></b-form-input>
            </div>
          </b-col> -->
        </b-row>
      </b-container>
    </div>
    <div class="btn-group">
      <b-button class="action-btn shadow red" variant="white">
        上一步
      </b-button>
      <b-button class="action-btn shadow"> 下一步 </b-button>
    </div>
  </div>
</template>

<script>
import CliTypography from "../components/CliTypography.vue";
import CliProgressBar from "../components/CliProgressBar.vue";

export default {
  name: "RegistrationView",
  components: {
    "cli-typography": CliTypography,
    "cli-progressbar": CliProgressBar,
  },
  data() {
    return {
      placeOptions: [
        { value: "taipei", text: "台北" },
        { value: "tainan", text: "台南" },
      ],
      booleanValue: [
        { value: "true", text: "是(須填申請書及檢附文件)" },
        { value: "false", text: "否" },
      ],
      subject: [
        { value: "all", text: "專業科目＆共同科目" },
        { value: "other", text: "其他" },
      ],
      degree: [
        { value: "college", text: "大學" },
        { value: "highschool", text: "高中職" },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-size: 16px;
}
.root {
  padding: 0 16px;
  height: 90vh;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.group {
  text-align: left;
  margin-bottom: 12px;
}

.group small {
  font-size: 9px;
}
.action-btn {
  width: 160px;
  height: 46px;
  margin: 5px;
  border-radius: 0.25rem !important;
  font-size: 16px;
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
.max-width-860 {
  max-width: 860px;
}
</style>
