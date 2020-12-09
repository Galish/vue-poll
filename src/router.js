import { createWebHistory, createRouter } from 'vue-router'
import ListView from '@/views/ListView.vue'

const routes = [
	{
		path: '/',
		name: 'List',
		component: ListView,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
