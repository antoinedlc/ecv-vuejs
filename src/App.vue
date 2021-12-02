<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <Sample title="Titre" content="Ceci est la description !" :items="items" />
    </div>
</template>

<script>
    // Import dynamic data
    import { DataSample } from './data/sample.js'

    // Import component
    import Sample from './components/Sample.vue'

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.items = DataSample
        },
        name: 'App',
        // Specify which components are used
        components: {
            Sample
        }
    }
</script>

<style>
    @import './assets/style/app.css';
</style>