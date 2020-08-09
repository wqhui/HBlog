<template>
    <div class="mimicry-box about-box inner-content-box">
        <h3>关于我</h3>
        <h3>联系方式</h3>
        <h3>关于网站</h3>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='less'>
    .about-box{
        display: flex;
        flex-direction: column;
        h3{
            margin: 0;
            padding: 1rem 0;
            border-bottom: 1px solid
        }
        h3:first-child {
            border-bottom-color: @mul-color-grn;
        }
        h3:nth-child(2){
            border-bottom-color: @mul-color-ylw;
        }
        h3:nth-child(3){
            border-bottom-color: @mul-color-prp;
        }
    }
</style>