<template>
  <div class="article-body">
    <h2 class="article-body-title">{{article.title}}</h2>
    <SubTitle
      :tags="article.tags"
      :createDate="article.createDate"
      :lastDate="article.lastDate"
      :category="article.catogorie"
      :boxStyle="{alignSelf: 'center'}"
    />
    <article class="article-body-content" v-html="content"></article>
  </div>
</template>

<script>
import SubTitle from "./SubTitle";
import marked from "marked";
export default {
  components: {
    SubTitle
  },
  props: {
    article: {
      type: Object
    }
  },
  data() {
    return {
      content: this.$$marked(this.testContent)
    };
  },
  beforeCreate() {
    this.$$marked = marked.setOptions({
      renderer: new marked.Renderer(),

      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    this.testContent = "# Marked in browser\n\nRendered by **marked**.;";
  },
};
</script>

<style lang="less">
.article-body {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  .article-body-title {
    align-self: center;
    margin: 1.5rem 1.5rem 0.5rem;
  }
  .article-body-content {
    margin-top: 0.5rem;
  }
}
</style>