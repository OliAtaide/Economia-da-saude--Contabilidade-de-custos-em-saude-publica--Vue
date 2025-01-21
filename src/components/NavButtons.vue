<template>
  <div class="container p-0 d-flex justify-content-between my-3">
    <router-link
      :to="props.prev ? `${props.id - 1}` : '/'"
      class="btn border-primary"
      v-if="props.id != 0"
    >
      <i class="bi bi-chevron-left"></i>
      Voltar
    </router-link>
    <router-link
      :to="props.next ? `${props.id + 1}` : '/end'"
      class="btn btn-primary ms-auto"
    >
      Próximo
      <i class="bi bi-chevron-right"></i>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["id", "prev", "next"]);
console.log(props);
</script>
