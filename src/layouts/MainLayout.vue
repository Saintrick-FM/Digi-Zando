/* eslint-disable */
<template>
  <q-layout view="lHh LpR fFf">
    <q-header fixed elevated class="bg-primary shadow-2 text-white">
      <q-toolbar>
        <q-btn dense flat round push icon="menu" @click="toggleLeftDrawer" />

        <!-- style="text-overflow: unset, " -->
        <q-toolbar-title class="mainTitle" v-if="!inputSearch"
          >Digi Zando</q-toolbar-title
        >
        <v-space v-if="halfScreen * 2 > 275"></v-space>

        <q-toolbar class="text-white searchContainer">
          <q-btn
            round
            flat
            class="flex-center"
            style="margin-right: 2px"
            dense
            icon="search"
            @click="shawInputSearch"
          />

          <!-- Must add bottom-slots propertie to enable showing messages errors
            aria-placeholder="entrer le produit à rechercher"-->
          <q-input
            input-class="text-left"
            dark
            dense
            standout
            label="Recherche"
            v-model="search"
            v-if="inputSearch"
            style="transition: 0.5s"
          >
            <template v-slot:append>
              <q-icon
                v-if="text === ''"
                name="ios-create"
                @click="search = ''"
                class="cursor-pointer"
              />
              <q-icon
                v-else
                name="clear"
                @click="search = ''"
                class="cursor-pointer"
              />
            </template>
            <!-- <template v-slot:hint>
              Produit introuvable
            </template> -->
          </q-input>
        </q-toolbar>

        <q-btn fab push round dense size="32px" icon="shopping_cart">
          <q-badge rounded floating color="positive">4</q-badge>
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

    <q-page-container id="page_container">
      <router-view />
    </q-page-container>

    <q-footer fixed class="navigation bg-primary shadow-2 text-white">
      <span class="nav-indicator bg-primary"></span>
      <li class="list">
        <a
          href="#"
          @click="animateFooter(1)"
          :class="active_home ? 'nav-item-active' : ''"
          id="accueil"
          class=""
        >
          <q-icon
            :size="active_home ? '40px' : '32px'"
            :class="
              active_home
                ? 'shadow-10 justify-center items-center icon'
                : 'icon'
            "
            name="ion-home"
            :background-color="active_home ? 'orange' : 'white'"
          />
          <span class="text q-mt-xs">Home</span>
        </a>
      </li>

      <li class="list">
        <a
          href="#"
          @click="animateFooter(2)"
          :class="active_notif ? 'nav-item-active' : ''"
          id="notifications"
        >
          <q-icon
            :size="active_notif ? '40px' : '32px'"
            :class="
              active_notif
                ? 'shadow-10 justify-center items-center icon'
                : 'icon'
            "
            name="ion-notifications"
            :color="active_notif ? 'positive-5' : 'white'"
          />
          <span class="text q-mt-xs">Infos</span>
        </a>
      </li>
      <li class="list q-fab">
        <a
          href="#"
          @click="animateFooter(3)"
          :class="
            active_plus ? 'nav-item-active items-center justify-center' : ''
          "
          id="plus"
        >
          <q-icon
            :size="active_plus ? '40px' : '32px'"
            :class="
              active_plus
                ? 'shadow-10 justify-center items-center icon'
                : 'icon'
            "
            name="ion-add-circle"
          />
          <span class="text q-mt-xs">Plus</span>
        </a>
      </li>
      <li class="list">
        <a
          href="#"
          @click="animateFooter(4)"
          :class="active_chat ? 'nav-item-active' : ''"
          id="chat"
          class=""
        >
          <q-icon
            :size="active_chat ? '40px' : '32px'"
            :class="
              active_chat
                ? 'shadow-10 justify-center items-center icon'
                : 'icon'
            "
            name="ion-chatbubbles"
          />
          <span class="text q-mt-xs">Chat</span>
        </a>
      </li>
      <li class="list">
        <a
          :class="active_mon_espace ? 'nav-item-active' : ''"
          href="#"
          @click="animateFooter(5)"
          id="mon_espace"
        >
          <q-icon
            :size="active_mon_espace ? '40px' : '32px'"
            :class="
              active_mon_espace
                ? 'shadow-10 justify-center items-center icon'
                : 'icon'
            "
            class="icon"
            name="ion-contact"
          />
          <span class="text q-mt-xs">Profil</span>
        </a>
      </li>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { windowSizeStore } from "../stores/window-size";

const windowSize = windowSizeStore();

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

