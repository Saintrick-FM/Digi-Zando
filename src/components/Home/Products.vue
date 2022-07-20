<template>
  <div
    style="padding-top: 40px"
    class="row q-gutter-y-lg q-px-xs doc-container justify-evenly items-start"
  >
    <q-card
      :style="
        windowWidth > 280 && index % 2 == 0
          ? 'margin-top:0 ;'
          : 'margin-top:22px'
      "
      v-for="(item, index) in 30"
      :key="index"
      :class="
        windowWidth > 280
          ? 'col-5 shadow-2 rounded-borders'
          : 'col-11 shadow-2 rounded-borders'
      "
    >
      <q-card-section
        style="height: 60%"
        class="bg-primary no-padding text-white"
      >
        <q-img
          style="height: 100%"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <q-btn
            dense
            round
            push
            style="
              position: absolute;
              right: 0px;
              top: 0.7px;
              border-top-right-radius: 0px;
            "
            :color="liked ? 'primary' : 'transparent'"
            :text-color="liked ? 'green' : 'white'"
            icon="favorite"
            class="rounded-borders; shadow-10; elevation-4"
            @click="onClickLike()"
          />
          <div
            style="height: 25px; width: 100%; padding: 0 0 7px 0"
            class="absolute-bottom flex items-center text-subtitle2 text-left"
          >
            <q-chip
              style="padding: 0 0 0 2px"
              outline
              dense
              square
              color="primary"
              text-color="white"
              icon="event"
            >
              New
            </q-chip>
          </div>
        </q-img>
      </q-card-section>

      <q-separator />

      <q-card-section style="height: 40%" align="space-between">
        <q-btn
          fab
          push
          round
          dense
          elevation-4
          color="primary"
          icon="shopping_cart"
          class="absolute"
          style="
            bottom: 0px;
            right: 0px;
            padding: 8.2px;
            border-bottom-right-radius: 0;
          "
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { windowSizeStore } from "../../stores/window-size";
import { clients } from "../../stores/clients";

//const clients = clients();

const windowSize = windowSizeStore();
console.log("windowSize.width in Products => " + windowSize.categoriesTop);

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",

  setup() {
    const liked = ref(false);
    /*const state = reactive({
      count: 0,
    });
    onMounted(() => {
      ;
    }),*/
    function onClickLike() {
      console.log("like cliqué ");
      liked.value = !liked.value;
      // clients.allClients.find(client=>client.)
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
