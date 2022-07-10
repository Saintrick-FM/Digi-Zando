<template>
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    animated
    control-color="white"
    prev-icon="arrow_left"
    next-icon="arrow_right"
    navigation-icon="radio_button_unchecked"
    navigation
    padding
    height="300px"
    class="bg-purple text-white q-my-xs shadow-4 rounded-borders"
  >
    <q-carousel-slide name="style" class="column no-wrap flex-center">
      <q-icon name="style" size="100px" />
      <div class="q-mt-md text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <q-icon name="live_tv" size="100px" />
      <div class="q-mt-md text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  setup() {
    const list = ref([]);

    return {
      slide: ref("first"),
      list,
    };
  },
});
</script>

<style></style>
