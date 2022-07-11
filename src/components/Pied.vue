<template>
  <div>
    <menu class="menu">
      <button class="menu-item orange">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M3.8,6.6h16.4" />
          <path d="M20.2,12.1H3.8" />
          <path d="M3.8,17.5h16.4" />
        </svg>
      </button>
      <button class="menu-item pink">
        <svg class="icon" viewBox="0 0 24 24">
          <path
            d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
          C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"
          />
          <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
        </svg>
      </button>
      <button class="menu-item active blue">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
          <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
          <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
        </svg>
      </button>
      <button class="menu-item yellow">
        <svg class="icon" viewBox="0 0 24 24">
          <path
            d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
                C3.9,4.4,4.4,3.9,5.1,3.9z"
          />
          <path d="M4.2,9.3h15.6" />
          <path d="M9.1,9.5v10.3" />
        </svg>
      </button>
      <button class="menu-item teal">
        <svg class="icon" viewBox="0 0 24 24">
          <path
            d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
                C3.9,4.4,4.4,3.9,5.1,3.9z"
          />
          <path d="M5.5,20l9.9-9.9l4.7,4.7" />
          <path
            d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z"
          />
        </svg>
      </button>
      <div class="menu-border transition"></div>
    </menu>

    <div class="svg-container">
      <svg viewBox="0 0 202.9 45.5">
        <clipPath
          id="menu"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.0049285362247413 0.021978021978022)"
        >
          <path
            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                c9.2,3.6,17.6,4.2,23.3,4H6.7z"
          />
        </clipPath>
      </svg>
    </div>
  </div>
</template>

<script>
const menuItems = document.querySelectorAll(".menu-item");
const menuBorder = document.querySelector(".menu-border");

const click = function () {
  const activeItem = document.querySelector(".menu-item.active");
  activeItem.classList.remove("active");
  this.classList.add("active");

  //setBackgroundColor();
  calculateMenuBorderPosition(true);
};
/*
const setBackgroundColor = () => {
  const activeItem = document.querySelector(".menu-item.active");
  const bgColor =
    getComputedStyle(activeItem).getPropertyValue("--bgColorBody");
  document.body.style.backgroundColor = bgColor;
};*/

const calculateMenuBorderPosition = (animateTransition = false) => {
  if (!animateTransition) {
    document.querySelector(".menu-border").classList.remove("transition");
  }

  const activeItem = document.querySelector(".menu-item.active");
  let box = activeItem.getBoundingClientRect();
  let left = box.left - (menuBorder.offsetWidth - box.width) / 2 + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

  if (!animateTransition) {
    setTimeout(() => {
      document.querySelector(".menu-border").classList.add("transition");
    }, 0);
  }
};

menuItems.forEach((item) => {
  item.addEventListener("click", click);
});

window.addEventListener("resize", function () {
  calculateMenuBorderPosition();
});

//setBackgroundColor();
calculateMenuBorderPosition();

import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pied",
  setup() {
    const word = ref("test");

    return {
      word,
    };
  },
});
</script>

<style>
:root {
  --bgColorMenu: #1d1d27;
  --animation-duration: 0.7s;
}
/* Reset */
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
}

body {
  /* Put the navigation to the bottom */
  display: flex;
  height: 100vh;
  align-items: flex-end;
  justify-content: center;
  /* set the default background */
  background-color: #ffb457;
  transition: background-color var(--animation-duration) ease-out;
}

.icon {
  /* basic styling */
  width: 44px;
  height: 44px;
  stroke: white;
  fill: transparent;

  stroke-width: 1pt;
  stroke-dasharray: 400;
}

/* animation for the svg icon */
.menu-item.active .icon {
  animation: stroke 1s reverse;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 400;
  }
}

.menu {
  /*  */
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  font-size: 16px;
  padding: 0 34px;

  background-color: var(--bgColorMenu);
}

.menu-item {
  /* unset all properties */
  all: unset;
  /* center the icons vertical and horizontally  */
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  /* make the buttons not touch the top and bottom */
  padding: 9px 0 14px;

  cursor: pointer;
  /* needed for the bubble */
  z-index: 100;
  transition: transform var(--animation-duration);
}

/* Needed for the color bubble behinde the svg icon */
.menu-item::before {
  content: "";
  z-index: -1;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  position: absolute;
  /* needed for the scale animation */
  transform: scale(0);
  transition: background-color var(--animation-duration),
    transform var(--animation-duration);
}

/* move the active item up  */
.menu-item.active {
  transform: translate3d(0, -14px, 0);
}
/* make the background animate */
.menu-item.active::before {
  transform: scale(1);
  background-color: var(--bgColorItem);
}

/* The bubble on top */
.menu-border {
  position: absolute;
  left: 0;
  bottom: 99%;
  width: 164px;
  height: 39px;

  /* The magic for the it not being a rectangle */
  clip-path: url(#menu);
  background-color: var(--bgColorMenu);
}

/* class that can be added or removed for the move animation */
.menu-border.transition {
  transition: transform var(--animation-duration);
}

/* reset for the svg container of the border */
.svg-container {
  width: 0;
  height: 0;
}

/* colors for the different colors of backgrounds and buttons */
.orange {
  --bgColorBody: #ffb457;
  --bgColorItem: #ff8c00;
}
.pink {
  --bgColorBody: #ff96bd;
  --bgColorItem: #f54888;
}

.blue {
  --bgColorBody: #9999fb;
  --bgColorItem: #4343f5;
}

.yellow {
  --bgColorBody: #ffe797;
  --bgColorItem: #e0b115;
}

.teal {
  --bgColorBody: #cffff1;
  --bgColorItem: #65ddb7;
}
</style>
