<template>
<div class="form">
  <el-form :inline="true" :model="formInline" >
    <el-row :gutter="10">
        <el-form-item label="Tarefa">
        <el-input v-model="formInline.task" placeholder="Digite sua tarefa aqui" />
        </el-form-item>
        <el-row align="top">
            <label  for="tempo">Tempo</label>
            <p id="time">{{formInline.time}}</p>
        </el-row>
        <el-form-item>
        <el-button type="primary"><el-icon><VideoPlay /></el-icon></el-button>
        </el-form-item>
        <el-form-item>
        <el-button type="primary"><el-icon><VideoPause /></el-icon></el-button>
        </el-form-item>
    </el-row>
  </el-form>
</div>

</template>


<script lang ="ts" >
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus'
import {VideoPlay}from '@element-plus/icons-vue'
export default defineComponent({
  name: 'Form',
  components: {
    ElInput,
  },
  data() {
      return {
      formInline: {
          task: '',
          time: '00.00.00',
      },
      };
  },
  methods: {
    onSubmit(){
        console.log(this.formInline);
    }
  },
});
</script>

<style lang="css" scoped>
.form{
    width: 100%;
    height: 100vh;
    margin-top: 30px;
}
label{
    margin-right: 10px;
}
p{
    margin: 0%;
}
.el-form-item{
    margin-left: 20px;
}
</style>