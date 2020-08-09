<template>
  <div class="main-container" ref="mainContainer">
    <Header />
    <div class="main-inner">
      <router-view></router-view>
      <SideBar />
    </div>
    <Footer />
    <Tray v-show="isShowTray" />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import Tray from "./WebTray";
import SideBar from "./sideBar/SideBar";

import { debounce } from "../util";
export default {
  components: {
    Footer,
    Header,
    Tray,
    SideBar
  },
  data() {
    return {
      isShowTray: false
    };
  },
  methods: {
    scrollHandle(e) {
      const isOut = e.target.scrollTop > 100;
      if (isOut) {
        this.isShowTray = true
      } else {
        this.isShowTray = false
      }
    }
  },
  mounted() {
    const el = this.$refs.mainContainer;
    this.srcollFn = debounce(this.scrollHandle, 300);
    el && el.addEventListener("scroll", this.srcollFn);
  },
  destroyed(){
    const el = this.$refs.mainContainer;
    el && el.removeEventListener("scroll", this.srcollFn);
  }
};
</script>

<style lang='less'>
.main-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 1px;
  overflow: auto;
  /* border-radius: 20px;
        box-shadow: #888888 0px 0px 10px;
               */
  .main-inner {
    margin: 0 auto;
    display: flex;
    flex-grow: 1;
    .inner-content-box {
      flex-grow: 1;
      padding: 0.75rem;
      margin-right: 0.625rem;
    }
    @media (max-width: 720px) {
      margin: 0 5px;
    }
    @media (min-width: 721px) {
      width: 680px;
    }
    @media (min-width: 761px) {
      width: 720px;
    }
    @media (min-width: 960px) {
      width: 850px;
    }
    @media (min-width: 1200px) {
      width: 960px;
    }
    @media (min-width: 1400px) {
      width: 1080px;
    }
  }
}
</style>