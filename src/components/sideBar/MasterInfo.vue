<template>
  <div class="master-box">
    <img class="master-pic" src="../../assets/img/master.png" @click="onClick" />
    <h3 class="nick-name" @click="onClick">{{masterInfo.nickName}}</h3>
    <div class="motto">{{masterInfo.motto}}</div>
    <div class="master-box-links">
      <a
        v-for="item in masterInfo.links"
        :key="item.title"
        :title="item.title"
        :class="['master-box-links-item']"
        :href="item.link"
        target="_blank"
      >
        <svg
          t="1588677798038"
          class="icon"
          viewBox="0 0 1141 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <path :d="LOGO_PATH[item.name]" :fill="item.color || LOGO_COLOR[item.name]|| '#5B5C5C'" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { LOGO_PATH, LOGO_COLOR } from "../../const/logoConst";
import { ROUTER_NAMES } from "../../const/routerConst";
export default {
  data() {
    return {
      masterInfo: {
        pic: "../../assets/img/master.png",
        nickName: "Qssn丶",
        motto: "相似的人，总会相逢",
        links: [
          {
            name: "GITHUB",
            link: "https://github.com/wqhui",
            title: "github"
          },
          {
            name: "CSDN",
            link: "https://blog.csdn.net/dKnightL",
            title: "CSDN"
          },
          {
            name: "ZHIHU",
            link: "https://www.zhihu.com/people/dklzhu-hui",
            title: "知乎"
          }
        ]
      },
      blogInfo: [
        {
          id: "fa-file-text",
          link: "#",
          count: 7,
          title: "日志",
          s: {
            color: "#00FFFF"
          }
        },
        {
          id: "fa-tags",
          link: "#",
          count: 6,
          title: "标签",
          s: {
            color: "#0099FF"
          }
        }
      ]
    };
  },
  methods: {
    onClick() {
      if (this.$route.path.indexOf(this.ROUTER_NAMES.ABOUT) > -1) {
        return;
      }
      this.$router.push({ path: this.ROUTER_NAMES.ABOUT });
    }
  },
  beforeCreate() {
    this.LOGO_PATH = LOGO_PATH;
    this.LOGO_COLOR = LOGO_COLOR;
    this.ROUTER_NAMES = ROUTER_NAMES;
  }
};
</script>

<style lang="less">
.master-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background: linear-gradient(180deg, @main-light-color, transparent);

  .master-pic {
    // align-self: center;
    cursor: pointer;
    width: 80px;
    border-radius: 50px;
    box-shadow: -2px 0px 5px -3px rgba(0, 0, 0, 0.06),
      /*左边阴影*/ 0px -2px 5px -3px rgba(0, 0, 0, 0.06),
      /*上边阴影*/ 0 2px 5px -1px rgba(0, 0, 0, 0.12),
      //底部阴影
        2px 0 5px -1px rgba(0, 0, 0, 0.12); //右边阴影
  }
  .nick-name {
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    @underline-hover();
  }
  .motto {
    color: @minor-font-color;
    font-size: 0.75rem;
    margin-bottom: 1px;
  }
  .master-box-links {
    display: flex;
    align-items: center;
    margin: 0.75rem 0;
    .master-box-links-item {
      padding: 0.5rem;
      height: 1.25rem;
      text-decoration: none;
      color: @main-font-color;
      &:hover {
        background: @main-light-color;
        color: @main-color;
      }
    }
  }
}
</style>