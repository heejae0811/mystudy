import Welcome from "@/components/Welcome.vue";
import About from "@/components/About.vue";

import Home from "@/pages/Home.vue";
import Navigation from "@/pages/Navigation.vue";

import Page1 from "@/pages/Page1.vue";
import Page2 from "@/pages/Page2.vue";

const routes = {
	'/': Welcome,
	'/about': About,

    '/home': Home,
    '/navigation': Navigation,

    '/page1': Page1,
    '/page2': Page2
}

export default routes;