import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import NewSet from '@/components/NewSet';
import SingleSet from '@/components/SingleSet';

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
    	component: NewSet,
    },
    {
      path: '/sets/:id',
      name: 'Single Set',
      component: SingleSet,
    }
  ],
});
