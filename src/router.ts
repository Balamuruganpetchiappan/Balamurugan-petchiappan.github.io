import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import FormPage from './pages/FormPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/form', component: FormPage },
];

export default createRouter({
  history: createWebHistory('/demo_hackathon/'),
  routes,
});
