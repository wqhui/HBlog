<template>
  <div class="mimicry-box article-item-box">
    <h3 class="title" @click="onClick(article.id)">{{article.title}}</h3>
    <SubTitle
      :tags="article.articleTagsList"
      :createDate="article.createDate"
      :lastDate="article.lastDate"
      :categories="article.articleCategoryList"
    />
    <div class="content">{{article.summary}}</div>
  </div>
</template>

<script>
import SubTitle from "./SubTitle";
import { ROUTER_NAMES } from '../../const/routerConst'
export default {
  props: {
    article: Object
  },
  components: {
    SubTitle
  },
  methods: {
    onClick(articleId) {
      this.$router.push({ name: this.ROUTER_NAMES.ARTICLE, params: { articleId } });
    }
  },
  beforeCreate(){
    this.ROUTER_NAMES = ROUTER_NAMES
  }
};
</script>

<style lang="less">
.article-item-box {
  padding: 1rem;
  margin-bottom: 1rem;
  .title {
    &:hover {
      color: @main-deep-color;
      cursor: pointer;
      background-color: @selct-bg-color;
    }
    margin: 0 0 1rem 0;
    padding-right: 20%;
    @one-line-elps();
  }
  .content {
    @one-line-elps();
  }
}
</style>