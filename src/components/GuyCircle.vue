<template>
  <div class="w-75 mx-auto my-4 d-flex justify-content-center gap-4">
    <img src="@/assets/guy-circle.png" alt="" />
    <div
      class="popover popover-right bs-popover-auto"
      role="tooltip"
      data-popper-placement="right"
    >
      <div class="popover-arrow" style=""></div>
      <div class="popover-body">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
    img{
        margin-bottom: auto;
    }
</style>