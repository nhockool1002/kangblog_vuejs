<template>
    <div>
        <page-header 
            bg='/dist/img/about-bg.jpg'
            subHeading='This is what I do.'
            titleHeading='About Me'
        />
        <!-- Main Content -->
        <div class="container">
            
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader';
export default {
    name: 'about-us',
    components: {
        PageHeader
    }
}
</script>

<style>

</style>