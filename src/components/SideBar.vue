<template>
  <header>
    <h1 class="titulo">
      <img class="img-logo" src="../../public/logo-alura.png" alt="" />
    </h1>
  </header>
</template>

<script lang ="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SideBar',
  components: {
  },
});
</script>

<style lang="css" scoped>
header {
  background: #0d3b66;
  height: 100%;
  padding-top: 1em;
  height: 100vh;
}
.img-logo {
  width: 80%;
}
.titulo{
  text-align: center;
}

</style>