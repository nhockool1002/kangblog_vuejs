<template>
	<div class="blog-item" v-if="blog">
	<div class="post-preview">
		<router-link 
		:to="{ 
				name: 'blog-detail',
				params: 
				{ 
					title: getFormatTitle,
					id: blog.id
				},
			}"
		>
		<h2 class="post-title">{{ blog.title}}</h2>
		<h3 class="post-subtitle">{{ blog.description}}</h3>
		</router-link>
		<p class="post-meta">
		Posted by
		<a href="#">{{ blog.author}}</a>
		on {{ blog.date}}
		</p>
	</div>
	</div>
</template>

<script>
export default {
	name: 'blog-item',
	props: {
		blog: {type: Object, default: null}
	},
	computed: {
		getFormatTitle() {
			return this.blog.title.split(' ').join('-').toLowerCase().replace('.', '');
		}
	}
};
</script>

<style>
</style>