<template>
  <header>
    <h1>
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
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.img-logo {
  width: 100%;
}

</style>