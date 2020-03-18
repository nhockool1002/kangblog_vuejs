import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

const routes = [
	{ 
		path: '/',
		name: 'home-page',
		component: HomePage 
	},
	{ 
		path: '/contact',
		name: 'contact',
		component: Contact 
	},
	{ 
		path: '/about-us',
		name: 'about-us',
		component: AboutUs
	},
	{ 
		path: '/blog-detail/:title-:id',
		name: 'blog-detail',
		component: BlogDetail 
	}
]

const router = new VueRouter({
	routes // short for `routes: routes`
})

export default router