<template>
  <div class="cloud-tag-box" @click="itemClick">
    <div
      :data-name="item.name"
      :data-id="item.id"
      class="cloud-tag-item"
      :key="item.name"
      v-for="(item,index) in tags"
      :style="{ color: 'rgb('+fontColor(index)+')', fontSize:fontSize(item.count)}"
    >{{item.name }}</div>
  </div>
</template>

<script>
import { DARK_COLOR_KEYS, COLOR_OBJ, FONT_SIZE_OBJ } from "../../const"; //, fontSize
export default {
  props: ["tags"],
  methods: {
    fontColor(i) {
      const l = this.colorKeys.length;
      return i <= l
        ? this.colorObj[this.colorKeys[i]]
        : this.colorObj[this.colorKeys[Math.floor(Math.random() * l)]];
    },
    fontSize(count) {
      const levelKey = ["1.3", "1.5", "1.7", "1.9"];
      let level = parseInt(count / 5) - 1;
      return level < 0 ? "1rem" : this.fontSizeObj[levelKey[level]];
    },
    itemClick(e) {
      const dataset = e.target.dataset;
      const { name, id } = dataset;
      name && this.$emit("onTagClick", { name, id });
    }
  },
  created() {
    //将常量绑定到数据
    this.colorKeys = DARK_COLOR_KEYS;
    this.colorObj = COLOR_OBJ;
    this.fontSizeObj = FONT_SIZE_OBJ;
  }
};
</script>

<style lang="less">
.cloud-tag-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .cloud-tag-item {
    cursor: pointer;
    padding: 0.625rem;
    box-sizing: border-box;
    // border-bottom: 2px solid;
    // border-color: transparent;
    position: relative;
    @underline-hover();
  }
}
</style>