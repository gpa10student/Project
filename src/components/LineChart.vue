<template>
  <div class="echarts-box">
    <div id="myEcharts1" :style="{ width: '450px', height: '200px' }"></div>
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
        let chart = echart.init(document.getElementById("myEcharts1"));
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
                lineStyle: {
                    color: "#A01C29"
                },
                color: "#A01C29",
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                type: "line",
                smooth: true
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

