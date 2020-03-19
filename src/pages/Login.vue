<template>
    <div>
        <page-header 
            bg='/dist/img/contact-bg.jpg'
            subHeading='Have questions? I have answers.'
            titleHeading='Login Page'
        />
    <!-- Main Content -->
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
				<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
				<!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
				<!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
				<!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
				<form name="sentMessage" v-if="!isLogin">
					<div class="control-group">
						<div class="form-group floating-label-form-group controls">
							<label>Email</label>
							<input v-model='email' type="email" class="form-control" placeholder="Email">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label>Password</label>
							<input v-model='password' type="password" class="form-control" placeholder="Password">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<br>
					<div id="success"></div>
					<div class="form-group">
						<button 
						@click.prevent='handleClick'
						type="submit" class="btn btn-primary" id="sendMessageButton">Login</button>
					</div>
				</form>
				<div v-else>
					<h3>Hello, Admin</h3>
					<button 
						@click.prevent='handleLogout'
						type="submit" class="btn btn-primary" id="sendMessageButton">Logout</button>
				</div>
			</div>
		</div>
	</div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader';

import { mapActions, mapState } from 'vuex';
export default {
    name: 'login',
    components: {
        PageHeader
	},
	data() {
		return {
			email : "",
			password : ""
		}
	},
	computed: {
		...mapState(['isLogin'])
	},
	methods: {
		...mapActions(['actionLogin', 'actionLogout']),
		handleClick(e) {
			let data = {
				email : this.email,
				password : this.password
			}
			this.actionLogin(data).then(response => {
				if (response) {
					alert('Login Success');
					router.push({ path: '/' })
				} else {
					alert('Login Failed')
				}
			});
		},
		handleLogout() {
			this.actionLogout();
		}
	}
}
</script>

<style>

</style>