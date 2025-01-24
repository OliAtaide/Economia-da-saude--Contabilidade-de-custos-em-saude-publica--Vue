<script setup>
import GuyCircle from "./GuyCircle.vue";
import GuyRow from "./GuyRow.vue";
</script>

<template>
  <GuyRow>
    Vamos considerar a gestão dos custos. Cada departamento compartilha alguns
    recursos, como
    <strong> espaço físico</strong>, <strong> equipamentos médicos </strong> e
    <strong> pessoal administrativo </strong>.
  </GuyRow>
  <GuyCircle>
    Como distribuir de forma justa esses custos considerando a complexidade das
    atividades realizadas em cada departamento?
  </GuyCircle>
</template>

<style lang="scss" scoped>
.row .popover {
  max-width: 100% !important;
}

strong {
  color: #614c9a;
}
</style>
