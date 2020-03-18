<template>
	<!-- Main Content -->
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
                <blog-item 
					v-for="item in blogLists"
					v-bind:key="item.id"
					v-bind:blog="item"
				/>
				<hr>
				<!-- Pager -->
				<div class="clearfix">
					<a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BlogItem from './BlogItem';
import { mapState } from 'vuex';

export default {
    name: 'blog-list',
    components: {
        BlogItem
	},
	computed: {
		...mapState( ['blogLists'] )
	}
}
</script>

<style>

</style>