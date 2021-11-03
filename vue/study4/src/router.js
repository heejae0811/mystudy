/*
    import 다음에 오는 것은 변수명이다.
    router.js 에서 import와 export는 필수!
*/
import Link from '@/components/Link.vue';
import About from "@/components/About.vue";
import Welcome from "@/components/Welcome.vue";

import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

import ButtonTotal from '@/components/ButtonTotal.vue'
import ButtonCounter from '@/components/ButtonCounter.vue'

import Input from '@/input-set/Input.vue'

const routes = [
    {
        path: '/',
        component: Link
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '/parent',
        component: Parent
    },
    {
        path: '/child',
        component: Child
    },
    {
        path: '/button-total',
        component: ButtonTotal
    },
    {
        path: '/button',
        component: ButtonCounter
    },
    {
        path: '/input',
        component: Input
    }
]

export default routes;