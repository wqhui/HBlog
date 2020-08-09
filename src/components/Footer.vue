<template>
  <footer>
    <!-- <div class="footerBox">
      <ul class="linkMenu">
        <li :class="['linkItem']" v-for="(item,index) in links" :key="item.id">
          <span class="linkName">{{item.name}}</span>
          <span class="linkSplit" v-if="index!==links.length-1">/</span>
        </li>
      </ul>
    </div> -->
    <div class='footerBox'>	&copy;	Design By Snns丶</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "赞助本站", id: "0", url: "#" },
        { name: "使用说明", id: "1", url: "#" },
        { name: "友情链接", id: "2", url: "#" }
      ]
    };
  }
};
</script>

<style lang="less">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 0.625rem;
  padding: 0.625rem 1.25rem;
  color: #464646;
  .footerBox{
    padding:0.25rem 1.25rem;
  }
  .linkMenu {
    margin: 0.625rem;
    @hor-ul();
    .linkItem {
      .linkName {
        cursor: pointer;
        &:hover {
          color: @main-color;
        }
      }
      .linkSplit {
        margin: 0 0.25rem;
      }
    }
  }
}
</style>