<template>
  <div class="sub-title" @click="clickHandle" :style="boxStyle">
    <div class="sub-title-time sub-title-item">
      <i class="fa fa-calendar-minus-o"></i>
      <span>{{showTime}}</span>
    </div>
    <div class="sub-title-item">
      <i class="fa fa-tag"></i>
      <a
        class="sub-title-tag link-item"
        v-for="item in tags"
        :key="item.tag.id"
        data-type="tag"
        :data-name="item.tag.name"
        :data-id="item.tag.id"
      >{{item.tag.name}}</a>
    </div>
    <div class="sub-title-item" v-if="categories && categories.length > 0">
      <i class="fa fa-folder"></i>
      <div
        v-for="item in categories" 
        :key="item.category.id" 
        :data-name="item.category.name"
        :data-id="item.category.id"
        class="sub-title-category link-item"
        data-type="category" 
      >{{item.category.name}}</div>
    </div>
  </div>
</template>

<script>
import { getDateDiff } from "../../util";
import { ROUTER_NAMES } from "../../const/routerConst";
export default {
  computed: {
    showTime() {
      return getDateDiff(this.lastDate || this.createDate);
    }
  },
  methods: {
    goRoute(name, params) {
      this.$router.push({ name, params });
    },
    tagClick({ name, id }) {
      name && this.goRoute(ROUTER_NAMES.TAGS_DETAIL, { name, id });
    },
    categoryClick({ name, id }) {
      name && this.goRoute(ROUTER_NAMES.CATEGORY_DETAIL, { name, id });
    },
    clickHandle(e) {
      const dataset = e.target.dataset;
      const { type } = dataset || {};
      this[type + "Click"] && this[type + "Click"](dataset);
    }
  },
  props: ["createDate", "tags", "lastDate", "categories", "boxStyle"],
  beforeCreate() {
    this.ROUTER_NAMES = ROUTER_NAMES;
  }
};
</script>

<style lang="less">
.sub-title {
  display: flex;
  margin-bottom: 1rem;
  color: @minor-font-color;
  font-size: 0.9rem;
  .sub-title-item {
    display: flex;
    align-items: center;
    .fa {
      margin-right: 6px;
    }
    &:not(:last-child)::after {
      content: "·";
      margin: 0px 0.8em;
    }
    .link-item:hover {
      cursor: pointer;
      color: @main-deep-color;
    }
  }
  .sub-title-tag {
    &:not(:last-child)::after {
      content: "/";
      margin: 0px 0.2em;
      color: @minor-font-color;
    }
  }

  .sub-title-category {
    &:not(:last-child)::after {
      content: "/";
      margin: 0px 0.2em;
      color: @minor-font-color;
    }
  }
}
</style>