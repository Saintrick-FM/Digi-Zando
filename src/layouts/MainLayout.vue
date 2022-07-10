<template>
  <q-layout view="lHh LpR fFf">
    <q-header fixed reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Digi-Zando </q-toolbar-title>
        <q-space></q-space>
        <q-btn flat outline round dense icon="search" class="q-mr-md" />
        <q-btn fab round dense size="35px" icon="shopping_cart">
          <q-badge rounded floating color="positive">2</q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <!-- drawer content -->
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-7 rounded-borders shadow-2 q-mx-xs q-pa-none text-white"
    >
      <q-toolbar class="justify-around">
        <q-tabs
          v-model="tab"
          stretch
          dense
          active-color="light-blue-3"
          switch-indicator
          active-class="elevation-20 q-badge--rounded rounded-borders shadow-up- shadow-4"
        >
          <q-tab
            :ripple="{ color: 'orange' }"
            name="tab1"
            icon="ion-home"
            size="28px"
            to="/"
          />

          <q-tab
            :ripple="{ color: 'orange' }"
            name="tab2"
            icon="ion-heart"
            size="28px"
          />

          <q-tab
            :ripple="{ color: 'orange' }"
            name="tab3"
            icon="ion-chatbubbles"
            size="28px"
          />

          <q-tab
            :ripple="{ color: 'orange' }"
            name="tab4"
            icon="ion-notifications"
            size="28px"
          />
        </q-tabs>

        <!--

 <q-btn flat round dense size="30px" icon="ion-home">
          <q-badge floating color="red">2</q-badge>
        </q-btn>
-->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      tab: ref("tab1"),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
