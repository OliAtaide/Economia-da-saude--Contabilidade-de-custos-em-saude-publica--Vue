<template>
  <div class="w-75 mx-auto d-flex flex-column gap-4">
    <div
      class="popover popover-top bs-popover-auto w-100"
      role="tooltip"
      style="margin: 0px; position: relative"
      data-popper-placement="top"
    >
      <div class="popover-arrow" style=""></div>
      <div class="popover-body">
        Uma abordagem seria atribuir os custos indiretos com base no percentual
        de atuação de cada departamento. Por exemplo, parte dos custos seria
        atribuída ao Departamento de Emergência, refletindo a proporção do
        espaço ocupado ou do tempo dedicado pelos funcionários administrativos.
        <br /><br />
        No entanto, essa abordagem pode não ser tão precisa, especialmente
        considerando as diferenças na natureza e na complexidade dos serviços
        prestados por cada departamento.
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex flex-wrap">
        <img class="mx-auto mb-auto" src="@/assets/guy-circle.png" alt="" />
      </div>
      <div class="col">
        <img class="img-fluid" src="@/assets/emergencia.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popover {
  max-width: 100%;
  .popover-arrow {
    left: 15%;
  }
}

.col img {
  aspect-ratio: 5 / 3;
  object-fit: cover;
}
</style>
