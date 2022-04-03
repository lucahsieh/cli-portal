<template>
  <div class="uploader-container">
    <p class="title">{{ title }}</p>
    <div
      class="drop-area"
      v-bind:class="{ 'mandatory-border': mandatory }"
      v-on:click="file = file ? null : {}"
    >
      <div class="action-icon" v-if="!file">
        <div class="add-symbol"></div>
        <div class="add-symbol"></div>
      </div>
      <div class="file-preview" v-if="file">
        <b-img src="@/assets/id-sample.png" fluid alt="id" />
      </div>
      <p class="watermark" v-if="file">僅供申辦證照測驗使用</p>
      <p class="action-text" v-if="!file">點擊上傳</p>
      <p class="action-text" v-if="file">點擊重新上傳</p>
    </div>
    <div class="adoradornment">
      <p>格式：JPG、PNG</p>
      <p>查看範例<b-icon icon="question-circle" class="ig-icon"></b-icon></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "mandatory"],
  data: () => {
    return {
      //   title: "彩色身分證/居留證(正面)*",
      //   mandatory: true,
      file: null,
    };
  },
};
</script>

<style scoped>
.uploader-container {
  /* position: relative; */
  width: 220px;
}
.drop-area {
  width: 100%;
  /* width: 220px; */
  height: 136px;
  border: 2px solid #ced4da;
  background-color: #f8f9fa;
  position: relative;
}
.mandatory-border {
  border: 2px solid #ff7362;
}
.title {
  margin-bottom: 8px;
  text-align: center;
  width: 100%;
  /* width: 220px; */
}
.watermark {
  color: white;
  font-size: 12.8px;
  position: absolute;
  z-index: 200;
  top: 40%;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  /* text-shadow: 0px 0px 5px #000000; */
}
.action-text {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 5px;
  font-size: 12.8px;
}
.action-icon {
  /* font-size: 24px; */
  width: 24px;
  height: 24px;
  position: absolute;
  right: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
}
.add-symbol {
  height: 2px;
  background-color: #ced4da;
  width: 100%;
  transform-origin: center;
  position: absolute;
}
.add-symbol:first-of-type {
  transform: rotate(90deg);
}
.file-preview {
  position: absolute;
  top: 40%;
  right: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  max-width: 146px;
  max-height: 90px;
  transform-origin: center;
  transform: translate(-50%, -50%);
}
.adoradornment p {
  margin: 0;
  font-size: 11px;
}
.adoradornment {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  color: #6c757d;
  /* width: 220px; */
  width: 100%;
}
.ig-icon {
  color: #ff7362;
  margin-left: 4px;
}
</style>
