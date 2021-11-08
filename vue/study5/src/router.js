import Layout from '@/components/Layout.vue'
import Layout2 from '@/components/Layout2.vue'
import Parent from '@/components/Parent.vue'
import Child from '@/components/Child.vue'
import Index from '@/components/lists/Index.vue'
import List from '@/components/lists/List.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/layout',
        component: Layout
    },
    {
        path: '/layout2',
        component: Layout2
    },
    {
        path: '/parent',
        component: Parent
    },
    {
        path: '/child',
        component: Child
    }
]

export default routes;