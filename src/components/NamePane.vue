<template>
    <div class="container">
        <div class="name" :style="{width: '80%'}">
            <b><p>书记:</p>
            <p>委员: </p></b>
        </div>
        
        <div class="name" :style="{width: '100%'}">
            <b><p>副书记：</p></b>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    color: #575757;
    height: 23vh;
}
.name{
    margin-left: 0;
    margin-top: 0;
}
</style>