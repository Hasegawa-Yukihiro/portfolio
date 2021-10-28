import NavListItem from "./NavListItem/index.vue";

export default {
  name: "Header",
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
      const toScroll = document.getElementById(menuItem);
      toScroll.scrollIntoView({ behavior: "smooth" });
    },
  },
};
