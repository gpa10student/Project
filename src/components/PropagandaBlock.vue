<!--宣传组件-->
<template>
    <div class="container">
    <p class="text-left">宣传</p><br/><br/><br/>
    
    <div class="rows" >
        <count-block num="0" name="要闻聚焦"/>
         <count-block num="2" name="基层动态"/>
         <count-block num="0" name="经验交流"/>
         <count-block num="0" name="学习园地"/>
    </div>
    <div class="rows">
        <count-block num="47" name="浏览数"/>
         <count-block num="0" name="评论数"/>
         <count-block num="0" name="收藏数"/>
         <count-block num="0" name="笔记数"/>
    </div>
    <b><p class="text-left">发布量月度曲线</p></b>

    
    <line-chart/>
    </div>
</template>

<script>
import CountBlock from './CountBlock'
import LineChart from './LineChart'

export default {
  name: 'PropagandaBlock',
  components: {
    CountBlock,
    LineChart,
  },
  
}
</script>

<style scoped>

.rows{
    display: inline-flex;
    margin: auto;
 
}
.text-left{
    float:left;
    font-size: 14px;
    padding-left: 15px;
    color: #575757;
}
</style>
