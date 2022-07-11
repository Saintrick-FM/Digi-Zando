/* eslint-disable */
<template>
  <q-layout view="lHh LpR fFf">
    <q-header fixed reveal elevated class="bg-primary shadow-2 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Digi-Zando </q-toolbar-title>
        <q-space></q-space>
        <q-btn flat outline round dense icon="search" class="q-mr-md" />
        <q-btn fab round dense size="32px" icon="shopping_cart">
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

    <div class="navigation bg-primary shadow-2 text-white">
      <span class="nav-indicator bg-primary"></span>
      <li class="list">
        <a href="#" id="accueil" class="">
          <q-icon size="32px" class="icon" name="ion-home" />
          <!-- <span class="text">Home</span> -->
        </a>
      </li>

      <li class="list">
        <a href="#" class="" id="notifications">
          <q-icon size="32px" class="icon" name="ion-notifications" />
          <!-- <span class="text">Infos</span> -->
        </a>
      </li>
      <li class="list">
        <a href="#" id="plus" class="nav-item-active">
          <q-icon name="ion-add-circle" class="icon" />
          <!-- <span class="text">Plus</span> -->
        </a>
      </li>
      <li class="list">
        <a href="#" id="chat" class="">
          <q-icon size="32px" class="icon" name="ion-chatbubbles" />
          <!-- <span class="text">Chat</span> -->
        </a>
      </li>
      <li class="list">
        <a href="#" id="mon_espace" class="">
          <q-icon size="32px" class="icon" name="ion-heart" />
          <!-- <span class="text">Profil</span> -->
        </a>
      </li>
    </div>
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
  click() {
    console.log("a =>" + this);
    const activeItem = document.querySelector(".menu-item.active");
    activeItem.classList.remove("active");
    this.classList.add("active");
  },

  mounted() {
    const menuItems = document.querySelectorAll(".list");
    menuItems.forEach((a, index) => {
      a.addEventListener(click, click);
    });
  } /*
  mounted() {
    document.getElementById("plus").className = "nav-item-active";
  },*/,
  setup() {
    const leftDrawerOpen = ref(false);
    /*
    function animateFooter(indexClique) {
      let activeNav = document.getElementsByClassName("nav-item-active")[0];
      console.log("actuellement actif " + activeNav);

      activeNav.classList.remove("nav-item-active");

      console.log("juste après remove  " + activeNav);
      if (indexClique == 1) {
        document.getElementById("accueil").className = "nav-item-active";
      }
      if (indexClique == 2) {
        console.log("indexClique==2");
        document.getElementById("notifications").className = "nav-item-active";
      }
      if (indexClique == 3) {
        console.log("indexClique==3");

        document.getElementById("plus").className = "nav-item-active";
      }
      if (indexClique == 4) {
        console.log("indexClique==4");

        document.getElementById("chat").className = "nav-item-active";
      }
      if (indexClique == 5) {
        console.log("indexClique==5");

        document.getElementById("mon_espace").className = "nav-item-active";
      }
    }
*/
    return {
      tab: ref("tab1"),
      essentialLinks: linksList,
      //    animateFooter,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="css" scoped>
:root {
  --bg-body: #dff9fb;
  --bg-nav: #220455;
  --color-nav: #644c89;
  --color-nav-hover: #dff9fb;
}
.navigation {
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  list-style-type: none;
  border-radius: 8px;
  background-color: var(--color-nav);
  padding-inline: 10px;
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
}
.list a.nav-item-active {
  border: 2px solid var(--bg-body);
  border-radius: 50%;
  color: #dff9fb;
  transform: translateY(-30%);
  font-size: 44px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.list a .text {
  display: none;
  font-size: 16px;
}
.list a.nav-item-active .text {
  display: block;
  font-weight: 800;
}

.list a:hover {
  transform: translateY(-32px);
  color: #dff9fb;
}

.navigation .nav-indicator {
  width: 75px;
  height: 80px;
  border-radius: 50%;
  background-color: primary;
  position: absolute;
  top: -33px;
  left: 41.2%;
  transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
