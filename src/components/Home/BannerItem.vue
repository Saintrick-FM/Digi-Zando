<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Eleves",
  data: () => ({
    loader: false,
    MyHeaders: [
      { text: "Nom", value: "nom", sortable: true },
      { text: "Téléphone", value: "telephone" },
      { text: "Adresse", value: "adresse", sortable: true },
      { text: "Cours", value: "matiereEnseigne", sortable: true },
      { text: "Classes", value: "classesOccupees", sortable: true },
      { text: "Admis le", value: "dateEmbauche", sortable: true },
      { text: "Actions", value: "actions", sortable: false },
    ],

    nameRules: [
      (v) => !!v || "Le nom est obligatoire",
      (v) => v.length > 6 || "Le nom doit avoir plus de 6 caractères",
    ],
    emailRules: [
      //(v) => !!v || "L'e-mail est obligatoire",
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],

    telephoneRules: [
      (v) => !!v || "Le numéro de téléphone est obligatoire",
      // (v) =>
      //   parseInt(v) == true || "Le numéro ne doit contenir que des chiffres",
      (v) =>
        v.length == 9 || "Le numéro doit contenir strictement 9 caractères",
    ],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nouvel(le) Enseignant(e)"
        : "Modification d'un(e) enseignant(e)";
    },
    ...mapGetters(["allTeachers", "allMatieres"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  beforeMount() {
    let mat = this.allMatieres;

    mat.forEach((element) => {
      this.matieres.push(element.nomMatiere);
    });
    let id_classes = [localStorage.getItem("Id_classes")];
    let classe = undefined;

    id_classes.forEach((element) => {
      classe = element.split(",");
      console.log(classe);
    });

    this.classes = classe;
    this.initialiseProf();
  },

  methods: {
    CloseAlert() {
      this.message_erreur = "";
      this.erreur = false;
    },
    async initialiseProf() {
      //   this.$store.dispatch("actionInitialiseMatiere");
      const token = "Token " + localStorage.getItem("token");
      if (localStorage.getItem("token") != null) {
        var config = {
          method: "get",
          url: "api/ecole/enseignants/",
          headers: {
            Authorization: token, // attention ici il faut pas utiliser les backticks ``pour inclure la variable token
          },
        };
        await axios(config)
          .then((response) => {
            const result = response.data;

            console.log(result);
            localStorage.setItem("Profs", result);

            let element = [];
            for (const key in result) {
              element.push(result[key]);
            }
            // let profs_cours_id=[]
            // this.allMatieres.matiereEnseigne.forEach(element => {
            // this.allMatieres.find((x) => x.nomMatiere == matiere).id
            // });

            element.forEach((prof) => {
              prof.dateEmbauche = String(prof.dateEmbauche).slice(0, 10);
            });

            this.$store.state.enseignants = element;

            this.enseignants = element;
            console.log(
              "😃😃😃 this.profs => " +
                JSON.stringify(element) +
                "this.response.data = " +
                response.data
            );
          })
          .catch(function (error) {
            console.log("😢😢😢" + error);
          });
      }
    },
  },
};
</script>
