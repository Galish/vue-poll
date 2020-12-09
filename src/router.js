import { createWebHistory, createRouter } from 'vue-router'
import ListView from '@/views/ListView.vue'
import EditView from '@/views/EditView.vue'

const routes = [
	{
		path: '/',
		name: 'List',
		component: ListView,
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		component: EditView
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
