<template>
  <div>
    <h2>Tarefas</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="tarefa" label="tarefa" width="180" />
      <el-table-column prop="tempo" label="tempo" width="180" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Tarefa",
  setup() {
    const tableData = ref([
      {
        tarefa: "Tarefa 1",
        tempo: "00:00:00",
      },
      {
        tarefa: "Tarefa 2",
        tempo: "00:00:00",
      },
      {
        tarefa: "Tarefa 3",
        tempo: "00:00:00",
      },
      {
        tarefa: "Tarefa 4",
        tempo: "00:00:00",
      },
      {
        tarefa: "Tarefa 5",
        tempo: "00:00:00",
      },
    ]);
    return {
      tableData,
    };
  },
});
</script>
