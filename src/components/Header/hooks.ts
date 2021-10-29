import NavListItem from "./NavListItem/index.vue";

export default {
  components: {
    NavListItem,
  },
  data() {
    return {
      logoImg: require("../../assets/images/logo_ad.png"),
    };
  },
  methods: {
    handleScrollIntoContent(menuItem: string) {
      const getElement = document.getElementById(menuItem);
      getElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
