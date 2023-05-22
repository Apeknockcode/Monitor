<template>
  <el-card :body-style="tableCard">

    <div class="flex items-center mb-2">
      <el-input placeholder="请输入任务id" :input-style="{ width: '200px', marginRight: '10px' }" clearable></el-input>
      <el-button @click="handleAddTask" style="margin-left: 30px;">搜索任务</el-button>
      <el-button @click="handleAddTask">新增任务</el-button>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="options">
        <template #default="scope">
          <!-- scope -->
          <el-button @click="() => { console.log('scope', scope) }">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt-2">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { CSSProperties, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const tableCard: CSSProperties = {
  padding: "10px"
}
const currentPage = ref(4) // 当前页数
const pageSize = ref(100) // 每页显示条目个数
const small = ref(true) // 是否使用小型分页样式
const background = ref(false) // 是否为分页按钮添加背景色
const disabled = ref(false)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
// 新增任务
const handleAddTask = () => {
  router.push({ path: '/buryPoint/Task' })
}
</script>

<style scoped></style>
