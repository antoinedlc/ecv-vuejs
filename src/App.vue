<template>
    <div>
        <div id="nav">
            <router-link to="/" tag="span" id="link-home" class="router-link">Accueil</router-link>
            <div class="money-change">
                <div id="euro-change">€</div>
                <span>|</span>
                <div id="dollar-change">$</div>
                <span>|</span>
                <div id="yen-change">¥</div>
            </div>
            <span tag="span" id="theme-toggle">Mode</span>
            <router-link to="/tickets" tag="span" id="link-tickets" class="router-link">Tickets</router-link>
            <router-link to="/shop" tag="span" id="link-shop" class="router-link">Boutique</router-link>
            <router-link to="/contact" tag="span" id="link-contact" class="router-link">Contact</router-link>
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
