<template>
    <div class="section expos">
        <div class="heading">
            <h1 class="title">Expositions</h1>
            <p class="subtitle">Trouvez-ici nos expositions phare !</p>
        </div>
        <div class="swiper swiper-expos">
            <div class="swiper-wrapper">
                <div v-for="expo in expos" :key="expo.id" class="swiper-slide expo">
                    <div class="expo__image" style="background-image: url('https://www.lille.fr/var/www/storage/images/mediatheque/mairie-de-lille/actualites/images/2021/goya/2914826-1-fre-FR/goya.png')"></div>
                    <span class="expo__date">{{ expo.date }}</span>
                    <h2 class="expo__title">{{ expo.title }}</h2>
                    <span class="expo__place">{{ expo.place }}</span>
                    <h3 class="expo__price price-change" :data-value="expo.value" data-change="euro">{{ expo.price }}</h3>
                    <router-link to="/expo" class="expo-page-button" :data-expo_id="expo.id">En savoir plus</router-link>
                    <router-link to="/contact" class="expo-form-button expo__link" :data-expo_id="expo.id">Acheter des places</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import dynamic data
    import { DataExpos } from '../data/expos.js'

    import { Swiper } from 'swiper'

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.expos = DataExpos
        },
        mounted() {
            new Swiper('.swiper-expos', {
                slidesPerView: 1,
                observer: true,
            })
                        
            document.querySelectorAll('.expo-page-button').forEach(button => {
                button.addEventListener('click', () => {
                    document.cookie = "expoID="+button.dataset.expo_id
                })
            })
                        
            document.querySelectorAll('.expo-form-button').forEach(button => {
                button.addEventListener('click', () => {
                    document.cookie = "expoID="+button.dataset.expo_id
                })
            })
        },
        name: 'Expos',
    }
</script>