<template>
<div class="block" >
    <div :style="{color: '#A01C29', fontSize: '20px'}">
        <b>{{num}}</b>
    </div>
    <div :style="{color: '#A01C29', fontSize: '14px'}">
        {{name}}
    </div>
</div>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'AlterBlock',
    props: ['num', 'name'],
});
</script>

<style scoped>
.block{
    width: 120px;
    height:  50px;
    border-style:solid;
    border-width: 0.1px;
    border-color: "#dbdbdb";
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px;
}

</style>