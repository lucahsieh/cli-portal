<template>
  <div>
    <div>
      <div class="progress-container">
        <div
          v-for="(step, index) in steps"
          v-bind:key="index"
          class="progress-item-container"
        >
          <div
            class="progress-bar"
            v-bind:class="{
              'progress-container-current': currentIndx === index,
              'progress-container-completed': currentIndx > index,
            }"
          ></div>
          <div
            class="progress-item-icon small-circle"
            v-bind:class="{
              'small-circle-current': currentIndx === index,
              'small-circle-completed': index < currentIndx,
            }"
          >
            <b-icon
              v-if="index < currentIndx"
              class="check-circle"
              icon="check-circle-fill"
            ></b-icon>
          </div>

          <p class="progress-text">{{ step.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentIndx"],
  data() {
    return {
      //   currentIndx: 2,
      steps: [
        { label: "聲明事項" },
        { label: "報名填寫" },
        { label: "文件上傳" },
        { label: "確認資料\n繳費資訊" },
      ],
    };
  },
};
</script>

<style scoped>
.progress-container {
  display: flex;
  width: 100vw;
  padding: 10px 10px;
}
.progress-item-container {
  position: relative;
  width: 100%;
  min-width: 80px;
}
.progress-bar {
  position: relative;
  top: 6.7px;
  background-color: #d2daf3;
  width: 100%;
  height: 1.5px;
}
.progress-container .progress-item-container:first-child .progress-bar {
  transform: skewX(0.5);
  left: 50%;
  /* left: 50%; */
}
.progress-container .progress-item-container:last-child .progress-bar {
  transform: skewX(0.5);
  right: 50%;
  /* left: 50%; */
}
.progress-container-current {
  background: linear-gradient(to right, #ff7362 50%, #d2daf3 50%);
}
.progress-container-completed {
  background: #ff7362;
}

.progress-item-icon {
  position: relative;
  top: 2.5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.check-circle {
  width: 12px;
  height: 12px;
  top: 3px;
  position: relative;
  transform: translate(-50%, -50%);
  color: #ff7362;
}
.small-circle {
  width: 8px;
  height: 8px;
  border-radius: 12px;
  font-size: 6px;
  background-color: white;
  border: 1.5px solid white;
  box-shadow: 0px 0px 0px 1.5px #d2daf3;
}
.small-circle-current {
  background-color: #ff7362;
  border: 1.5px solid white;
  box-shadow: 0px 0px 0px 1.5px #ff7362;
}
.small-circle-completed {
  background-color: white;
  border: 1.5px solid transparent;
  box-shadow: 0px 0px 0px 0px transparent;
}
.progress-text {
  position: relative;
  top: 5px;
  font-size: 14px;
  margin: 10px;
  white-space: pre;
}
/* font size: 14px */
</style>
