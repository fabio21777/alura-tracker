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
          <el-form-item class="input-task" prop="tarefa" label="Tarefa">
            <el-col :span="24">
              <el-input
                v-model="formInline.tarefa"
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
            <el-button  type="primary"  @click="submitForm(ruleFormRef)">Salvar</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-col>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from "vue";
import { FormInstance, FormRules,ElNotification } from "element-plus";
export default defineComponent({
  setup() {
    const formInline = reactive({
      tarefa: "",
      tempo: "",
      tempoEmSegundos: 0,
    });
    const cronometro = ref();

    const notificacaoSucesso = () => {
        ElNotification({
          title: 'Success',
          message: 'Tarefa salva com sucesso!',
          type: 'success',
        })
      }

    const pausado = ref(true);

    const formSize = ref("default");
    const ruleFormRef = ref<FormInstance>();

    const tempoDecorrido = computed(() => {
      return new Date(formInline.tempoEmSegundos * 1000).toISOString().substring(11, 19);
    });

    const rules = reactive<FormRules>({
      tarefa: [
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

    const pausar = () => {
      clearInterval(cronometro.value);
      pausado.value = true;
    };


    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
          notificacaoSucesso();
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
.ruleForm{
  padding-top: 30px;
}
</style>
