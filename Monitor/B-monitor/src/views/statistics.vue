<template>
    <div class="st-header">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card flex">
                    <div class="card-title text-xl">总量</div>
                    <div class="card-number text-2xl">9999999</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div class="card-title text-xl">总量</div>
                    <div class="card-number text-2xl">9999999</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div class="card-title text-xl">总量</div>
                    <div class="card-number text-2xl">9999999</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div class="card-title text-xl">总量</div>
                    <div class="card-number text-2xl">9999999</div>
                </el-card>
            </el-col>
        </el-row>
    </div>
    <div class="echarts-container mt-10">
        <el-row class="row-bg" justify="space-between">
            <el-col :span="11">
                <el-card class="box-card relative">
                    <div class="details border w-5 h-5 absolute top-2 right-2 rounded p-1 cursor-pointer">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                            <path fill="currentColor"
                                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z">
                            </path>
                        </svg>
                    </div>
                    <Pancake />
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card relative">
                    <div class="details border w-5 h-5 absolute top-2 right-2 rounded p-1 cursor-pointer">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                            <path fill="currentColor"
                                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z">
                            </path>
                        </svg>
                    </div>
                    <Columnar />
                </el-card>
            </el-col>
        </el-row>
    </div>
    <div class="echarts-container mt-10">
        <el-row class="row-bg" justify="space-between">
            <el-col :span="11">
                <el-card class="box-card relative">
                    <div class="details border w-5 h-5 absolute top-2 right-2 rounded p-1 cursor-pointer">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                            <path fill="currentColor"
                                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z">
                            </path>
                        </svg>
                    </div>
                    <Funnel />
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card relative">
                    <div class="details border w-5 h-5 absolute top-2 right-2 rounded p-1 cursor-pointer">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                            <path fill="currentColor"
                                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z">
                            </path>
                        </svg>
                    </div>
                    <Map />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Pancake from '../components/statistics/Pancake.vue'
import Columnar from "../components/statistics/Columnar.vue"
import Funnel from '../components/statistics/Funnel.vue'
import Map from '../components/statistics/map.vue' // 地图
</script>

<style scoped></style>
