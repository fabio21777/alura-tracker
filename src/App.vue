<template>
  <div>
    <el-row :gutter="50">
      <el-col :span="6">
        <SideBar></SideBar>
      </el-col>
      <el-col :span="18">
        <Form></Form>
      </el-col>
      
    </el-row>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus'
import SideBar from './components/SideBar.vue';
import Form from './components/Form.vue';


export default defineComponent({
  name: 'App',
  components: {
    ElButton,
    SideBar,
    Form
  },
});
</script>

<style>
#app {
  margin: 0%;
  padding: 0%;
}
body{
  margin: 0%;
  padding: 0%;
}
</style>
