<template>
  <div class="home flex-v-center fixed-full-page">
    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
    <b-form v-if="show">
      <cli-typography text="登入中壽業務員資格測驗報名"></cli-typography>
      <div class="input-group">
        <label for="input-1">身分證字號/居留證字號</label>
        <div class="flex-h input-sub-group">
          <b-form-input
            id="input-1"
            v-model="form.personalId"
            type="text"
            placeholder="請輸入身分證字號/居留證字號"
            required
            var
            class="input"
          ></b-form-input>
          <b-button
            v-if="verifiedPID === 'pending'"
            v-bind:disabled="!form.personalId"
            v-bind:variant="!form.personalId ? 'light' : 'outline-secondary'"
            class="input-check-btn"
            v-on:click="verifiedPID = form.personalId"
            >資格審核</b-button
          >
          <div
            class="input-check-result pass ml-3"
            v-if="verifiedPID === 'pass'"
          >
            <b-icon
              icon="check2"
              variant="success"
              class="input-check-result-icon"
            ></b-icon>
            資格符合
          </div>
          <div
            class="input-check-result danger ml-3"
            v-if="verifiedPID === 'error'"
          >
            <b-icon
              icon="x"
              variant="danger"
              class="input-check-result-icon"
            ></b-icon
            >資格不符
          </div>
        </div>
        <small v-if="verifiedPID === 'error'" class="danger mt-1"
          >請先完成完成公會考照班，如有問題請洽業務主管，謝謝！</small
        >
      </div>

      <div class="input-group">
        <label for="input-2">手機號碼</label>
        <div class="flex-h input-sub-group">
          <b-form-input
            id="input-2"
            v-model="form.cellNum"
            type="text"
            placeholder="請輸入手機號碼"
            required
            class="input"
          ></b-form-input>
          <b-button
            class="input-check-btn"
            v-if="verifiedCNum !== 'sent'"
            v-bind:disabled="!form.cellNum"
            v-bind:variant="!form.cellNum ? 'light' : 'outline-secondary'"
            v-on:click="handleSendOTP"
            >發送OTP</b-button
          >
          <b-button
            class="input-check-btn p-0"
            v-if="verifiedCNum === 'sent'"
            v-bind:disabled="timer > 0"
            v-bind:variant="timer <= 0 ? 'outline-secondary' : 'light'"
            v-on:click="verifiedCNum = 'sent'"
            >重新發送OTP</b-button
          >
        </div>
        <small v-if="verifiedCNum === 'sent'" class="danger mt-1">{{
          "00:" + timer
        }}</small>
      </div>

      <div class="input-group">
        <label for="input-2">OTP驗證碼</label>
        <div class="flex-h input-sub-group">
          <b-form-input
            id="input-2"
            v-model="form.cellNum"
            type="text"
            placeholder="請輸入OTP驗證碼"
            required
            class="input"
          ></b-form-input>
        </div>
      </div>

      <b-button type="submit" variant="secondary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import CliTypography from "@/components/CliTypography.vue";

export default {
  name: "HomeView",
  components: { "cli-typography": CliTypography },
  data() {
    return {
      form: {
        personalId: "",
        cellNum: "",
        otpCode: null,
      },
      // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      verifiedPID: "pending", //pending,error,pass
      verifiedCNum: "sent", // pending,sent
      timer: 0,
    };
  },
  methods: {
    handleSendOTP: () => {
      console.log("abac");
      self.timer = 0;
      self.verifiedCNum = "sent";
    },
    handleReSendOTP: () => {
      this.timer = 20;
    },
  },
};
</script>

<style scoped>
.flex-h {
  display: flex;
}
.flex-v {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 90vw;
  max-width: 540px;
}
.input-sub-group {
  width: 90vw;
  max-width: 540px;
}
.input {
  height: 36px;
  max-width: 420px;
}
.input-check-btn {
  height: 36px;
  width: 104px;
  min-width: 104px;
  margin-left: 16px;
}
.input-check-result {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 104px;
  min-width: 104px;
}
.input-check-result {
  font-size: 0.875rem;
  color: blue;
}
.pass {
  color: var(--success);
}
.danger {
  color: var(--danger);
}
.input-check-result-icon {
  font-size: 1.7rem;
  margin-right: 4px;
  /* font */
}
</style>
