<template>
    <div>
        <div id="nav">
            <router-link to="/" id="link-home">Accueil</router-link>
            <span id="theme-toggle">Mode</span>
            <router-link to="/shop" id="link-shop">Boutique</router-link>
            <router-link to="/contact" id="link-contact">Contact</router-link>
        </div>
        <div id="router-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import './assets/style/app.css';
</style>
