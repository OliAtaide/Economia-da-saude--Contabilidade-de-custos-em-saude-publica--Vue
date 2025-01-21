<template>
  <div class="alert alert-primary">
    Considere um exemplo envolvendo um hospital universitário que possui
    diferentes áreas, incluindo o
    <strong>Departamento de Ensino e Pesquisa</strong>, o
    <strong>Departamento de Clínica Médica</strong> e o
    <strong>Departamento de Diagnóstico por Imagem</strong>.
  </div>
  <div class="hint">
    Clique em cima das figuras para interagir
    <i class="bi bi-mouse2"></i>
  </div>
  <div class="row circulos">
    <div class="col-12">
      <button
        type="button"
        class="circulo clinica"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Profissionais correm contra o tempo para atender os pacientes em situações críticas."
      >
        <span>Departamento de <br />Clínica Médica</span>
      </button>
    </div>
    <div class="col-6">
      <button
        type="button"
        class="circulo ensino"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Profissionais correm contra o tempo para atender os pacientes em situações críticas."
      >
        <span
          >Departamento <br />
          de Ensino <br />
          e Pesquisa</span
        >
      </button>
    </div>
    <div class="col-6">
      <button
        type="button"
        class="circulo diagnostico"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Cirurgiões realizam procedimentos complexos para restaurar a saúde dos pacientes."
      >
        <span>
          Departamento
          <br />
          de Diagnóstico
          <br />
          por Imagem
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Popover } from "bootstrap";
import { onMounted } from "vue";

onMounted(() => {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  [...popoverTriggerList].map(
    (popoverTriggerEl) => new Popover(popoverTriggerEl)
  );
});
</script>
