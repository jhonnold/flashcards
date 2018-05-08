import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import NewSets from '@/components/NewSet'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path: '/sets/new',
    	name: 'New Set',
    	component: NewSets
    },
    {
      path: 'sets/:id',
      name: 'Set',
      component: Sets
    }
  ],
});
