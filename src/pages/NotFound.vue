<template>
  <div class="page-404">
      <div>
          <img src="https://pngimage.net/wp-content/uploads/2018/06/404-not-found-png-5.png" />
      </div>
      <router-link
            tag="button"
            to="/"
            type="submit" class="btn btn-primary" id="sendMessageButton">Return Homepage</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .page-404 {
        padding-top: 10%;
        text-align: center;
    }
</style>