<template>
  <div class="mimicry-box inner-content-box">
    <content-title :title="title" :subTitle="subTitle" />
    <cloud-tag @onTagClick="onTagClick" :tags="tags" />
  </div>
</template>

<script>
import CloudTag from "../components/tag/CloudTag";
import ContentTitle from "../components/ContentTitle";

import { ROUTER_NAMES } from "../const/routerConst";
//import { invokeSimpleGetSrevice } from '../service/proxy'
export default {
  components: {
    "cloud-tag": CloudTag,
    "content-title": ContentTitle
  },
  methods: {
    onTagClick({ name, id }) {
      this.$router.push({
        name: this.ROUTER_NAMES.TAGS_DETAIL,
        params: { name, id }
      });
    }
  },
  computed: {
    subTitle() {
      const l = this.tags && this.tags.length;
      if (l > 0) {
        return "共计" + l + this.title;
      }
      return "";
    }
  },
  data() {
    return {
      title: "标签",
      tags: [
        { name: "javascript", url: "#", count: 3 },
        { name: "css", url: "#", count: 11 },
        { name: "vue.js", url: "#", count: 13 },
        { name: "html", url: "#", count: 14 },
        { name: "html5", url: "#", count: 14 },
        { name: "node.js", url: "#", count: 32 },
        { name: "reactjs", url: "#", count: 10 },
        { name: "jquery", url: "#", count: 8 },
        { name: "css3", url: "#", count: 13 },
        { name: "es6", url: "#", count: 13 },
        { name: "typescript", url: "#", count: 16 },
        { name: "chrome", url: "#", count: 32 },
        { name: "npm", url: "#", count: 28 },
        { name: "bootstrap", url: "#", count: 7 },
        { name: "sass", url: "#", count: 25 },
        { name: "less", url: "#", count: 29 },
        { name: "chrome devtools", url: "#", count: 16 },
        { name: "firefox", url: "#", count: 7 },
        { name: "angular", url: "#", count: 7 },
        { name: "coffeescript", url: "#", count: 13 },
        { name: "safari", url: "#", count: 31 },
        { name: "postcss", url: "#", count: 8 },
        { name: "postman", url: "#", count: 8 },
        { name: "fiddler", url: "#", count: 9 },
        { name: "webkit", url: "#", count: 25 },
        { name: "yarn", url: "#", count: 34 },
        { name: "firebug", url: "#", count: 1 },
        { name: "edge", url: "#", count: 3 },
        { name: "gulp", url: "#", count: 10 },
        { name: "webpack", url: "#", count: 22 },
        { name: "前端", url: "#", count: 7 }
      ]
    };
  },
  beforeCreate() {
    this.ROUTER_NAMES = ROUTER_NAMES;
  },
  // created(){
  //   invokeSimpleGetSrevice("api/tags/getList", {}).then(res => {
  //     const { data, code } = res;
  //     if (code === "200") {
  //       this.$data.tags = data
  //     }
  //   });
  // }
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     const { state, dispatch } = vm.$store;

  //     console.log(from, to);
  //     // 通过 `vm` 访问组件实例
  //   });
  // }
};
</script>

<style lang="less">
</style>