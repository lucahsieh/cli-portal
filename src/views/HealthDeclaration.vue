<template>
  <div class="content">
    <h5 class="mb-4 health-declaration-title">健康聲明書</h5>
    <h6>請確實填寫以下問題</h6>
    <p>1. 最近21天內您是否有出入境史(含隔離檢疫及自主健康管理期間)？*</p>
    <div>
      <b-form-checkbox name="checkbox-1" class="checkbox indent">
        <span class="minor-fix-shiting">
          是，
          <div class="inline-block">
            請列出出入境日期：<b-form-input
              v-model="text"
              class="input-box"
              size="sm"
            ></b-form-input>
          </div>
          <div class="inline-block">
            <span class="ml-2"> 國家：</span
            ><b-form-input
              v-model="text"
              class="input-box"
              size="sm"
            ></b-form-input>
          </div>
        </span>
      </b-form-checkbox>
    </div>
    <b-form-checkbox name="checkbox-2" class="checkbox indent"
      >否</b-form-checkbox
    >
    <p>2. 過去14天內是否去過以下地方？*</p>
    <b-form-checkbox name="checkbox-2a" class="checkbox indent">
      <span class="minor-fix-shiting">
        外縣市：<b-form-input size="sm" v-model="text" class="input-box" var>
        </b-form-input>
      </span>
    </b-form-checkbox>
    <b-form-checkbox name="checkbox-2b" class="checkbox indent">
      <span class="minor-fix-shiting">
        市場/賣場：<b-form-input size="sm" v-model="text" class="input-box">
        </b-form-input>
      </span>
    </b-form-checkbox>
    <p>
      3.
      過去14天內是否有發燒、咳嗽、呼吸急促、嗅味覺異常或不明原因腹瀉症狀？*(已服藥者須勾選「是」)
    </p>
    <b-form-checkbox name="checkbox-3a" class="checkbox indent"
      >是：
      <span class="ml-2 inline-block" v-for="sym of symptoms" :key="sym"
        ><b-form-checkbox name="checkbox-3aa" class="checkbox">{{
          sym
        }}</b-form-checkbox></span
      >
    </b-form-checkbox>
    <b-form-checkbox name="checkbox-3b" class="checkbox indent"
      >否
    </b-form-checkbox>
    <p>
      4. 最近14天內是否有因 Covid-19
      播衛生主管機個列為「具感染風險民政追蹤管理機制」中之「自主健康管理者」？
    </p>
    <b-form-checkbox name="checkbox-4" class="checkbox indent"
      >是：<b-form-checkbox
        name="checkbox-4aa"
        class="checkbox ml-2 inline-block"
        >已就醫採檢中，尚未接獲檢驗結果</b-form-checkbox
      >
      <b-form-checkbox name="checkbox-4ab" class="checkbox ml-2 inline-block"
        >就醫檢驗後檢驗為合格(陰性)</b-form-checkbox
      >
    </b-form-checkbox>

    <b-form-checkbox name="checkbox-4b" class="checkbox indent"
      >否
    </b-form-checkbox>
    <p>5. 最近14天內，您與您的同住親友是否曾與Covid-19確診病例有接觸？</p>
    <b-form-checkbox name="checkbox-5a" class="checkbox indent"
      >是</b-form-checkbox
    >
    <b-form-checkbox name="checkbox-5b" class="checkbox indent"
      >否</b-form-checkbox
    >
    <p>6. 最近14天內，您與您的同住親友是否曾與Covid-19確診病例有接觸？</p>
    <b-form-checkbox name="checkbox-6a" class="checkbox indent"
      >是</b-form-checkbox
    >
    <b-form-checkbox name="checkbox-6b" class="checkbox indent"
      >否</b-form-checkbox
    >
    <p class="warning">
      考生聲明<br />
      上述所填資料皆為正確，本人前來中國人壽參加人身保險業務員各項資格測驗考試，於考試日之14天非屬衛生福利部需「居家隔離」、「居家檢疫」及「居家檢疫及自主健康管理者於就醫採檢尚未接獲檢驗結果之個案」之對象，且如屬「具感染風險民眾追蹤管理機制」中之「自主健康管理者」，亦應於考試前通報中國人壽，倘有隱匿或不時，本人已知悉係考生本人自負相關法律上責任。
    </p>
  </div>
</template>

<script>
export default {
  name: "HealthDeclaration",
  components: {},
  data() {
    return {
      symptoms: [
        "發燒",
        "咳嗽",
        "流鼻涕/鼻塞",
        "呼吸急促",
        "嗅、味覺異常 ",
        "不明原因腹瀉",
        "全身倦怠",
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-size: 14px;
}
.health-declaration-title {
  font-size: 16px;
}
.content {
  text-align: left;
}
.content p {
  margin: 10px 0px;
}
.checkbox {
  margin: 0px;
  padding-top: 1.5px;
}
.indent {
  margin-left: 16px;
}
.input-box {
  display: inline-block;
  max-width: 122px;
  margin: 2px 0px;
}
.inline-block {
  display: inline-block;
}
.minor-fix-shiting {
  margin: 0;
  position: relative;
  top: -5px;
}
.inline-block {
  display: inline-block;
}
.warning {
  color: #d81800;
}
</style>
