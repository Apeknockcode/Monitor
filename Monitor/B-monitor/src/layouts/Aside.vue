<template>
    <el-card class="w-full h-10 cursor-pointer mb-2 flex items-center justify-start px-10 py-2"
        :class='{ "text-base shadow-lg shadow-cyan-500/50 focus:outline-none": currentUrl.startsWith(item.path) }'
        style="--el-card-padding:0px" :body-style="cardBody" v-for="item in  routerArr " :key="item.path" shadow='hover'
        @click="handlePages(item)">
        <span v-html="item.icon"></span>
        <span class="ml-1">{{ item.name }}</span>
    </el-card>
</template>

<script lang="ts" setup>
import { CSSProperties, ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useBrowserLocation } from '@vueuse/core'
const cardBody: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
interface routerType {
    name: string,
    icon: string,
    path: string,
}

const router = useRouter()
const routerArr: routerType[] = [
    {
        name: '数据统计',
        icon: ` <svg viewBox="0 0 1024 1024" class="w-4" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path fill="currentColor" d="M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"></path>
        </svg>`,
        path: '/statistics'
    },
    {
        name: '埋点',
        icon: ` <svg viewBox="0 0 1024 1024" class="w-4" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path fill="currentColor"
                d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z">
            </path>
        </svg>`,
        path: '/buryPoint'
    }
]

const location = useBrowserLocation()
const currentUrl = ref('')
onMounted(() => {
    currentUrl.value = location.value.state.current
})

const handlePages = ({ path }: routerType) => {
    // 设置url 
    currentUrl.value = path

    router.push({
        path: path
    });
}

</script>


<style lang="scss" scoped></style>
