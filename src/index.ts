import Vue from "vue";
import Home from "./Pages/Home/index.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "scroll-behavior-polyfill";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue(Home).$mount("#root");
