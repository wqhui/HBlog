<template>
  <div class="mimicry-box article-box inner-content-box">
    <article-body :article="article" />
  </div>
</template>

<script>
import ArticleBody from "../components/article/ArticleBody";
export default {
  components: {
    "article-body": ArticleBody
  },
  data() {
    return {
      article: {
        id: "1",
        title: "vue到底是啥玩意呢?",
        createDate: "2020-04-25 10:30:00",
        lastDate: "2020-04-25 11:30:00",
        tags: [
          { name: "javascript", url: "#", count: 3 },
          { name: "css", url: "#", count: 11 }
        ],
        catogorie: { name: "前端", url: "#" },
        content:
          "在 2.2.0+，可选的在 router.push 或 router.replace 中提供 onComplete 和 onAbort 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，router.push 或 router.replace 将返回一个 Promise。"
      }
    };
  },
};
</script>

<style lang='less'>
</style>