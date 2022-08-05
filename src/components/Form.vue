<template>
  <el-col class="form">
    <el-form
      :inline="true"
      :model="formInline"
      ref="ruleFormRef"
      :rules="rules"
      class="ruleForm"
      :size="formSize"
      status-icon
    >
      <el-row flex justify="space-between">
        <el-col :span="15">
          <el-form-item class="input-task" prop="descricao" label="Tarefa">
            <el-col :span="24">
              <el-input
                v-model="formInline.descricao"
                placeholder="Digite a tarefa"
              ></el-input>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-row align="top">
            <label class="tempo" for="tempo">Tempo</label>
            <p id="time" class="tempo">{{ tempoDecorrido }}</p>
          </el-row>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button @click="iniciar" type="success"
              ><el-icon><VideoPlay /></el-icon
            ></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button @click="pausar" type="danger"
              ><el-icon><VideoPause /></el-icon
            ></el-button>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Salvar</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-col>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs, onUpdated, watch } from "vue";
import { FormInstance, FormRules, ElNotification } from "element-plus";
import { Tarefa } from "../dtos/Tarefa";
export default defineComponent({
  emits: ["atualizarTarefas"],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  props: {
    tarefa: {
      type: Tarefa,
      default: () => new Tarefa(),
    },
    nome: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const { tarefa } = toRefs(props);
    const { nome } = toRefs(props);
    var formInline: Tarefa = reactive(new Tarefa());

    const cronometro = ref();
    const notificacaoSucesso = () => {
      ElNotification({
        title: "Sucesso",
        message: "Tarefa salva com sucesso!",
        type: "success",
      });
    };

    watch(tarefa.value, (newValue, oldValue) => {
      prencherTarefa(newValue);
    });

    const prencherTarefa = (tf: Tarefa) => {
      formInline.descricao = tf.descricao;
      formInline.tempo = tf.tempo;
      formInline.id = tf.id;
      formInline.tempoEmSegundos = tf.tempoEmSegundos;
    };

    const atualizarTarefa = (tarefa: Tarefa) => {
      context.emit("atualizarTarefas", tarefa);
    };
    const pausado = ref(true);

    const formSize = ref("default");
    const ruleFormRef = ref<FormInstance>();
    const tempoDecorrido = computed(() => {
      return new Date(formInline.tempoEmSegundos * 1000).toISOString().substring(11, 19);
    });

    const rules = reactive<FormRules>({
      descricao: [
        { required: true, message: "Nome da tarefa é obrigatorio", trigger: "blur" },
        {
          min: 3,
          message: "A tarefa deve ser maior que dois caracteres",
          trigger: "blur",
        },
      ],
    });

    const iniciar = () => {
      if (pausado.value === true) {
        cronometro.value = setInterval(() => {
          formInline.tempoEmSegundos++;
        }, 1000);
        pausado.value = false;
      }
    };
    const zerarFormInline = () => {
      formInline.tempoEmSegundos = 0;
      formInline.descricao = "";
      formInline.tempoEmSegundos = 0;
      formInline.id = "";
    };
    const pausar = () => {
      clearInterval(cronometro.value);
      pausado.value = true;
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    const submitForm = async (formEl: FormInstance | undefined) => {
      pausar();
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          formInline.tempo = tempoDecorrido.value;
          atualizarTarefa(formInline);
          notificacaoSucesso();
          resetForm(formEl);
          formInline.tempoEmSegundos = 0;
          zerarFormInline();
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    return {
      formInline,
      tempoDecorrido,
      iniciar,
      pausar,
      submitForm,
      formSize,
      ruleFormRef,
      rules,
    };
  },
});
</script>

<style lang="css" scoped>
.form {
}
p {
  margin: 0%;
}

.tempo {
  color: #606266;
}
.task {
  width: 40em;
}
.input-task {
  width: 100%;
}
.ruleForm {
  padding-top: 30px;
}
</style>
