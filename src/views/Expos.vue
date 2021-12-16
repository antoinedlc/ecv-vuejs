<template>
    <div class="section expos">
        <div class="heading">
            <h1 class="title">Expositions</h1>
            <p class="subtitle">Trouvez-ici nos expositions phare !</p>
        </div>
        <div class="swiper swiper-expos">
            <div class="parallax-bg" style="background-image: url('https://images.hdqwalls.com/wallpapers/rainy-night-artistic-painting.jpg');" data-swiper-parallax="-23%"></div>
            <div class="swiper-wrapper">
                <div v-for="expo in expos" :key="expo.id" class="swiper-slide expo">
                    <div class="expo__image" style="background-image: url('https://www.lille.fr/var/www/storage/images/mediatheque/mairie-de-lille/actualites/images/2021/goya/2914826-1-fre-FR/goya.png')"></div>
                    <div class="expo__content">
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
                slidesPerView: 3,
                spaceBetween: 56,
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

            let prices_change = document.querySelectorAll('.price-change')

            if(prices_change) {
                let euro = document.querySelector('#euro-change')
                let dollar = document.querySelector('#dollar-change')
                let yen = document.querySelector('#yen-change')

                euro.addEventListener('click', () => {
                    prices_change.forEach(price => {
                        let value = price.dataset.value
                        let change = price.dataset.change

                        if(change == 'yen') {
                            let new_value = (value / 129.13).toFixed(2)
                            let new_html = new_value + '€'

                            price.dataset.value = new_value
                            price.dataset.change = 'euro'
                            price.innerHTML = new_html
                        } else if (change == 'dollar') {
                            let new_value = (value * 0.88).toFixed(2)
                            let new_html = new_value + '€'

                            price.dataset.value = new_value
                            price.dataset.change = 'euro'
                            price.innerHTML = new_html
                        }
                    })
                })

                dollar.addEventListener('click', () => {
                    prices_change.forEach(price => {
                        let value = price.dataset.value
                        let change = price.dataset.change

                        if(change == 'euro') {
                            let new_value = (value / 0.88).toFixed(2)
                            let new_html = new_value + '$'

                            price.dataset.value = new_value
                            price.dataset.change = 'dollar'
                            price.innerHTML = new_html
                        } else if (change == 'yen') {
                            let new_value = (value / 114.06).toFixed(2)
                            let new_html = new_value + '$'

                            price.dataset.value = new_value
                            price.dataset.change = 'dollar'
                            price.innerHTML = new_html
                        }
                    })
                })

                yen.addEventListener('click', () => {
                    prices_change.forEach(price => {
                        let value = price.dataset.value
                        let change = price.dataset.change

                        if(change == 'euro') {
                            let new_value = (value * 129.13).toFixed(2)
                            let new_html = new_value + '¥'

                            price.dataset.value = new_value
                            price.dataset.change = 'yen'
                            price.innerHTML = new_html
                        } else if (change == 'dollar') {
                            let new_value = (value * 114.09).toFixed(2)
                            let new_html = new_value + '¥'

                            price.dataset.value = new_value
                            price.dataset.change = 'yen'
                            price.innerHTML = new_html
                        }
                    })
                })
            }
        },
        name: 'Expos',
    }
</script>