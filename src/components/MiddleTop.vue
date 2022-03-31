<template>
    <div class="container">
        <div class="rows">
            <alter-block num='0' name='党委数'/>
            <alter-block num='0' name='党总支数'/>
            <alter-block num='1' name='党支部数'/>
            <alter-block num='9' name='党员数'/>
        </div>
        <p class="text-left">政企客户事业群第三党支部</p>
    </div>
</template>

<script>
import AlterBlock from './AlterBlock.vue'

export default{
    components:{
        AlterBlock,
    }
}
</script>

<style scoped>
.container{
    padding-top: 15px;
    display: inline-block;
    height:60vh;
}
.rows{
    display: inline-flex;
    margin: auto;
    padding: 1px;
}

.text-left{
    float:left;
    font-size: 14px;
    padding-left: 15px;
    color: #575757;
}

</style>