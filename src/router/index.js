import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Features from "@/views/Features.vue";
import Pricing from "@/views/Pricing.vue";
import Faqs from "@/views/Faqs.vue";
import LogIn from "@/views/LogIn.vue";
import SignUp from "@/views/SignUp.vue";
import Chat from "@/views/Chat.vue";

const routes = [
  {
    path: "/",
    component: () => Home,
    meta: { title: "Your AI Code Pilot | Codexa" },
  },
  {
    path: "/features",
    component: () => Features,
    meta: { title: "Features | Codexa" },
  },
  {
    path: "/pricing",
    component: () => Pricing,
    meta: { title: "Pricing | Codexa" },
  },
  {
    path: "/faqs",
    component: () => Faqs,
    meta: { title: "FAQs | Codexa" },
  },
  {
    path: "/login",
    component: () => LogIn,
    meta: { title: "Log In | Codexa" },
  },
  {
    path: "/signup",
    component: () => SignUp,
    meta: { title: "Sign Up | Codexa" },
  },
  {
    path: "/chat",
    component: () => Chat,
    meta: { title: "Chat | Codexa" },
  },
];

const router = createRouter({
  history: createWebHistory('/codexa/'),
  routes,
});

router.afterEach((to) => {
  const defaultTitle = "Your AI Code Pilot | Codexa";
  document.title = to.meta.title || defaultTitle;
});

export default router;
