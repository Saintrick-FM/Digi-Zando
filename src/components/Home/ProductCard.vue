<template>
  <q-card-section
    style="height: 130px"
    class="bg-primary no-padding text-white"
  >
    <q-img height="inherit" :src="image">
      <q-btn
        @click="clickLike"
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

  <q-card-section style="height: 70px" align="space-between">
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
        bottom: 3.05px;
        right: 0.5px;
        padding: 6px;
        border-bottom-right-radius: 0;
      "
    />
  </q-card-section>
</template>

<script>
import axios from "axios";
import { windowSizeStore } from "../../stores/window-size";
//import { mapGetters } from "vuex";
export default {
  name: "ProductCard",
  data: () => ({
    liked: false,
    stars: 4,
    windowWidth: null,
  }),
  props: ["image", "statut"],

  computed: {
    /*formTitle() {
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
    ...mapGetters(["allTeachers", "allMatieres"]),*/
  },

  watch: {
    /*  allFraisPayes(newValue, oldValue) {
      newValue || oldValue;
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },*/
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    console.log(
      "Mounted 😻 window width in ProductCard => " + this.windowWidth
    );
  },
  beforeMount() {
    console.log("before mount");
    //this.initialise;
  },

  methods: {
    clickLike() {
      console.log("like cliqué ");
      this.liked = !this.liked;
    },
  },
};
</script>

<style></style>
