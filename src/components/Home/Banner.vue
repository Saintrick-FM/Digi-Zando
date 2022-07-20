<template>
  <q-carousel
    v-model="slide"
    swipeable
    navigation
    navigation-position="left"
    infinite
    :autoplay="autoplay"
    transition-prev="slide-right"
    transition-next="slide-left"
    @click="autoplay = false"
    height="25vh"
    class="bg-black text-white q-ma-xs q-mb-none shadow-4 rounded-borders"
    id="banner"
  >
    <q-carousel-slide
      v-for="item in list"
      :key="item.id"
      :name="item.id"
      :img-src="item.url"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h6 text-amber-10">{{ item.title }}</div>
        <div class="text-subtitle1 q-mr-xs">{{ item.description }}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
const data = require("../../assets/data/bannerItems.json");

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  setup() {
    const list = ref(data);

    onMounted(() => {
      console.log("banner mounted in banner component");
    });

    return {
      slide: ref(1),
      autoplay: ref(true),
      list,
    };
  },
});
</script>

<style lang="css" scoped>
.q-carousel__navigation--left {
  left: "0px";
}

.custom-caption {
  height: 45%;
  width: 100%;
  text-align: right;
  padding: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
