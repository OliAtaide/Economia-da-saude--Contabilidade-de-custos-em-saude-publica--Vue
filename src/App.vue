<template>
  <HeaderView></HeaderView>
  <h1 class="main-title py-3 m-0">Atribuição de Custos Indiretos</h1>
  <router-view />
  <FooterView></FooterView>
</template>

<script setup>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
</script>

<style lang="scss" src="@/assets/style.scss"></style>
