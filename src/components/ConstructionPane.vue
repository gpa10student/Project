<!--支部建设组件-->

<template>
    <div class = "container">
        <p class="text-left">支部建设</p>

        <div class="rows" >
        <count-block num="1" name="支部大会"/>
        <count-block num="0" name="支部委员会"/>
        <count-block num="0" name="党小组会"/>
        <count-block num="0" name="党课"/>
    </div>
    <div class="rows">
        <count-block num="0" name="主题党日"/>
        <count-block num="1" name="民主评议党员"/>
        <count-block num="1" name="组织生活会"/>
    </div>
    </div>
</template>

<script>
import CountBlock from './CountBlock'

export default {
    name: 'ConstructionBlock',
    components:{
        CountBlock,
    }
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
    color: #575757
}

</style>