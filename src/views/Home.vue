<template>
    <div class="homepage" style="background-image: url('https://img4.goodfon.com/wallpaper/nbig/0/c5/muzei-estestvoznaniia-london-angliia-zal.jpg')">
        <div class="homepage__content">
            <h1 class="homepage__content__title">Museo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lectus imperdiet, gravida</p>
            <router-link to="/about" class="button--circle">
                <span>En savoir plus</span>
            </router-link>
        </div>
        <div class="homepage__overlay"></div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>s