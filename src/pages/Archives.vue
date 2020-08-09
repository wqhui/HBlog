<template>
  <div class="mimicry-box inner-content-box">
    <content-title :title="disPlayTitle" />
    <TimeLine
      @onItemClick="onItemClick"
      :key="item.id"
      v-for="item in archives"
      :title="item.title"
      :items="item.items"
    />
  </div>
</template>

<script>
import TimeLine from "../components/timeline/TimeLine";
import ContentTitle from "../components/ContentTitle";

import { ROUTER_NAMES } from "../const/routerConst";
export default {
  components: {
    TimeLine,
    "content-title": ContentTitle
  },
  methods: {
    onItemClick(articleId) {
      this.$router.push({
        name: this.ROUTER_NAMES.ARTICLE,
        params: { articleId }
      });
    }
  },
  beforeCreate() {
    this.ROUTER_NAMES = ROUTER_NAMES;
  },
  computed: {
    disPlayTitle() {
      const { params } = this.$route;
      return params.name || this.title;
    }
  },
  data() {
    return {
      title: "归档",
      archives: [
        {
          id: "1",
          title: "2020-01",
          items: [
            {
              id: "1",
              date: "2020-01-02",
              title: "vue到底是啥玩意呢?"
            },
            {
              id: "2",
              date: "2020-01-02",
              title: "vue到底是啥玩意呢?"
            }
          ]
        },
        {
          id: "2",
          title: "2020-02",
          items: [
            {
              id: "3",
              date: "2020-02-02",
              title: "vue到底是啥玩意呢?"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less">
</style>