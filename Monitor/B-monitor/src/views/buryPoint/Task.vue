<template>
    <div class="task-header mb-2">
        <div class="flex items-center cursor-pointer" @click="handleGoBlack">
            <svg class="w-5 h-5 border-2 rounded-full p-0.5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                data-v-ea893728="">
                <path fill="currentColor"
                    d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z">
                </path>
            </svg>
            <span class="ml-1">返回上一页</span>
        </div>

    </div>
    <div class="Task-id ">
        <el-card class="box-card mb-2">
            任务 id
        </el-card>
        <el-card class="box-card mb-2">
            <template #header>
                <div class="card-header">
                    <span>依赖项</span>
                </div>
            </template>
            <pre>
                <code>
// 安装核心模块
$npm i @brolisten/core
                </code>
                 <code>
// 安装性能检测插件
$npm i @brolisten/performance
                </code>
                 <code>
// 安装页面录屏插件
$npm i @brolisten/recordscreen
                </code>
            </pre>
        </el-card>
        <el-card class="mb-2">
            <template #header>
                <div class="card-header">
                    <span>Vue2 安装说明</span>
                </div>
            </template>
            <pre>
import brolisten from '@brolisten/core';
import performance from '@brolisten/performance';
import recordscreen from '@brolisten/recordscreen';

Vue.use(brolisten, {
    dsn: '上报的地址',
    apikey: '项目唯一的id',
    userId: '用户id', 
    repeatCodeError: true, // 开启错误上报去重，重复的代码错误只上报一次
    silentWhiteScreen: true, // 开启白屏检测
    skeletonProject: true, // 项目是否有骨架屏
    handleHttpStatus(data) {
        // 自定义hook, 根据接口返回的 response 判断请求是否正确
        let { url, response } = data;
        let { code } = typeof response === 'string' ? JSON.parse(response) : response;
        if (url.includes('/getErrorList')) {
            return code === 200 ? true : false;
        } else {
            return true;
        }
    },
});
// 注册性能检测插件
brolisten.use(performance);
// 注册页面录屏插件，设置单次录屏时长为20s，默认是10s
brolisten.use(recordscreen, { recordScreentime: 20 });
           </pre>
        </el-card>

        <el-card class="mb-2">
            <template #header>
                <div class="card-header">
                    <span>Vue3 安装说明</span>
                </div>
            </template>
            <pre>
import brolisten from '@brolisten/core';
import performance from '@brolisten/performance';
import recordscreen from '@brolisten/recordscreen';

const app = createApp(App);
app.use(brolisten, {
  dsn: 'http://text.com/reportData',
  apikey: '项目唯一的id',
  userId: '用户id', 
});

brolisten.use(performance);
brolisten.use(recordscreen);
            </pre>
        </el-card>
    </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter()
const handleGoBlack = () => {
    router.go(-1)
}

</script>

<style scoped></style>