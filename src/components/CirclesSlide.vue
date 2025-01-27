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
        class="circulo clinica position-relative"
        data-bs-container=".circulos .clinica"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Os pacientes são diagnosticados e tratados para uma ampla gama de condições médicas."
      >
        <span>Departamento de <br />Clínica Médica</span>
      </button>
    </div>
    <div class="col-6">
      <button
        type="button"
        class="circulo ensino position-relative"
        data-bs-container=".circulos .ensino"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Há uma variedade de atividades em andamento, como aulas, pesquisa científica e treinamento de residentes."
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
        class="circulo diagnostico position-relative"
        data-bs-container=".circulos .diagnostico"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="São realizados exames de imagem, como tomografias e ressonâncias magnéticas."
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
