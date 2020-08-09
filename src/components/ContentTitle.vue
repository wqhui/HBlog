<template>
  <div class="content-title-box">
    <h2
      class="content-title"
      v-show="title!=''"
      :style="{marginBottom:subTitle!=''?'0.5rem':''}"
    >{{title}}</h2>
    <div class="content-sub-title" v-show="subTitle!=''||subTitle!=undefined">{{subTitle}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true
    },
    subTitle: {
      require: true
    }
  }
};
</script>

<style lang="less">
.content-title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-title {
    margin: 1rem 0 0;
  }
  .content-sub-title {
    margin: 0.5rem 0;
    color: @minor-font-color;
  }
}
</style>