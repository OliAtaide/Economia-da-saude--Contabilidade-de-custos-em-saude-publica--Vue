<script setup>
import ImageRow from "./ImageRow.vue";
</script>

<template>
  <div class="row w-75 mx-auto">
    <div class="col d-flex flex-column gap-4">
      <div
        class="popover popover-left bs-popover-auto"
        role="tooltip"
        data-popper-placement="left"
      >
        <div class="popover-arrow" style=""></div>
        <div class="popover-body">
          Vamos pensar na gestão dos custos. Ambos os departamentos compartilham
          recursos importantes, como
          <strong> espaço físico</strong>,
          <strong> equipamentos médicos </strong> e
          <strong> pessoal administrativo </strong>.
        </div>
      </div>
      <ImageRow />
    </div>
    <div class="col-3">
      <img class="img-fluid" src="@/assets/guy.png" alt="" />
    </div>
  </div>
  <div class="w-75 mx-auto my-4 d-flex justify-content-center gap-4">
    <img src="@/assets/guy-circle.png" alt="" />
    <div
      class="popover popover-right bs-popover-auto"
      role="tooltip"
      data-popper-placement="right"
    >
      <div class="popover-arrow" style=""></div>
      <div class="popover-body">
        A questão é: como distribuir de forma justa esses custos? Como você
        decidirá, se for o responsável?
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.row .popover {
  max-width: 100% !important;
}
</style>
