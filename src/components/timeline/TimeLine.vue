<template>
  <div class="timeline-box">
    <div class="timeline-title">
      <h3>{{title}}</h3>
    </div>
    <ul class="timeline-content">
      <li class="timeline-item"  :key="item.id" v-for="item in items">
        <div class="timeline-item-tail"></div>
        <div @click="itemClick(item.id)"  :data-aid="item.id" class="timeline-item-content">
          <span class="timeline-item-content-title">{{item.date}}</span>
          {{item.title}}
        </div>
        <div class="timeline-item-head"></div>
      </li>
    </ul>
    <div class="timeline-dividing-line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    itemClick(aid) {
      if (aid) {
        this.$emit("onItemClick", aid);
        return
      }
      console.warn('aid is null!')
    }
  },
  props: ["title", "items"]
};
</script>

<style lang="less">
@line: {
  position: absolute;
  left: 0.4rem;
  border-left: 2px solid @minor-bg-color;
};

.timeline-box {
  padding: 0 1rem;
  .timeline-title {
    position: relative;
    padding-bottom: 1.5rem;
    cursor: default;
    &::before {
      content: "";
      width: 1rem;
      height: 1rem;
      //background: @main-color;
      border: 2px solid @main-color;
      border-radius: 50%;
      position: absolute;
      top: 0.35rem;
      transform: translateX(-15%);
    }

    h3 {
      margin: 0 2rem;
      height: 2rem;
      line-height: 2rem;
      &::before {
        content: "";
        @line();
        top: 1.65rem;
        height: calc(100% - 1.65rem);
      }
    }
  }

  .timeline-content {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    .timeline-item {
      position: relative;
      margin: 0;
      padding-bottom: 0.75rem;
      list-style: none;
      .timeline-item-tail {
        @line();
        top: 0.625rem;
        height: calc(100% - 0.625rem);
      }

      .timeline-item-content {
        position: relative;
        top: -0.3rem;
        margin: 0 0 0 1.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px dashed @minor-font-color;
        &:hover {
          cursor: pointer;
          color: @main-deep-color;
          border-color: @main-deep-color;
          & + .timeline-item-head {
            background: @main-color;
          }
          .timeline-item-content-title {
            color: @main-deep-color;
          }
        }
        .timeline-item-content-title {
          display: inline-flex;
          margin-right: 0.5rem;
          font-size: 0.85rem;
          color: @minor-font-color;
        }
      }
      .timeline-item-head {
        position: absolute;
        top: 0;
        width: 0.625rem;
        height: 0.625rem;
        background-color: #fff;
        border: 2px solid transparent;
        border-radius: 50%;
        color: @minor-bg-color;
        border-color: @minor-bg-color;
      }
    }
  }
  .timeline-dividing-line {
    border-bottom: 2px solid @minor-bg-color;
    width: calc(100% - 0.4rem);
    margin-left: 0.4rem;
  }
}
</style>