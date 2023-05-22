<template>
    <div class="relative h-full">
        <div class="absolute top-0 left-0 flex items-center px-10 h-full">
            <img :src="icon" class="w-10 h-10" alt="">
            <span class="ml-1 text-lg font-serif font-bold">鼠拨土</span>
        </div>
        <div class="absolute top-0 right-0  h-full">
            <div class="flex h-full items-center px-8">
                <img :src="user" class="w-11 h-11 mr-2" alt="">
                <el-button>退出</el-button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import icon from "@/assets/icon.png"
import user from "@/assets/userHeader.png"
</script>

<style scoped></style>