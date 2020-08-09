<template>
  <div class="mimicry-box inner-content-box category-box">
    <content-title :title="title" :subTitle="subTitle" />
    <Categories :categoties="categoties" />
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle";
import Categories from "../components/categories/Categories";

//import { invokeSimpleGetSrevice } from '../service/proxy'
export default {
  components: {
    Categories,
    "content-title": ContentTitle
  },
  computed: {
    subTitle() {
      const l = this.categoties && this.categoties.length;
      if (l > 0) {
        return "共计" + l + this.title;
      }
      return "";
    }
  },
  data() {
    return {
      title: "分类",
      categoties: [
        { name: "个人", url: "#", count: 28 },
        { name: "笔记", url: "#", count: 11 },
        { name: "windows", url: "#", count: 3 },
        { name: "android-studio", url: "#", count: 34 },
        { name: "错误", url: "#", count: 8 },
        { name: "hibernate", url: "#", count: 8 },
        { name: "javascript", url: "#", count: 10 },
        { name: "easy-ui", url: "#", count: 0 },
        { name: "gradle", url: "#", count: 21 },
        { name: "sqlite", url: "#", count: 9 },
        { name: "linux", url: "#", count: 8 },
        { name: "datatables", url: "#", count: 4 },
        { name: "ajax", url: "#", count: 27 },
        { name: "validation", url: "#", count: 1 },
        { name: "java", url: "#", count: 12 },
        { name: "iText", url: "#", count: 0 },
        { name: "jquery", url: "#", count: 21 },
        { name: "高德地图", url: "#", count: 12 },
        { name: "html", url: "#", count: 0 },
        { name: "css", url: "#", count: 31 },
        { name: "微信小程序", url: "#", count: 1 },
        { name: "struts", url: "#", count: 6 },
        { name: "react", url: "#", count: 7 },
        { name: "webpack", url: "#", count: 22 },
        { name: "资源GIF", url: "#", count: 13 },
        { name: "tomcat", url: "#", count: 1 },
        { name: "小技巧", url: "#", count: 34 },
        { name: "SSM", url: "#", count: 24 },
        { name: "应用商店安装", url: "#", count: 6 }
      ]
    };
  },
  // created(){
  //   invokeSimpleGetSrevice("api/category/getList", {}).then(res => {
  //     const { data, code } = res;
  //     if (code === "200") {
  //       this.$data.categoties = data
  //     }
  //   });
  // }
};
</script>

<style lang="less">
</style>