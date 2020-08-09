<template>
  <div class="blog-info-box">
    <div
      class="info-item"
      :key="item.id"
      v-for="item in blogInfo"
      @click="clickHandle($event,item.id)"
    >
      <div class="count">{{item.count}}</div>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import { invokeSimpleGetSrevice } from "../../service/proxy";
import { ROUTER_NAMES } from "../../const/routerConst";
export default {
  data() {
    return {
      blogCount: "-",
      tagsCount: "-"
    };
  },
  computed: {
    blogInfo() {
      return [
        {
          id: this.ROUTER_NAMES.ARCHIVES,
          count: this.$data.blogCount,
          title: "日志"
        },
        {
          id: this.ROUTER_NAMES.TAGS,
          count: this.$data.tagsCount,
          title: "标签"
        }
      ];
    }
  },
  methods: {
    clickHandle(e, name) {
      if (this.$route.path.indexOf(name) > -1) {
        return;
      }
      this.$router.push({name});
    }
  },
  beforeCreate() {
    this.ROUTER_NAMES = ROUTER_NAMES;
  },
  created() {
    invokeSimpleGetSrevice("api/article/getAllArticleCount", {}).then(res => {
      const { data, code } = res;
      if (code === "200") {
        this.$data.blogCount = data;
      }
    });
    invokeSimpleGetSrevice("api/tags/getAllTagsCount", {}).then(res => {
      const { data, code } = res;
      if (code === "200") {
        this.$data.tagsCount = data;
      }
    });
  }
};
</script>

<style lang="less">
.blog-info-box {
  display: flex;
  justify-content: center;
  padding: 10px 0;

  .info-item:first-child .count {
    color: @mul-color-grn;
  }
  .info-item:nth-child(2) .count {
    color: @mul-color-ylw;
  }
  .info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
    padding: 5px;
    .count {
      font-size: 20px;
    }
    .title {
      font-size: 12px;
      color: @main-font-color;
    }
    &:hover {
      cursor: pointer;
      background: @main-light-color;
    }
  }
}
</style>