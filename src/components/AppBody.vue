<template>
<div class="page-body">
<div class="left">
    <div class = "left-top">
        <propaganda-block/>
    </div>
    <div class = "left-middle">
        <construction-block/>
    </div>
    <div class = "left-bottom">
        <party-branch/>
    </div>
</div>
<div class='middle'>
    <div class="middle-top">
        <middle-top/>
    </div>
    <div class="middle-bottom">
        <active-users/>
    </div>
</div>
<div class="right">
    <div class="right-top">
        <pie-charts/>
    </div>
    <div class="right-middle">
        <learning-bar/>
    </div>
    <div class="right-bottom">
        <name-pane/>
    </div>
</div>

</div>


</template>

<script>
import PropagandaBlock from './PropagandaBlock.vue'
import ConstructionBlock from './ConstructionPane.vue'
import PartyBranch from './PartyBranch.vue'
import MiddleTop from './MiddleTop.vue'
import ActiveUsers from './ActiveUsers.vue'
import PieCharts from './PieCharts.vue'
import LearningBar from './LearningBar.vue'
import NamePane from './NamePane.vue'

export default{
    name: "AppBody",
    components:{
        PropagandaBlock,
        ConstructionBlock,
        PartyBranch,
        MiddleTop,
        ActiveUsers,
        PieCharts,
        LearningBar,
        NamePane,
    }
}
</script>

<style lang = "less" scoped>
.container{
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 2%;
    margin-left: 2%;
    box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.2);

}

.page-body{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
            width: 30%;
            height: 100%;
            
            .left-top{
                position: relative;
                height: 30%;
            }

            .left-middle{
                position: relative;
                height: 30%;
            }
            .left-bottom{
                position: relative;
                height: 30%;
            }
    }
    .middle{
        height: 100%;
        width: 39%;
        .middle-top{
            height: 60%;
            position: relative;
        }
        .middle-bottom{
            height: 40%;
            position: relative;
        }
    }
    .right{
        height: 100%;
        width: 30%;
        .right-top{
            position: relative;
        }
        .right-middle{
            position: relative;
        }
        .right-bottom{
            position: relative;
        }
    }
    
}


</style>