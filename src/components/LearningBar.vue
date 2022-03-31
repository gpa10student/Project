<template>
    <div class='container'>

        <div id="myEcharts7" :style="{ width: '100%', height: '190%' }"></div>

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
        let chart7 = echart.init(document.getElementById("myEcharts7"));
        chart7.setOption({
            color: ["#BBAA6E", "#A01C29"],
            legend: {
                data: ['学习人数', '获得勋章人数'],
                x: 'right',
            },
            grid:{
                left: '3%',
                right: '4%',
            },
            xAxis: {
            type: "category",
            data: ['党章公开课', '扶贫', '反形式官僚', '纪念马克思', '五新联通学堂'],
            axisLabel: {
            width: 100, 
            overflow: 'truncate', 
            interval: 0,
            rotate:45,
            },
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
                name: '学习人数',
                type: 'bar',
                data: [23, 21, 29, 10, 3],
            },
            {
                name: '获得勋章人数',
                type: 'bar',
                data: [6, 10, 20, 1],
            }
            ]
        });
        window.addEventListener("resize",function(){
            chart7.resize(); });
       
        
        }

        return { initChart };
    }
    };
</script>

