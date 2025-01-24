<script setup>
import GuyRow from "./GuyRow.vue";
</script>

<template>
  <GuyRow>
    Vamos considerar a gestão dos custos. Cada departamento compartilha alguns
    recursos, como
    <strong> espaço físico</strong>, <strong> equipamentos médicos </strong> e
    <strong> pessoal administrativo </strong>.
  </GuyRow>
</template>

<style lang="scss" scoped>
.row .popover {
  max-width: 100% !important;
}

strong{
    color: #614c9a;
}
</style>
