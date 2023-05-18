<template>
    <div id="Pancake" ref="Pancake" style="width: 100%;height:600px"> </div>
</template>

<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    ToolboxComponent,
    ToolboxComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    ToolboxComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
    | TitleComponentOption
    | ToolboxComponentOption
    | LegendComponentOption
    | PieSeriesOption
>;


var options: EChartsOption;

options = {
    title: {
        text: 'Echarts ', // 主标题名称
        link: '', // 点击主标题跳转
        textStyle: {
            //主标题文本设置
            fontSize: 20, //大小
            fontWeight: 700 //粗体
        }
    },
    legend: {
        top: 'bottom'
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
            ]
        }
    ]
};




const Pancake = ref<any>();
onMounted(() => {
    Pancake.value = markRaw(
        echarts.init(
            document.getElementById("Pancake") as HTMLElement, '', {
            useDirtyRect: true
        }));
    loadCharts()
    window.onresize = function () {
        Pancake.value.resize();
    };
});
const loadCharts = () => {
    Pancake.value.setOption(options);
};
</script>

<style lang="sass" scoped>

</style>