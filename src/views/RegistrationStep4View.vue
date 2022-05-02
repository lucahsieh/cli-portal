<template>
  <div class="root">
    <cli-progressbar v-bind:currentIndx="3"></cli-progressbar>
    <!-- <cli-typography text="資料確認" class="mb-4"></cli-typography> -->
    <b-img src="@/assets/cloud_check.svg" fluid alt="中國人壽" />
    <h6 class="mb-4">報名資料已送出</h6>
    <b-container class="max-form-width">
      <b-row>
        <b-col cols="12" md="3">
          <div class="group">
            <label>報考測驗日期</label>
            <b-form-input placeholder="2022/02/12" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>測驗考區</label>
            <b-form-input placeholder="台北" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>報考科目</label>
            <b-form-input
              placeholder="專業科目、共同科目"
              disabled
            ></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>報考學歷</label>
            <b-form-input placeholder="大學" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>身分證/居留證字號</label>
            <b-form-input placeholder="A223456789" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>出生年月日</label>
            <b-form-input placeholder="1992/10/22" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>聯絡電話</label>
            <b-form-input placeholder="0912345678" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="3">
          <div class="group">
            <label>申請優惠報名</label>
            <b-form-input
              placeholder="是(須填申請書及檢附文件)"
              disabled
            ></b-form-input>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <div class="group">
            <label>姓名</label>
            <b-form-input placeholder="張曉美" disabled></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="group">
            <label>Email</label>
            <b-form-input
              placeholder="a0923456789@gmail.com"
              disabled
            ></b-form-input>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="12">
          <div class="group">
            <label>已上傳文件</label>
            <div class="list-box uploaded-file-list">
              <p>
                <b-icon icon="file-earmark" class="mr-2"></b-icon
                >彩色身分證/居留證（正面）
              </p>
              <p>
                <b-icon icon="file-earmark" class="mr-2"></b-icon
                >彩色最高/同等學歷證明
              </p>
              <p>
                <b-icon icon="file-earmark" class="mr-2"></b-icon
                >壽險公會優惠報名申請書
              </p>
              <p>
                <b-icon icon="file-earmark" class="mr-2"></b-icon
                >壽險公會優惠報名證明文件
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="btn-group" v-if="!showPaymentInfo">
      <div>
        <b-button class="action-btn shadow red" variant="white">
          上一步
        </b-button>
        <b-button
          class="action-btn shadow submit"
          v-on:click="showPaymentInfo = true"
        >
          送出資料並取得繳費資訊
        </b-button>
      </div>
    </div>

    <div class="payment-info-container">
      <p class="payment-notice red" v-if="showPaymentInfo">
        報名資料已送出，繳費資訊如下，請儘速於期限前繳交報名費。
      </p>
      <div class="pb-5" v-if="showPaymentInfo">
        <cli-typography text="繳費資訊" class="mb-4"></cli-typography>
        <b-container class="max-form-width">
          <b-row>
            <b-col cols="12" md="6">
              <div class="group">
                <label>繳款金額</label>
                <b-form-input placeholder="$550 元" disabled></b-form-input>
              </div>
            </b-col>

            <b-col cols="12" md="6">
              <div class="group">
                <label>繳款金額</label>
                <b-form-input placeholder="2022/03/20" disabled></b-form-input>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="6">
              <div class="group">
                <label>銀行代碼</label>
                <b-form-input
                  placeholder="822 中國信託商業銀行"
                  disabled
                ></b-form-input>
              </div>
            </b-col>

            <b-col cols="12" md="6">
              <div class="group">
                <label>銀行帳號</label>
                <b-form-input
                  placeholder="0000 1234 2345 3456"
                  disabled
                ></b-form-input>
                <b-link href="#foo" class="copy-acct-num">複製帳號</b-link>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="12">
              <div class="group mb-2">
                <div class="list-box payment-alert-list">
                  <p class="red m payment-alert-title">
                    <b-img
                      src="@/assets/bell_icon.svg"
                      fluid
                      alt="bell"
                      class="bell-icon"
                    />注意事項
                  </p>
                  <ol>
                    <li>請使用網路銀行或實體ATM將金額轉入以上帳號。</li>
                    <li>請務必於期限內將款項匯入此帳號內。</li>
                    <li>若轉帳後24小時仍未收到入帳通知，請與我們聯繫查詢。</li>
                    <li>
                      安全提醒：若第三方對您提出以下要求，請勿直接遵照他方指示。如：第三方要求您轉帳至私人帳號、在ATM解除分期付款、掃描QR-Code進入非中國人壽網站或提前要求您按下完成等。
                    </li>
                  </ol>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!-- <p class="payment-notice red mb-6" v-if="showPaymentInfo">
          若尚未繳交報名費請於繳款期限前繳交
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import CliTypography from "../components/CliTypography.vue";
import CliProgressBar from "../components/CliProgressBar.vue";
// import BellIcon from "../assets/bell_icon.svg";

export default {
  name: "RegistrationView",
  components: {
    "cli-typography": CliTypography,
    "cli-progressbar": CliProgressBar,
    // "bell-svg": BellIcon,
  },
  data() {
    return {
      showPaymentInfo: false,
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
.list-box {
  width: 100%;
  background-color: #e9ecef;
  font-size: 16px;
  padding: 16px;
  display: flex;
  color: #6c757d;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
}
.uploaded-file-list {
}
.uploaded-file-list p {
  margin-bottom: 2px;
}
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 55px;
  height: 820px;
  padding-bottom: 80px;
  width: 50vw;
}
.action-btn {
  width: 160px;
  height: 46px;
  margin: 5px;
  border-radius: 0.25rem !important;
  font-size: 16px;
}
.submit {
  width: 220px;
}
.red {
  color: #d81800;
}
.payment-notice {
  padding: 0;
  margin-top: 36px;
  margin-bottom: 36px;
}
.payment-info-container {
  width: 100%;
}
.max-form-width {
  max-width: 1060px;
}
.payment-alert-title {
  margin-bottom: 12px;
}
.payment-alert-list {
  color: black;
}
.payment-alert-list ol {
  margin-bottom: 0;
  padding: 0px 16px;
}
.copy-acct-num {
  color: #0d6efd;
  font-size: 12.8px;
  margin-top: 4px;
}
.bell-icon {
  height: 16px;
  width: 16px;
  margin-right: 4px;
}
</style>
