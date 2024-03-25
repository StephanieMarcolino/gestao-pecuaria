import { createRouter, createWebHistory } from 'vue-router';
import MenuOption from '@/views/MenuOption.vue';
import CadastroProdutor from '@/views/CadastroProdutor.vue'
import CadastroAnimal from '@/views/CadastroAnimal.vue';
import CadastroPropriedade from '@/views/CadastroPropriedade.vue'

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
    path: '/cadastro-produtor',
    name: 'Produtor',
    component: CadastroProdutor, 
  },
  {
    path: '/cadastro-propriedade',
    name: 'Propriedade',
    component: CadastroPropriedade, 
  },
  {
    path: '/cadastro-animal',
    name: 'Animal',
    component: CadastroAnimal, 
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