window.onscroll = function () {
  // let bannerHeight = parseInt(localStorage.getItem("banner_height"));
  // let categoriesTop = parseInt(localStorage.getItem("categories_top"));

  console.log(
    "window.pageYOffset on scroll => " +
      window.pageYOffset +
      "ctegoriesTop " +
      windowSize.categoriesTop.categoriesTop
  );

  if (window.pageYOffset >= windowSize.categoriesTop.categoriesTop) {
    document.querySelector("#categories").classList.add("sticky");
  } else {
    document.querySelector("#categories").classList.remove("sticky");
  }
};
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const active_home = ref(false);
    const active_notif = ref(false);
    const active_plus = ref(true);
    const active_mon_espace = ref(false);
    const active_chat = ref(false);
    const halfScreen = ref();
    const halfnavIndicator = ref();
    const quartScreen = ref();
    const inputSearch = ref(false);

    function shawInputSearch() {
      document.querySelector(".searchContainer").classList.toggle("active");
      if (inputSearch.value) {
        setTimeout(() => {
          inputSearch.value = !inputSearch.value;
        }, 200);
      } else {
        inputSearch.value = !inputSearch.value;
      }
    }

    onMounted(() => {
      console.log(
        "Main layount mounted. Value of categoriesTop = " +
          windowSize.categoriesTop
      );
      //set main title to 19px for small devices

      window.innerHeight;
      if (window.innerWidth < 280) {
        document.querySelector(".mainTitle").style.fontSize = "19px";
      }

      halfScreen.value = window.innerWidth / 2;
      halfnavIndicator.value =
        document.querySelector(".nav-indicator").clientWidth / 2;
      quartScreen.value = halfScreen.value / 2;

      let total = halfScreen.value - halfnavIndicator.value;

      document.querySelector(".nav-indicator").style.left = total
        .toString()
        .concat("px");
      //set top of nav-indicator
      if (window.innerWidth <= 300) {
        document.querySelector(".nav-indicator").style.top = "-23px";
      } else if (300 < window.innerWidth < 360) {
        document.querySelector(".nav-indicator").style.top = "-25px";
      } else {
        document.querySelector(".nav-indicator").style.top = "-30px";
      }
    });

    function animateFooter(indexClique) {
      let activeNav = document.getElementsByClassName("nav-item-active")[0];
      console.log("actuellement actif " + activeNav);

      console.log("juste après remove  " + activeNav);

      if (indexClique == 1) {
        active_home.value = true;
        active_plus.value = false;
        active_notif.value = false;
        active_chat.value = false;
        active_mon_espace.value = false;

        document.querySelector(".nav-indicator").style.left = "10px";
      }
      if (indexClique == 2) {
        console.log("indexClique==2");

        active_notif.value = true;
        active_plus.value = false;
        active_chat.value = false;
        active_mon_espace.value = false;
        active_home.value = false;

        let total2 = quartScreen.value - halfnavIndicator.value + 16.5;
        document.querySelector(".nav-indicator").style.left = total2
          .toString()
          .concat("px");
      }
      if (indexClique == 3) {
        console.log("indexClique==3");
        active_plus.value = true;
        active_notif.value = false;
        active_chat.value = false;
        active_mon_espace.value = false;
        active_home.value = false;

        let total3 = halfScreen.value - halfnavIndicator.value;

        document.querySelector(".nav-indicator").style.left = total3
          .toString()
          .concat("px");
      }
      if (indexClique == 4) {
        console.log("indexClique==4");
        active_chat.value = true;
        active_plus.value = false;
        active_notif.value = false;
        active_mon_espace.value = false;
        active_home.value = false;

        let total4 =
          window.innerWidth - quartScreen.value - halfnavIndicator.value - 16;
        console.log(
          "total 4 " + total4 + " window.innerWidth " + window.innerWidth
        );
        document.querySelector(".nav-indicator").style.left = total4
          .toString()
          .concat("px");
      }
      if (indexClique == 5) {
        console.log("indexClique==5");

        active_mon_espace.value = true;
        active_plus.value = false;
        active_notif.value = false;
        active_chat.value = false;
        active_home.value = false;

        let total5 = window.innerWidth - 9.5 - halfnavIndicator.value * 2;
        console.log("total5 " + total5);
        document.querySelector(".nav-indicator").style.left = total5
          .toString()
          .concat("px");
      }
    }

    return {
      tab: ref("tab1"),
      search: ref(""),
      inputSearch,
      essentialLinks: linksList,
      active_mon_espace,
      active_plus,
      active_notif,
      active_chat,
      active_home,
      halfScreen,
      shawInputSearch,
      animateFooter,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
:root {
  --bg-body: #dff9fb;
  --bg-nav: #220455;
  --color-nav: #644c89;
  --color-nav-hover: #dff9fb;
}
.searchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  transition: width 0.5s;
  border-radius: 60px;
}
.searchContainer.active {
  width: 300px;
  transition: width 0.5s;
}
.navigation {
  position: fixed;
  bottom: 0;
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  list-style-type: none;
  border-radius: 8px;
  background-color: var(--color-nav);
  padding-inline: 14px;
  z-index: 999;
}

.list a {
  text-decoration: none;
  color: var(--color-nav);
  height: 100%;
  display: inline-grid;
  place-items: center;
  font-size: 30px;
  position: relative;
  z-index: 1;
  border-radius: 50%;
  border: 2px solid var(--bg-body);

  transition: all 0.5s;
}
.list a.nav-item-active {
  transform: translate3d(0, -14px, 0);
}

.list a .text {
  display: none;
  font-size: 16px;
}
.list a.nav-item-active .icon {
  color: $light-green-13;
  border-radius: 50%;
}
.list a.nav-item-active .text {
  display: block;
  font-weight: 800;
  color: $light-green-13;
}

.navigation .nav-indicator {
  min-width: 50px;
  /* width: 75px;
  height: 80px; */
  min-height: 60px;
  border-radius: 45%;
  background-color: primary;
  position: absolute;
  transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#page_container {
  background-color: rgba(255, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
</style>
