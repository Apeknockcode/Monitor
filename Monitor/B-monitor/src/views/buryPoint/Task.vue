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
    <div class="Task-id">
        <el-card class="box-card mb-2">
            任务 id
        </el-card>
        <el-card class="box-card">
            <article>
                <pre>
                    // 安装核心模块
                    $ npm i @websee/core

                    // 安装性能检测插件
                    $ npm i @websee/performance

                    // 安装页面录屏插件
                    $ npm i @websee/recordscreen
                </pre>
            </article>
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