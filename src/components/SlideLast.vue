<template>
  <div class="card">
    <div class="card-body">
      <img src="@/assets/machines.svg" alt="" />
      <span>
        Uma abordagem seria atribuir os custos indiretos com base na proporção
        de espaço físico ocupado por cada departamento. No entanto, isso pode
        não refletir adequadamente a verdadeira utilização dos recursos,
        especialmente considerando que o Departamento de Diagnóstico por Imagem
        pode exigir equipamentos mais caros e sofisticados.
        <br /><br />
        Outra opção seria atribuir os custos com base na complexidade das
        atividades realizadas em cada departamento. Por exemplo, o Departamento
        de Diagnóstico por Imagem receberia uma parcela maior dos custos,
        refletindo a necessidade de equipamentos especializados e pessoal
        altamente qualificado. No entanto, isso pode gerar debates sobre como
        medir e comparar a complexidade das atividades entre os diferentes
        departamentos.
      </span>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 240px;
}

.card-body {
  display: flex;
  align-items: center;
  gap: 2em;
}
</style>
