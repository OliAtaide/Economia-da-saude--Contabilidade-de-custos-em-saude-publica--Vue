<script setup>
import GuyCircle from "./GuyCircle.vue";
import GuyRow from "./GuyRow.vue";
</script>

<template>
  <GuyRow>
    Vamos pensar na gestão dos custos. Ambos os departamentos compartilham
    recursos importantes, como
    <strong> espaço físico</strong>, <strong> equipamentos médicos </strong> e
    <strong> pessoal administrativo </strong>.
  </GuyRow>
  <GuyCircle>
    A questão é: como distribuir de forma justa esses custos? Como você
    decidirá, se for o responsável?
  </GuyCircle>
</template>

<style lang="scss">
.row .popover {
  max-width: 100% !important;
}
</style>
