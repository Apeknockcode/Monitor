<template>
    <div id="Funnel" ref="Funnel" style="width: 100%;height:600px"> </div>
</template>

<script setup lang="ts">
import { onMounted, markRaw, ref } from 'vue';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    ToolboxComponent,
    ToolboxComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import { FunnelChart, FunnelSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    LegendComponent,
    FunnelChart,
    CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
    | TitleComponentOption
    | ToolboxComponentOption
    | TooltipComponentOption
    | LegendComponentOption
    | FunnelSeriesOption
>;

var option: EChartsOption;

option = {
    title: {
        text: 'Funnel'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    // toolbox: {
    //     feature: {
    //         dataView: { readOnly: false },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    legend: {
        top: 'bottom',
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },

    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' }
            ]
        }
    ]
};




const Funnel = ref<any>();

onMounted(() => {
    Funnel.value = markRaw(echarts.init(document.getElementById('Funnel') as HTMLElement))
    loadChart()
    window.onresize = () => {
        Funnel.value.resize()
    }
})
const loadChart = () => {
    Funnel.value.setOption(option)
}
</script>

<style scoped></style>