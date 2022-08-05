<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <h1 class="header">Alura Tracker</h1>
        </el-header>
        <el-main>
          <Form @atualizar-tarefas="atualizarTarefas" :nome="nome" :tarefa="tarefa" ></Form>
          <TarefaComp v-on:edit="setTarefa" :tarefas="tarefas"></TarefaComp>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import TarefaComp from "./components/TarefaComp.vue";
import { LocalStorageService } from "./service/LocalStorageService";
import { Tarefa } from './dtos/Tarefa';
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  name: "App",
  setup() {
    const tarefa= ref(new Tarefa);
    const localStorageService: LocalStorageService = new LocalStorageService();
    const tarefas = ref([]);
    const nome = ref("");
    
    const limparTarefa = () => {
      tarefa.value.id = "";
      tarefa.value.descricao = "";
      tarefa.value.tempo = "";
      tarefa.value.tempoEmSegundos = 0;
    };

    onMounted(() => {
      tarefas.value = localStorageService.getTarefas();
    });

    const setTarefa = (tf: Tarefa) => {
      prencherTarefa(tf);
    };
    const prencherTarefa = (tf: Tarefa) => {
      console.log('prencherTarefa')
      tarefa.value.descricao = tf.descricao;
      tarefa.value.tempo = tf.tempo;
      tarefa.value.id = tf.id;
      tarefa.value.tempoEmSegundos = tf.tempoEmSegundos;
    }
    const atualizarTarefas = (tf:Tarefa) => {
      localStorageService.setTarefas(tf);
      tarefas.value = localStorageService.getTarefas();
      limparTarefa();
    };
    return {
      setTarefa,
      atualizarTarefas,
      tarefas,
      tarefa,
      nome
    };
  },
  components: {
    SideBar,
    Form,
    TarefaComp,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
.el-notification.right {
  background-color: #d1f3d1;
}
.el-form-item__error {
  font-size: 16px !important;
}
.el-container {
  height: 100vh;
}
.el-aside {
  overflow: hidden !important;
}
.header {
  font-size: 2em;
  font-family: "Montserrat", cursive;
  text-align: center;
  margin-top: 1em;
}
</style>
