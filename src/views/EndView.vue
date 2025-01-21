<template>
  <div class="container p-3 d-flex flex-column">
    <img class="img-fluid w-25 mx-auto" src="@/assets/09.png" alt="" />
    <h1 class="main-title py-3 m-0">Parabéns! Você concluiu esta atividade!</h1>
    <div class="d-flex gap-3 justify-content-center">
      <router-link to="/7" class="btn border-primary">
        <i class="bi bi-chevron-left"></i>
        Voltar
      </router-link>
      <button class="btn d-none btn-primary">
        Finalizar
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
