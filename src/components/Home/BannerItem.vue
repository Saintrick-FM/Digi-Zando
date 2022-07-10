<template>
  <q-card class="cardView">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-card-section class="textView">
      <div class="text-h6 itemTitle">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BannerItem",
  props: {
    image: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {
      slide: ref("first"),
    };
  },
});
</script>

<style>
.cardView {
  width: 90%;
  height: auto;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  /* shadowC: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,*/
}

.textView {
  position: absolute;
  bottom: 10;
  margin: 10;
  left: 5;
}
.image {
  width: 98%;
  height: auto;
  border-radius: 10px;
}
.itemTitle {
  color: white;
  font-size: 22px;
  /*shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5*/
  margin-bottom: 5;
  font-weight: "bold";
}
.itemDescription {
  color: white;
  font-size: 12;
  /* shadowolor: '#000'
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5*/
}
</style>
