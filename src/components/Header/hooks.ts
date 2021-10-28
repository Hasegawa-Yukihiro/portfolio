export default {
  name: "Header",
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
