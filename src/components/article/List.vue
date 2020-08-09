<template>
  <div class="article-list">
    <ArticleItem :key="item.id" v-for="item in articles" :article="item" />
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
export default {
  props: {
    list: Array
  },
  computed:{
    articles(){
      return this.list || []
    } 
  },
  components: {
    ArticleItem
  }
};
</script>

<style lang='less'>
.article-list {
  display: flex;
  flex-direction: column;
  width: 1px;
  flex-grow: 1;
  flex-basis: 1px;
  margin-right: 0.625rem;
}
</style>