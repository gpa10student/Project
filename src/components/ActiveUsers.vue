<template>
    <div class="container">
    <p class="text-left">登录人数</p>
    <div id="myEcharts2" :style="{ width: '550px', height: '220px' }"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import {onMounted, onUnmounted} from 'vue'
export default {
    setup() {
        let echart = echarts;

        onMounted(() => {
        initChart();
        });

        onUnmounted(() => {
        echart.dispose;
        });
        
        function initChart() {
        let chart = echart.init(document.getElementById("myEcharts2"));
        chart.setOption({
            xAxis: {
            type: "category",
            data: ['02-16', '02-18', '02-20', '02-22', '02-24', '02-26', '02-28', '03-02', '03-04', '03-06', '03-08', '03-10', '03-12', '03-14', '03-16']
            },
            tooltip: {
            trigger: "axis"
            },
            yAxis: {
            show: false,
            type: "value"
            },
            series: [
            {
                left: '10%',
                lineStyle: {
                    color: "#A01C29"
                },
                color: "#A01C29",
                data: [12, 1, 5, 3, 4,16, 6, 7, 1, 3, 11, 11, 11, 12, 9],
                type: "line",
                smooth: true,
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: '#A01C29'},
                            {offset: 0.5, color: '#d67878'},
                            {offset: 1, color: '#ee9392'},
                        ])
                    }
                }
            }
            ]
        });
        
        window.addEventListener("resize",function(){
            chart.resize(); });
       
        }

        return { initChart };
    }
    };
</script>

<style scoped>
.text-left{
    float:left;
    font-size: 14px;
    padding-left: 15px;
    color: #575757;
}
</style>
