<template>
  <banner />
  <categories-slides />
</template>

<script>
import { defineComponent } from "vue";
import Banner from "components/Home/Banner.vue";
import CategoriesSlides from "src/components/Home/CategoriesSlides.vue";
//import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    Banner,
    CategoriesSlides,
  },
});
</script>

<style></style>
