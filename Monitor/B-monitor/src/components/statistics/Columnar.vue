<template>
    <div id="Columnar" ref="Columnar" style="width: 100%;height:600px"> </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import {
    DatasetComponent,
    DatasetComponentOption,
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted, markRaw, ref } from 'vue';

echarts.use([
    DatasetComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
    | DatasetComponentOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | LegendComponentOption
    | BarSeriesOption
>;


var option: EChartsOption;

option = {
    title: {
        text: 'Echarts ', // 主标题名称
        link: '', // 点击主标题跳转
        textStyle: {
            //主标题文本设置
            fontSize: 20, //大小
            fontWeight: 700 //粗体
        }
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
    ],
    legend: {
        top: 'bottom'
    },
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
    ]
};

const Columnar = ref<any>();

onMounted(() => {
    Columnar.value = markRaw(echarts.init(document.getElementById('Columnar') as HTMLElement))
    loadChart()
    window.onresize = () => {
        Columnar.value.resize()
    }
})
const loadChart = () => {
    Columnar.value.setOption(option)
}


</script>
