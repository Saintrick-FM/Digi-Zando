<template>
  <q-tabs
    v-model="tab"
    flat
    sweepable
    inline-label
    active-bg-color="light-green-7"
    style="width: 100%; padding: 0 5px; height: 60px; justify-self: center"
    id="categories"
    class="q-mx-none text-white q-mt-sm flex-center bg-primary-2 shadow-10"
  >
    <q-tab
      v-for="item in categoriesItems"
      :key="item.id"
      :name="item.title"
      @click="item.selected == true"
      class="q-pa-none"
      style="border-radius: 120px"
    >
      <q-chip
        v-model:selected="categoriesItems.chaussures"
        v-model="cookies"
        color="black"
        text-color="white"
        width="50px"
      >
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="ellipsis">
          {{ item.title }}
        </div>
      </q-chip>
    </q-tab>
  </q-tabs>
  <!-- </div>

    <div class="q-mt-sm">Your pick: {{ selection }}</div> -->
</template>

<script>
import { reactive, computed, ref, onMounted } from "vue";
import { windowSizeStore } from "../../stores/window-size";

const windowSize = windowSizeStore();

export default {
  setup() {
    const cookies = ref(true);
    const categoriesItems = reactive([
      { id: 1, title: "baskets", selected: false },
      { id: 2, title: "sandales", selected: false },
      { id: 3, title: "vestes", selected: false },
      { id: 4, title: "chaussures", selected: true },
      { id: 4, title: "tee-shirt", selected: false },
    ]);

    onMounted(() => {
      /*Pass the height of the topNavBar to child components to handle onscroll banner sticky
      localStorage.setItem(
        "categories_top",
        document.querySelector("#categories").offsetTop
      );*/

      //let top = document.querySelector("#categories");
      windowSize.initializeSIzes({
        categoriesTop: document.querySelector("#categories").offsetTop,
      });
      console.log(
        "categories.offsetTop" + document.querySelector("#categories").offsetTop
      );
    });

    return {
      cookies,
      nomCategorie: "Chaussures",
      categoriesItems,
      tab: ref(categoriesItems[0].title),
      selection: computed(() => {
        return categoriesItems
          .filter((type) => type.selected === true)
          .join(", ");
      }),
    };
  },
};
</script>
<style lang="scss" scoped>
#categories.sticky {
  position: fixed;
  top: 40.2px;
  left: 0;
  background-color: $primary;
}
</style>
