import { defineStore } from "pinia";

export const productsStore = defineStore("productsStore", {
  state: () => ({
    products: [
      {
        key: 1,
        liked: false,
        image: "https://wallpaperaccess.com/full/317501.jpg",
        name: "Air force one",
        price: 12000,
        countInStock: 5,
        likes: 0,
        categorie: "Baskets",
        statut: "new",
      },
      {
        key: 2,
        liked: false,
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        name: "Nike Tee shirt",
        price: 5000,
        countInStock: 35,
        likes: 50,
        categorie: "Tee-shirts",
        statut: "solde",
      },
      {
        key: 3,
        liked: false,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Boucle d'oreille",
        price: 1000,
        countInStock: 15,
        likes: 100,
        categorie: "Parrures",
        statut: "new",
      },
      {
        key: 4,
        liked: false,
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        name: "Bracelet doré",
        price: 500,
        countInStock: 25,
        likes: 15,
        categorie: "Parrures",
        statut: "solde",
      },
      {
        key: 5,
        liked: false,
        image: "https://wallpaperaccess.com/full/317501.jpg",
        name: "Air force 2",
        price: 12000,
        countInStock: 5,
        likes: 0,
        categorie: "Baskets",
        statut: "new",
      },
      {
        key: 6,
        liked: false,
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        name: "Nike Tee shirt 2",
        price: 5000,
        countInStock: 35,
        likes: 50,
        categorie: "Tee-shirts",
        statut: "solde",
      },
      {
        key: 7,
        liked: false,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Boucle d'oreille 2",
        price: 1000,
        countInStock: 15,
        likes: 100,
        categorie: "Parrures",
        statut: "new",
      },
      {
        key: 8,
        liked: false,
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        name: "Bracelet doré 2",
        price: 500,
        countInStock: 25,
        likes: 15,
        categorie: "Parrures",
        statut: "solde",
      },
    ],
  }),
  getters: {
    categoriesTop_toString: (state) =>
      state.categoriesTop.toString().concat("px"),
  },
  actions: {
    initializeSIzes(payload) {
      this.categoriesTop = payload;
    },
    setLikedProduct(index) {
      console.log("action setLikedProduct with id " + index);
      this.products.find((x) => x.key == index).liked = !this.products.find(
        (x) => x.key == index
      ).liked;

      console.log(
        "this products after changing state = " + JSON.stringify(this.products)
      );
    },
  },
});
