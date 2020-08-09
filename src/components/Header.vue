<template>
  <div class="header" v-show="isShow">
    <div id="logo" class="headerLogo">
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1035 1024"
          width="30"
          height="30"
          class="logoSvg"
        >
          <path :key="index" v-for="(item,index) in this.WEB_LOGO.q" :d="item" fill="red" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1035 1024"
          width="30"
          height="30"
          class="logoSvg"
        >
          <path :key="index" v-for="(item,index) in this.WEB_LOGO.s" :d="item" fill="red" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1035 1024"
          width="30"
          height="30"
          class="logoSvg"
        >
          <path :key="index" v-for="(item,index) in this.WEB_LOGO.s" :d="item" fill="red" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1035 1024"
          width="30"
          height="30"
          class="logoSvg"
        >
          <path :d="this.WEB_LOGO.n" fill="red" />
        </svg>
      </a>
    </div>
    <div class="headerNav">
      <ul class="navMenu">
        <li
          :class="['navItem',{'navItemSelected':activePath.indexOf(item.path) > -1}]"
          @click="itemClick(item)"
          v-for="item in navItems"
          :key="item.id"
        >
          <i :class="['fa', item.icon]"></i>
          <span class="navItemText">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import actionNames from "../const/actionNames";
import { WEB_LOGO } from "../const/logoConst";
export default {
  computed: {
    navItems() {
      return this.$store.state.navigation.navItems || [];
    },
    activePath() {
      return this.$route.path;
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    itemClick({ path }) {
      if (this.activePath.indexOf(path) > -1) {
        return;
      }
      this.$router.push({ path: path });
    }
  },
  beforeCreate() {
    this.WEB_LOGO = WEB_LOGO;
  }
};
</script>

<style lang='less'>
.header {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  margin-bottom: 0.625rem;
  //background: #fff;
  .headerLogo {
    display: flex;
    align-items: center;
  }
  // .logoSvg {
  //   height: 1.5rem;
  // }
  .navMenu {
    line-height: 2rem;
    white-space: nowrap;
    box-sizing: border-box;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.65);
    list-style: none;
    outline: none;
    /* box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    */
  }
  .headerNav {
    display: flex;
  }
  .navMenu {
    @hor-ul();
    .navItem {
      display: inline-flex;
      padding: 0 1rem;
      align-items: center;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        border-radius 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:not(.navItemSelected):hover {
        color: @main-color;
      }
      .navItemText {
        margin-left: 0.5rem;
      }
    }

    .navItemSelected {
      color: @main-color;
      background: @main-light-color;
      border-radius: 1.25rem;
    }
  }
}
</style>