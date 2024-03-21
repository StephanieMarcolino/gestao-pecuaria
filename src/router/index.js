import { createRouter, createWebHistory } from 'vue-router';
import MenuOption from '@/views/MenuOption.vue';

const routes = [
  {
    path: '/',
    redirect: '/opcao1' 
  },
  {
    path: '/opcao1',
    name: 'Opção 1',
    component: MenuOption, 
    props: { pageName: 'Opção 1' } 
  },
  {
    path: '/opcao2',
    name: 'Opção 2',
    component: MenuOption, 
    props: { pageName: 'Opção 2' } 
  },
  {
    path: '/opcao4',
    name: 'Opção 4',
    component: MenuOption, 
    props: { pageName: 'Opção 4' } 
  },
  {
    path: '/opcao5',
    name: 'Opção 5',
    component: MenuOption, 
    props: { pageName: 'Opção 5' } 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
