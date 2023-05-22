<template>
    <div>
        用户登录界面
        <el-button @click="handleLogin">登录</el-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const handleLogin = () => {
    router.push({ path: '/statistics' })
}
</script>

<style scoped></style>