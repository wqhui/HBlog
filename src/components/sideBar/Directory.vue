<template>
  <div class="directory-box">
    <h3 class="directory-title">目录</h3>
    <ul class="directory-tree" @click.stop="click">
      <li :key="item.id" v-for="item in directoryData">
        <a
          :data-nid="item.id"
          :class="{'directory-item':true,'active':activeId===item.id}"
          :href="item.href"
        >{{item.name}}</a>
        <ul class="directory-inner-tree" v-if="item.children && item.children.length>0">
          <li :key="i.id" v-for="i in item.children">
            <a
              :data-nid="i.id"
              :class="{'directory-item':true,'inner-item':true,'active':activeId===i.id}"
              :href="i.href"
            >{{i.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directoryData: [
        {
          id: "1",
          name: "前言",
          href: "#",
          children: [
            {
              id: "5",
              name: "出现",
              href: "#"
            }
          ]
        },
        {
          id: "2",
          name: "解决过程与坑",
          href: "#"
        },
        {
          id: "3",
          name: "结论",
          href: "#"
        }
      ],
      activeId: 0
    };
  },
  methods: {
    click(e) {
      const dataset = e.target.dataset;
      const { nid } = dataset;
      nid && (this.activeId = nid);
    }
  }
};
</script>

<style lang="less">
.directory-box {
  display: flex;
  flex-direction: column;
  .directory-title {
    margin: 15px;
  }
  ul {
    padding-left: 0px;
    margin: 0px;
  }
  a {
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    color: @main-font-color;
    &:hover:not(.active) {
      color: @main-deep-color;
    }
  }
  .active {
    color: @main-color;
  }
  .directory-tree {
    padding: 0 0.25rem;
    .directory-item {
      width: 100%;
      padding: 0.25rem 1rem;
      margin-bottom: 0.325rem;
    }
    .inner-item {
      padding: 0.25rem 2rem;
    }
  }
}
</style>