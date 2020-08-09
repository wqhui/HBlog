<template>
  <div class="slider-box mimicry-box">
    <MasterInfo/>
    <div class="split-line" />
    <BlogInfo/>
    <div v-if="isShowDirectory" class="split-line" />
    <Directory v-if="isShowDirectory" />
  </div>
</template>

<script>
import MasterInfo from './MasterInfo'
import BlogInfo from './BlogInfo'
import Directory from "./Directory";

export default {
  components: {
    MasterInfo,
    BlogInfo,
    Directory
  },
  computed:{
    isShowDirectory(){     
      return !!(this.$route.path.indexOf('/article/')>-1)
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.slider-box {
  // position: fixed;
  // z-index: 999;
  // top: 90px;
  // right: 15px;
  display: flex;
  flex-direction: column;
  align-self: self-start;
  flex-shrink: 0;
  .split-line {
    border-top: 1px solid @minor-bg-color;
    align-self: center;
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 200px;
  }
  @media (min-width: 761px) {
    width: 201px;
  }
  @media (min-width: 960px) {
    width: 250px;
  }
}
</style>