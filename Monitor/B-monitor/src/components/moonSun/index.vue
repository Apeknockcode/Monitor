

<template>
    <el-button type="primary" round @click="toggleDark()">


        <svg class="w-4" v-show="isDark" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path fill="currentColor"
                d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z">
            </path>
        </svg>

        <svg class="w-4" v-show="!isDark" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path fill="currentColor"
                d="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z">
            </path>
        </svg>

        <span class="ml-1">{{ isDark ? 'Dark' : 'Light' }}</span>

    </el-button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    storageKey: 'vitepress-theme-appearance',
})
const toggleDark = useToggle(isDark)
</script>