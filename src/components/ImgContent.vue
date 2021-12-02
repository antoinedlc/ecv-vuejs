<template>
    <div>
        <img :src="src" alt="image">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ImgContent',
        props: {
            src: String,
            title: String,
            content: String,
        }
    }
</script>