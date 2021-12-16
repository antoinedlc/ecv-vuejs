<template>
    <div class="section">
        <div class="heading">
            <h1 class="title text-main">Boutique</h1>
            <p class="subtitle">Découvrez nos souvenirs d'exception</p>
        </div>
        <div class="swiper swiper-goodies">
            <div class="swiper-wrapper">
                <div v-for="goodie in goodies" :key="goodie.id" class="swiper-slide goodie">
                    <div class="goodie__image" style="background-image : url('https://www.vangoghmuseumshop.com/l/en/library/download/urn:uuid:70dd6901-2ba4-46e5-b69e-bc6b42c8c573/catalogus-en-banner.jpg?scaleType=3&width=696&height=426');"></div>
                    <span class="goodie__title">{{ goodie.title }}</span>
                    <span class="goodie__price price-change text-main" :data-value="goodie.value" data-change="euro">{{ goodie.price }}</span>
                </div>
            </div>
        </div>
        <div class="swiper swiper-goodies-2">
            <div class="swiper-wrapper">
                <div v-for="goodie in goodies" :key="goodie.id" class="swiper-slide goodie">
                    <div class="goodie__image" style="background-image : url('https://www.vangoghmuseumshop.com/l/en/library/download/urn:uuid:70dd6901-2ba4-46e5-b69e-bc6b42c8c573/catalogus-en-banner.jpg?scaleType=3&width=696&height=426');"></div>
                    <span class="goodie__title">{{ goodie.title }}</span>
                    <span class="goodie__price price-change text-main" :data-value="goodie.value" data-change="euro">{{ goodie.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import dynamic data
    import { DataGoodies } from '../data/goodies.js'

    import { Swiper } from 'swiper'

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.goodies = DataGoodies
        },
        mounted() {
            new Swiper('.swiper-goodies', {
                slidesPerView: 5,
                spaceBetween: 24,
                observer: true,
            })

            new Swiper('.swiper-goodies-2', {
                slidesPerView: 5,
                spaceBetween: 24,
                observer: true,
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
        name: 'Shop',
    }
</script>