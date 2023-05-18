
<template>
  <div class="common-layout">
    <el-container>
      <el-header style=" --el-header-padding: 0px; --el-header-height: 60px;">
        <el-card class="w-full" body-style="height:60px">
          header
        </el-card>
      </el-header>
      <el-container style="height:calc(100vh - 60px)">
        <el-aside width="200px" class="p-3">
          <ASIDE class="h-full"></ASIDE>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import ASIDE from './Aside.vue' // 侧边栏
// import MOONSUN from '@/components/moonSun/index.vue' // 切换暗夜模式
</script>

<style lang="scss" scoped></style>