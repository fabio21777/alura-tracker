<template>
<el-col class="form">
  <el-form :inline="true" :model="formInline" >
    <el-row :gutter="10" flex justify="space-between">
        <el-col :span="15">
            <el-form-item label="Tarefa">
              <el-input class="task" v-model="formInline.task" placeholder="Digite sua tarefa aqui" />
            </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-row align="top">
            <label class="tempo" for="tempo">Tempo</label>
            <p id="time" class="tempo">{{formInline.time}}</p>
          </el-row>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button type="success"><el-icon><VideoPlay /></el-icon></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button type="danger"><el-icon><VideoPause /></el-icon></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button type="primary">Salva</el-button>
          </el-form-item>
        </el-col>
    </el-row>
  </el-form>
</el-col>

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
          time: '00:00:00',
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
    height: 100vh;
    margin-top: 30px;
}
label{
    margin-right: 10px;
}
p{
    margin: 0%;
}

.tempo{
  color: #606266;
}
.task{
  width:40em
}
</style>