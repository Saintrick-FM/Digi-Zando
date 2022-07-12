<template>
  <div style="width: 100%" class="q-mx-none q-mt-sm bg-transparent shadow-10">
    <div class="q-gutter-xs q-card--bordered rounded-borders">
      <q-tabs
        v-model="tab"
        flat
        sweepable
        inline-label
        active-bg-color="light-green-7"
        class="text-white"
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
    </div>
    <!--
    <div class="q-mt-sm">Your pick: {{ selection }}</div> -->
  </div>
</template>

<script>
import { reactive, computed, ref } from "vue";

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
