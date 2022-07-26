<template>
  <div style="padding-top: 40px; margin-bottom: 40px" class="q-px-xs">
    <div
      class="row bg-transparent q-gutter-y-lg doc-container justify-evenly items-start"
    >
      <q-intersection
        transition="scale"
        transition-duration="100"
        v-for="(product, index) in products"
        :key="product.key"
        :style="
          windowWidth > 280 && index % 2 == 0
            ? 'margin-top:0; height:200px'
            : 'margin-top:22px; height:200px'
        "
        :class="
          windowWidth > 280
            ? 'col-5 shadow-2 rounded-borders'
            : 'col-11 shadow-2 rounded-borders'
        "
      >
        <product-card
          :image="product.image"
          :id="product.key"
          :statut="product.statut"
        />
      </q-intersection>
    </div>
    <q-chip
      style="
        display: flex;
        position: relative;
        left: 0;
        height: 25px;
        width: max-content;
        margin: -12px 0 10px 15px;
      "
      color="black"
      class="glossy no-border doc-container q-ml-xs"
      text-color="white"
    >
      <!-- :id='item.title' -->
      <q-avatar style="height: inherit">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <div class="ellipsis" style="height: inherit">Autres articles</div>
    </q-chip>
    <q-carousel
      swipeable
      animated
      transition-prev="jump-right"
      transition-next="jump-left"
      v-model="slide"
      ref="carousel"
      height="200px"
      class="bg-transparent q-mx-auto no-border q-mb-xs shadow-2 q-pa-none"
      style="width: 90%"
    >
      <q-carousel-slide
        v-for="(product, index) in products"
        :key="product.key"
        style="height: 200px"
        :class="
          windowWidth > 280
            ? 'col-5 no-padding shadow-2 rounded-borders'
            : 'col-11 no-padding shadow-2 rounded-borders'
        "
        :name="index"
      >
        <product-card
          :image="product.image"
          :statut="product.statut"
          :id="index"
        />
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control position="top" :offset="[0, 0]" class="q-gutter-xs">
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
            v-if="slide != 1"
          />
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_right"
            @click="$refs.carousel.next()"
            v-if="slide != 4"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { windowSizeStore } from "../../stores/window-size";
import ProductCard from "../../components/Home/ProductCard.vue";
import { clients } from "../../stores/clients";
const data = require("../../assets/data/products.json");
//const clients = clients();

const windowSize = windowSizeStore();
console.log("windowSize.width in Products => " + windowSize.categoriesTop);

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components: {
    ProductCard,
  },

  setup() {
    const liked = ref(false);
    const products = ref(data);

    function onClickLike() {
      console.log("like cliqué ");
      liked.value = !liked.value;
      // clients.allClients.find(client=>client.)
    }
    function clickProduct(item) {
      console.log("Produit cliqué " + item.name);
    }

    function addCart(element) {
      console.log("element a ajouté " + JSON.stringify(element));
      console.log("cart actuelle" + JSON.stringify(cart));

      if (cart.lenght > 0) {
        let alreadyAdd = cart.find((item) => element.name === item.name);
        console.log(
          "methode find " + cart.find((item) => element.name === item.name)
        );
        if (alreadyAdd) {
          console.log("alreadyAdd " + alreadyAdd);
          setCart(cart.filter((item) => item.name !== alreadyAdd.name));
        } else {
          console.log("not alreadyAdd " + alreadyAdd);
          setCart((prevState) => {
            return { ...prevState, element };
          });
        }
      } else {
        console.log("not element yet " + cart);
        setCart(cart.push(element));
      }

      console.log("cart =>" + JSON.stringify(cart));
    }

    return {
      //...toRefs(state),
      stars: ref(4),
      liked,
      onClickLike,
      clickProduct,
      products,
      tab: ref(products.value[0].name),
      slide: ref(1),
      windowWidth: ref(window.innerWidth),
    };
  },
});
</script>

<style lang="css" scoped>
.row {
  background: rgba(255, 0, 0, 0.1);
}
.row > div {
  background: rgba(86, 61, 124, 0.15);
  border: 2px solid rgba(86, 61, 124, 0.2);
  height: 220px;
}

/*
.container
  height: 100%
  border-radius: 10px
  align-items: center
  background-colorolor: white

.LikeBtn
    position:absolute
    right: 0
    top: 5
*/
</style>
