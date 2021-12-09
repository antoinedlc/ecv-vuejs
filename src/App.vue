<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/expo">zrgzgaeg</router-link>
        </div>
        <router-view id="router-view"></router-view>
        <h1>BOUGE PAS</h1>
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
