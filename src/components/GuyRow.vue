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
            <slot></slot>
        </div>
      </div>
      <ImageRow />
    </div>
    <div class="col-3">
      <img class="img-fluid" src="@/assets/guy.png" alt="" />
    </div>
  </div>
</template>
