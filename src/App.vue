<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <h1 class = "header"> Alura Tracker</h1>
        </el-header>
        <el-main>
          <Form></Form>
          <Tarefa></Tarefa>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import Tarefa from "./components/Tarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    ElButton,
    SideBar,
    Form,
    Tarefa
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  overflow: hidden
}
.el-notification.right {
  background-color: #d1f3d1;
}
.el-form-item__error {
  font-size: 16px !important;
}
.el-aside{
  overflow: hidden !important;
}
.header{
  font-size: 2em;
  font-family: 'Montserrat', cursive;
  text-align: center;
  margin-top: 1em;
}
</style>
