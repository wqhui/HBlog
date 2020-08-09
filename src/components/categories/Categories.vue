<template>
  <ul class="categories-box">
    <li class="categories-box-item" :key="item.name||index" v-for="(item,index) in categoties">
      <router-link
        class="categories-box-item-a"
        :to="{ name: ROUTER_NAMES.CATEGORY_DETAIL, params: { name: item.name,id:1 }}"
        :data-name="item.name"
      >
        <i class="categories-box-item-icon fa fa-folder" />
        <span class="categories-box-item-name">{{item.name}}</span>
        <span class="categories-box-item-count">{{item.count}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { ROUTER_NAMES } from "../../const/routerConst";
export default {
  methods: {},
  beforeCreate() {
    this.ROUTER_NAMES = ROUTER_NAMES;
  },
  props: ["categoties"]
};
</script>

<style lang="less">
.categories-box {
  padding-left: 0;
  padding: 0 1rem;
  .categories-box-item {
    margin: 0.5rem 0;
    .categories-box-item-a {
      &:hover {
        color: @main-color;
        .fa-folder::before {
          content: "\f07c";
        }
      }
      color: @main-font-color;
      .categories-box-item-icon {
        color: @mul-color-ylw;
        width: 1.1rem;
      }
      .categories-box-item-name {
        margin: 0 0.5rem;
        border-bottom: 1px dotted @minor-font-color;
      }
      .categories-box-item-count {
        &::before {
          content: "[ ";
        }
        &::after {
          content: " ]";
        }
      }
    }
  }
}
</style>