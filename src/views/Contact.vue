<template>
    <div class="section">
        <Sample title="Contact" content="Ceci est la description !" :items="DataSample.items" />
        <ImgContent :src="require('../assets/img/logo.png')" title="Image + contenu" content="Ceci est la description !" />
    </div>
</template>

<script>
    // Import dynamic data
    import { DataSample } from '../data/sample.js'

    // Import component
    import Sample from '../components/Sample.vue'
    import ImgContent from '../components/ImgContent.vue'

    console.log(DataSample.items)

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.DataSample = DataSample
        },
        name: 'Contact',
        // Specify which components are used
        components: {
            ImgContent,
            Sample
        }
    }
</script>