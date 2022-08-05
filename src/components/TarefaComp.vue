<template>
  <div>
    <h2>Tarefas</h2>
    <el-table :data="tarefas">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column prop="descricao" label="tarefa" />
      <el-table-column prop="tempo" label="tempo" />
      <el-table-column>
        <template #default="scope">
          <Edit
            @click="edit(scope.row)"
            style="width: 1em; height: 1em; margin-right: 8px"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Tarefa } from "@/dtos/Tarefa";
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TarefaComp",
  emits: ["edit"],
  props: {
    tarefas: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const novaTarefa = (tarefa: Tarefa) => {
      context.emit("edit", tarefa);
    };
    const edit = (tarefa: Tarefa | any) => {
      novaTarefa(tarefa);
    };
    return {
      edit,
    };
  },
});
</script>
