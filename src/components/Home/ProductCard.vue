<template>
  <q-card-section style="height: 60%" class="bg-primary no-padding text-white">
    <q-img style="height: 100%" :src="image">
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
        @click="onClickLike"
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
          {{ statut }}
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
</template>

<script>
import axios from "axios";
import { windowSizeStore } from "../../stores/window-size";
import { mapGetters } from "vuex";
export default {
  name: "ProductCard",
  data: () => ({
    loader: false,
    moisToPay: [],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nouvel(le) Enseignant(e)"
        : "Modification d'un(e) enseignant(e)";
    },
    monthToPayStyle() {
      let taille = this.moisToPay.length;
      return 5 <= taille <= 9
        ? "margin:0px 150px 0px 10px"
        : "margin:0px 150px 0px 5px";
    },
    ...mapGetters(["allTeachers", "allMatieres"]),
  },

  watch: {
    allFraisPayes(newValue, oldValue) {
      newValue || oldValue;
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  beforeMount() {
    let mat = this.allMatieres;
    this.initialiseProf();
  },

  methods: {
    CloseAlert() {
      this.message_erreur = "";
      this.erreur = false;
    },
  },
};
</script>
<script setup>
//import { ref, defineComponent, defineProps } from "vue";

const windowSize = windowSizeStore();
console.log("windowSize.width in ProductCard => " + windowSize.categoriesTop);

const props = defineProps(["image", "statut"]);
const liked = ref(false);

function onClickLike() {
  console.log("like cliqué ");
  liked.value = !liked.value;
}

/*
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ProductCard",
  props: defineProps(["image", "statut"]),

  setup() {
    const liked = ref(false);

    function onClickLike() {
      console.log("like cliqué ");
      liked.value = !liked.value;
    }

    return {
      stars: ref(4),
      liked,
      onClickLike,
      props.image,
      statut,
      windowWidth: ref(window.innerWidth),
    };
  },
});
*/
</script>

<style></style>
