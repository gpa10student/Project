<template>
    <div class="container">
        <div class="rows"><div id="myEcharts3" :style="{ width: '200px', height: '150px' }"></div>
        <div id="myEcharts4" :style="{ width: '200px', height: '150px' }"></div></div>
        <div class="rows"><div id="myEcharts5" :style="{ width: '200px', height: '150px' }"></div>
        <div id="myEcharts6" :style="{ width: '200px', height: '150px' }"></div></div>


    </div>
</template>

<script>
import * as echarts from 'echarts'
import {onMounted, onUnmounted} from 'vue'
export default{
    setup(){
        let echart = echarts;

        onMounted(() => {
        initChart();
        });

        onUnmounted(() => {
        echart.dispose;
        });

        function initChart() {
        let chart3 = echart.init(document.getElementById("myEcharts3"));
        chart3.setOption({
            title:{
                x: 'center',
                text: '性别',
                y: 'center',
                
            },
            color: ["#BBAA6E", "#A01C29"],
            legend:{
                    orient: 'vertical',
                    data: ['男', '女'],
                    x: 'right',
                    
            },
            series:[
                {
                    type: 'pie',
                    radius: ['40%', '55%'],
                    avoidLabelOverlap: false,
                    labelLine:{
                        show: false
                    },
                    data:[{
                        value: 3,
                        name: '男',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 1,
                        name: '女',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }
                    ]
                }
            ]
        })

        let chart5 = echart.init(document.getElementById("myEcharts5"));
        chart5.setOption({
            title:{
                x: 'center',
                text: '年龄',
                y: 'center',
                
            },
            color: ["#CECEC3","#BBAA6E", "#F9CF7B", "#A01C29", "#060758"],
            legend:{
                    orient: 'vertical',
                    data: ['>=60', '50-59', '40-49', '30-39', '<30'],
                    x: 'right',
                    
            },
            series:[
                {
                    type: 'pie',
                    radius: ['40%', '55%'],
                    avoidLabelOverlap: false,
                    labelLine:{
                        show: false
                    },
                    data:[{
                        value: 3,
                        name: '>=60',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 9,
                        name: '50-59',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 1,
                        name: '40-49',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 3,
                        name: '30-39',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 3,
                        name: '<30',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }
                    ]
                }
            ]
        })

        let chart4 = echart.init(document.getElementById("myEcharts4"));
        chart4.setOption({
            title:{
                x: 'center',
                text: '学历',
                y: 'center',
                
            },
            color: ["#CECEC3","#BBAA6E", "#F9CF7B", "#A01C29", "#060758"],

            legend:{
                    orient: 'vertical',
                    data: ['大学', '硕士', '博士', '大专', '其他'],
                    x: 'right',
                    
            },
            series:[
                {
                    type: 'pie',
                    radius: ['40%', '55%'],
                    avoidLabelOverlap: false,
                    labelLine:{
                        show: false
                    },
                    data:[{
                        value: 3,
                        name: '大学',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 1,
                        name: '硕士',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }
                    ]
                }
            ]
        })

        let chart6 = echart.init(document.getElementById("myEcharts6"));
        chart6.setOption({
            title:{
                x: 'center',
                text: '类别',
                y: 'center',
                
            },
            color: ["#BBAA6E", "#A01C29"],

            legend:{
                    orient: 'vertical',
                    data: ['正式党员', '预备党员'],
                    x: 'right',
                    
            },
            series:[
                {
                    type: 'pie',
                    radius: ['40%', '55%'],
                    avoidLabelOverlap: false,
                    labelLine:{
                        show: false
                    },
                    data:[{
                        value: 3,
                        name: '正式党员',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }, 
                    {
                        value: 1,
                        name: '预备党员',
                        label: {
                            show: false,
                            position: 'outer',
                            fontSize: 15
                        }
                    }
                    ]
                }
            ]
        })
        }
    }
}
</script>

<style scoped>
.container{
    display:flex;
}
.rows{
    width: 100%;
}
.text-left{
    float:left;
    font-size: 14px;
    padding-left: 15px;
    color: #575757;
}
</style>