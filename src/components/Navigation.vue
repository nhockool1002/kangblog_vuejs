<template>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<a class="navbar-brand" href="index.html">Start Bootstrap</a>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<router-link class="nav-link" :to="{
							name: 'home-page'
						}">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{
							name: 'about-us'
						}">About Us</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{
							name: 'contact'
						}">Contact</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
    name: 'navigation'
}
</script>

<style>

</style>