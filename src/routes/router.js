import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Cadastro from '@/pages/Cadastro';
import Senha from '@/pages/Senha';

const routes = [
    {
        path:'/',
        component: Index
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/cadastro',
        component: Cadastro
    },
    {
        path:'/Senha',
        component: Senha
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;