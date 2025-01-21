<template>
  <div class="container main p-3">
    <div class="caption">
      Imagine um hospital movimentado, onde dois departamentos desempenham
      papéis cruciais: o Departamento de Emergência e o Departamento de
      Cirurgia.
    </div>
    <div class="hint">
      Clique em cima das figuras para interagir
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5002 7.68921C12.141 7.68921 11.8521 7.97819 11.8521 8.33736V9.86823C11.8521 10.2274 12.141 10.5164 12.5002 10.5164C12.8539 10.5164 13.1484 10.2252 13.1484 9.86823V8.33736C13.1484 7.98036 12.8539 7.68921 12.5002 7.68921ZM10.8521 8.33736C10.8521 7.42591 11.5888 6.68921 12.5002 6.68921C13.4018 6.68921 14.1484 7.42374 14.1484 8.33736V9.86823C14.1484 10.7819 13.4018 11.5164 12.5002 11.5164C11.5888 11.5164 10.8521 10.7797 10.8521 9.86823V8.33736Z"
          fill="#446AB8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 3.62744C12.7761 3.62744 13 3.8513 13 4.12744V7.18918C13 7.46532 12.7761 7.68918 12.5 7.68918C12.2239 7.68918 12 7.46532 12 7.18918V4.12744C12 3.8513 12.2239 3.62744 12.5 3.62744Z"
          fill="#446AB8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.2991 14.951V9.04896C17.2991 6.39843 15.1504 4.24976 12.4999 4.24976C9.84936 4.24976 7.70068 6.39843 7.70068 9.04896V14.951C7.70068 17.6016 9.84936 19.7502 12.4999 19.7502C15.1504 19.7502 17.2991 17.6016 17.2991 14.951ZM12.4999 3.24976C9.29708 3.24976 6.70068 5.84615 6.70068 9.04896V14.951C6.70068 18.1539 9.29708 20.7502 12.4999 20.7502C15.7027 20.7502 18.2991 18.1539 18.2991 14.951V9.04896C18.2991 5.84615 15.7027 3.24976 12.4999 3.24976Z"
          fill="#446AB8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3726 10.8528H7.31006V9.85278H11.3726V10.8528Z"
          fill="#446AB8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.7109 10.8528H13.6484V9.85278H17.7109V10.8528Z"
          fill="#446AB8"
        />
      </svg>
    </div>
    <div class="losangos">
      <button
        type="button"
        class="losango emergencia"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Profissionais correm contra o tempo para atender os pacientes em situações críticas."
      >
        <span>Departamento de Emergência</span>
      </button>
      <div class="losango central">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.13751 44.5625C8.13751 44.0102 8.58523 43.5625 9.13751 43.5625H39.1375C39.6898 43.5625 40.1375 44.0102 40.1375 44.5625C40.1375 45.1148 39.6898 45.5625 39.1375 45.5625H9.13751C8.58523 45.5625 8.13751 45.1148 8.13751 44.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.1375 9.5625H10.1375V7.5625H19.1375V9.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.1375 9.5625H30.1375V7.5625H39.1375V9.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1375 12.5625H11.1375V10.5625H17.1375V12.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.1375 12.5625H31.1375V10.5625H37.1375V12.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1375 39.5625H16.1375V37.5625H32.1375V39.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.1375 8.5625V16.5625H23.1375V8.5625H25.1375Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.1375 11.5625H28.1375V13.5625H20.1375V11.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.1375 7.5625H19.1375V17.5625H29.1375V7.5625ZM19.1375 5.5625H29.1375C30.2421 5.5625 31.1375 6.45793 31.1375 7.5625V17.5625C31.1375 18.6671 30.2421 19.5625 29.1375 19.5625H19.1375C18.0329 19.5625 17.1375 18.6671 17.1375 17.5625V7.5625C17.1375 6.45793 18.0329 5.5625 19.1375 5.5625Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1375 43.5625V8.5625H13.1375V43.5625H11.1375Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.1375 43.5625V8.5625H37.1375V43.5625H35.1375Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.1375 43.5625V39.5625H25.1375V43.5625H23.1375Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.1375 43.5625V39.5625H31.1375V43.5625H29.1375Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1375 43.5625V39.5625H19.1375V43.5625H17.1375Z"
            fill="white"
          />
          <path
            d="M16.1375 21.5625H20.1375V24.5625H16.1375V21.5625Z"
            fill="white"
          />
          <path
            d="M16.1375 26.5625H20.1375V29.5625H16.1375V26.5625Z"
            fill="white"
          />
          <path
            d="M16.1375 31.5625H20.1375V34.5625H16.1375V31.5625Z"
            fill="white"
          />
          <path
            d="M22.1375 21.5625H26.1375V24.5625H22.1375V21.5625Z"
            fill="white"
          />
          <path
            d="M22.1375 26.5625H26.1375V29.5625H22.1375V26.5625Z"
            fill="white"
          />
          <path
            d="M22.1375 31.5625H26.1375V34.5625H22.1375V31.5625Z"
            fill="white"
          />
          <path
            d="M28.1375 21.5625H32.1375V24.5625H28.1375V21.5625Z"
            fill="white"
          />
          <path
            d="M28.1375 26.5625H32.1375V29.5625H28.1375V26.5625Z"
            fill="white"
          />
          <path
            d="M28.1375 31.5625H32.1375V34.5625H28.1375V31.5625Z"
            fill="white"
          />
        </svg>
      </div>
      <button
        type="button"
        class="losango cirurgia"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Cirurgiões realizam procedimentos complexos para restaurar a saúde dos pacientes."
      >
        <span> Departamento de Cirurgia </span>
      </button>
    </div>
  </div>
  <NavButtons id="0"></NavButtons>
</template>

<script setup>
import NavButtons from "@/components/NavButtons.vue";
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


