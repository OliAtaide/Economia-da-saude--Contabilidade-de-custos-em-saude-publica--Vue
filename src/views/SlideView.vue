<script setup>
import CirclesSlide from "@/components/CirclesSlide.vue";
import DangerSlide from "@/components/DangerSlide.vue";
import NavButtons from "@/components/NavButtons.vue";
import NotFound from "@/components/NotFound.vue";
import SlideLast from "@/components/SlideLast.vue";
import SlideOne from "@/components/SlideOne.vue";
import SlideOneTwo from "@/components/SlideOneTwo.vue";
import SlideThree from "@/components/SlideThree.vue";
import SlideTwo from "@/components/SlideTwo.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
var id = route.params.id;

const isMounted = ref(false);
const isComplete = ref(false);
const comp = ref(NotFound);

const slides = [
  SlideOne,
  SlideTwo,
  SlideThree,
  DangerSlide,
  CirclesSlide,
  SlideOneTwo,
  SlideLast,
];

function getComp() {
  const idint = Number.parseInt(id) - 1;

  comp.value = computed(() => {
    for (let i = 0; i < slides.length; i++) {
      if (i == idint) {
        return slides[i];
      }
    }

    return NotFound;
  });

  isMounted.value = true;
}

onMounted(() => {
  getComp();
});

watch(
  () => route.params.id,
  (newId) => {
    isMounted.value = false;
    isComplete.value = false;
    id = newId;
    getComp();
  }
);
</script>

<template>
  <div :if="isMounted.value" class="container main p-3">
    <component :if="comp.value" :is="comp.value" />
  </div>
  <NavButtons :id="Number.parseInt(id)"></NavButtons>
</template>
