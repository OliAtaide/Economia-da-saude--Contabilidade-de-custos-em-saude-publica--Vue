<script setup>
import CirclesSlide from "@/components/CirclesSlide.vue";
import DangerSlide from "@/components/DangerSlide.vue";
import NavButtons from "@/components/NavButtons.vue";
import NotFound from "@/components/NotFound.vue";
import SlideLast from "@/components/SlideLast.vue";
import SlideOne from "@/components/SlideOne.vue";
import SlideOneFour from "@/components/SlideOneFour.vue";
import SlideOneThree from "@/components/SlideOneThree.vue";
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

const next = ref(false);
const prev = ref(false);

const slides = [
  SlideOne,
  SlideOneTwo,
  SlideTwo,
  SlideThree,
  DangerSlide,
  CirclesSlide,
  SlideOneThree,
  SlideOneFour,
  SlideLast,
];

function getComp() {
  const idint = Number.parseInt(id) - 1;
  prev.value = idint > 0;

  next.value = Number.parseInt(id) < slides.length;
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
    prev.value = false;
    next.value = false;
    id = newId;
    getComp();
  }
);
</script>

<template>
  <div :if="isMounted.value" class="container main p-3">
    <component :if="comp.value" :is="comp.value" />
  </div>
  <NavButtons  :id="Number.parseInt(id)" :prev="prev" :next="next"></NavButtons>
</template>
