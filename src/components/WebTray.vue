<template>
  <div class="tray-box">
    <!-- <div class="web-info" @click="webInfoClick">
      <i class="bar-line-icon bar-icon-1"></i>
      <i class="bar-line-icon bar-icon-2"></i>
      <i class="bar-line-icon bar-icon-3"></i>
    </div>-->
    <div class="backup-box" @click="backup">
      <i class="fa fa-angle-up" title="返回顶部"></i>
    </div>
  </div>
</template>

<script>
import {scrollToTop} from '../util'
export default {
  methods: {
    webInfoClick() {
      console.log("click");
    },
    backup() {
      const pDom = this.$parent.$refs.mainContainer;
      scrollToTop(pDom)
    }
  }
};
</script>

<style lang='less'>
.tray-box {
  position: fixed;
  z-index: 1050;
  right: 50px;
  bottom: 100px;
  .web-info {
    display: flex;
    display: flex;
    flex-direction: column;
    background: @main-light-color;
    padding: 0.325rem 0.625rem;
    justify-content: space-around;
    height: 1.25rem;
    .bar-line-icon {
      height: 3px;
      width: 1.25rem;
      background: @main-color;
    }
    &:hover {
      cursor: pointer;
      // opacity: 0;
      .bar-icon-1 {
        animation: icon1move 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-fill-mode: forwards;
      }
      .bar-icon-3 {
        animation: icon2move 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-fill-mode: forwards;
      }
    }
    @keyframes icon1move {
      0% {
        position: relative;
        width: 95%;
        transform: rotateZ(-5deg);
      }
      35% {
        position: relative;
        width: 80%;
        transform: rotateZ(-15deg);
      }
      68% {
        position: relative;
        width: 60%;
        top: 1px;
        transform: rotateZ(-30deg);
      }
      100% {
        position: relative;
        width: 50%;
        top: 2.5px;
        transform: rotateZ(-45deg);
      }
    }
    @keyframes icon2move {
      0% {
        position: relative;
        width: 95%;
        transform: rotateZ(5deg);
      }
      35% {
        position: relative;
        top: -1px;
        width: 80%;
        transform: rotateZ(15deg);
      }
      68% {
        position: relative;
        width: 60%;
        top: -2px;
        transform: rotateZ(30deg);
      }
      100% {
        position: relative;
        width: 50%;
        top: -2.5px;
        transform: rotateZ(45deg);
      }
    }
  }
  .backup-box {
    font-size: 1.5rem;
    padding: 0.25rem 0.75rem;
    color: @main-deep-color;
    background: @main-light-color;
    &:hover {
      cursor: pointer;
      color: @main-color;
    }
  }
}
</style>