<template>
  <div
    style="padding-top: 40px"
    class="row q-gutter-y-lg q-px-xs doc-container justify-evenly items-start"
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

    <q-tabs
      v-model="tab"
      flat
      sweepable
      active-bg-color="light-green-7"
      style="width: 100%; padding: 0 5px; height: 60px; justify-self: center"
      class="q-mx-none text-white q-mt-sm flex-center bg-transparent shadow-10"
    >
      <q-tab
        v-for="item in products"
        :key="item.id"
        :name="item.name"
        @click="clickProduct(item)"
        class="q-pa-none"
        style="border-radius: 120px"
      >
        <product-card :image="item.image" :statut="item.statut" />
      </q-tab>
    </q-tabs>
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
