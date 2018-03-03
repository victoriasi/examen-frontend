import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Form from './components/Form';
import Lista from './components/ListaMateria';
import EditItem from './components/EditItem';
import NewMateria from './components/NewMateria';
import NewDocente from './components/NewDocente';
import ListaDocente from './components/ListaDocente';
import NewAula from './components/NewAula';
import ListaAula from './components/ListaAula';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/docentes',
      name: 'ListaDocente',
      component: ListaDocente
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/materias',
      name: 'ListaMateria',
      component: Lista
    },
    
    {  
      path: '/new',
      name: 'NewMateria',     
      component: NewMateria
    },

    {
      path: '/ListaDocente',
      name: 'ListaDocente',
      component: ListaDocente
    },
    
    {  
      path: '/new',
      name: 'NewDocente',     
      component: NewDocente
    },


    {
      path: '/listaAula',
      name: 'ListaAula',
      component: ListaAula
    },
    
    {  
      path: '/new',
      name: 'NewAula',     
      component: NewAula
    },




  ]
});
