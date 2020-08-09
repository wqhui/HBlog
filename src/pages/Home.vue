<template>
  <ArticleList :list="list" />
</template>

<script>
import ArticleList from "../components/article/List";
import { invokePostSrevice } from '../service/proxy'
export default {
  components: {
    ArticleList
  },
  data: function() {
    return {
      list: [
        // {
        //   id: "1",
        //   title: "css遇到的坑",
        //   createDate: "2020-04-25 10:30:00",
        //   lastDate: "2020-04-25 11:30:00",
        //   tags: [
        //     { name: "javascript", url: "#", count: 3 },
        //     { name: "css", url: "#", count: 11 }
        //   ],
        //   catogorie: { name: "前端", url: "#" },
        //   content:
        //     "鼠标悬停改变滚动条样式（高度、宽度、颜色）tranform只对非内联（inline）生效，标签 inline-block元素4px解决方案"
        // },
        // {
        //   id: "2",
        //   title: "css遇到的坑",
        //   createDate: "2020-01-25 10:30:00",
        //   lastDate: "2020-01-25 11:30:00",
        //   tags: [{ name: "css3", url: "#", count: 13 }],
        //   catogorie: { name: "css", url: "#" },
        //   content:
        //     "鼠标悬停改变滚动条样式（高度、宽度、颜色）tranform只对非内联（inline）生效，标签 inline-block元素4px解决方案"
        // }
      ]
    };
  },
  created() {
    invokePostSrevice('api/article/getLastArticlesByPage',{args:{pageNum:1,pageSize:10}}).then((res)=>{
      const { data, code } = res
      if(code === '200'){
        const { content } = data
        this.$data.list = content
      }
    })
  }
};
</script>

<style>
</style>