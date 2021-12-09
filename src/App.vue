<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/expo">zrgzgaeg</router-link>
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
