<template>
<el-col class="form">
  <el-form :inline="true" :model="formInline" >
    <el-row :gutter="10" flex justify="space-between">
        <el-col :span="15">
            <el-form-item class="input-task" label="Tarefa">
              <el-col :span="24">
                <el-input v-model="formInline.tarefa" placeholder="Digite a tarefa"></el-input>
              </el-col>
            </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-row align="top">
            <label class="tempo" for="tempo">Tempo</label>
            <p id="time" class="tempo">{{tempoDecorrido}}</p>
          </el-row>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button @click="iniciar()" type="success"><el-icon><VideoPlay /></el-icon></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button @click="pausar()" type="danger"><el-icon><VideoPause /></el-icon></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button type="primary">Salvar</el-button>
          </el-form-item>
        </el-col>
    </el-row>
  </el-form>
</el-col>

</template>


<script lang ="ts" >
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus'
export default defineComponent({
  name: 'Form',
  components: {
    ElInput,
  },
  data() {
      return {
      pausado: true,
      cronometro: 0 as unknown as NodeJS.Timeout,
      formInline: {
          tarefa: '',
          tempo: 0
      },
      };
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.formInline.tempo * 1000).toISOString().substring(11, 19);
    }
  },
  methods: {
    onSubmit(){
        console.log(this.formInline);
    },

    iniciar(){
      if(this.pausado){
        this.pausado = false;
        this.cronometro = setInterval(() => {
          this.formInline.tempo += 1;
        }, 1000);
      }
      this.pausado = false;
    },

    pausar(){
     this.pausado = true;
     clearInterval(this.cronometro);
  },
  }
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
.input-task{
  width: 100%;
}
</style>