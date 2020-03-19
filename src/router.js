import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

import store from './store/index'

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
		component: BlogDetail,
		beforeEnter: (to, from, next) => {
			if (store.state.isLogin) {
				next();
			} else {
				next({ path: '/login' });
			}
		} 
	},
	{ 
		path: '/login',
		name: 'login',
		component: Login 
	},
	{ 
		path: '*',
		name: 'not-found',
		component: NotFound 
	}
]

const router = new VueRouter({
	routes // short for `routes: routes`
})

export default router