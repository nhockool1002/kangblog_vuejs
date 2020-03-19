<template>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<router-link class="navbar-brand" to="/">KangBlog</router-link>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<router-link 
					v-for="link in listLink"
					v-bind:key="link.to"
					v-bind:to="link.to"
					v-bind:exactActiveClass="link.exactActiveClass"
					activeClass=""
					tag="li"
					class="nav-item">
						<a class="nav-link">{{ link.text }}</a>
					</router-link>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
    name: 'navigation',
	data() {
		return {
			listLink : [
				{to: '/', text: 'HomePage', exactActiveClass: 'active'},
				{to: '/about-us', text: 'About Us', exactActiveClass: 'active'},
				{to: '/contact', text: 'Contact', exactActiveClass: 'active'},
				{to: '/login', text: 'Login', exactActiveClass: 'active'},
			]
		}
	}
}
</script>

<style>

</style>