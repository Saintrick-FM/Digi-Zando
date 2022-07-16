<template>
  <div
    style="padding-top: 40px"
    class="row q-gutter-y-lg q-px-xs doc-container justify-evenly items-start"
  >
    <div
      :style="index % 2 == 0 ? 'margin-top:0 ;' : 'margin-top:22px'"
      v-for="(item, index) in 30"
      :key="index"
      :class="
        windowWidth > 280
          ? 'col-5 shadow-2 rounded-borders'
          : 'col shadow-2 rounded-borders'
      "
    >
      Produit
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",

  setup() {
    const state = reactive({
      count: 0,
    });
    onMounted(() => {
      windowWidth.value = window.innerWidth;
    }),
      function onClickLike() {
        console.log("like cliqué " + liked);
        setLiked(!liked);
      };

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
      ...toRefs(state),
      stars: ref(4),
      windowWidth: ref(0),
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
