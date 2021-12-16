<template>
    <div class="section">
        <div class="heading">
            <h1 class="title text-main">Tickets</h1>
            <p class="subtitle">Trouvez-ici les tickets pour les différentes expositions</p>
        </div>
        <div class="swiper swiper-tickets">
            <div class="swiper-wrapper">
                <div v-for="ticket in tickets" :key="ticket.id" class="swiper-slide ticket">
                    <div class="ticket__image" style="background-image: url('https://www.lille.fr/var/www/storage/images/mediatheque/mairie-de-lille/actualites/images/2021/goya/2914826-1-fre-FR/goya.png')"></div>
                    <span class="ticket__date">{{ ticket.date }}</span>
                    <h2 class="ticket__title">{{ ticket.title }}</h2>
                    <span class="ticket__place">{{ ticket.place }}</span>
                    <h3 class="ticket__price price-change text-main" :data-value="ticket.value" data-change="euro">{{ ticket.price }}</h3>
                    <router-link to="/contact" class="ticket-form-button ticket__link" :data-expo_id="ticket.idExpo">Ouvrir le formulaire</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import dynamic data
    import { DataTickets } from '../data/tickets.js'

    import { Swiper } from 'swiper'

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.tickets = DataTickets
        },
        mounted() {
            new Swiper('.swiper-tickets', {
                slidesPerView: 4,
                spaceBetween: 32,
                observer: true,
            
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
                        
            document.querySelectorAll('.ticket-form-button').forEach(button => {
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
        name: 'Tickets',
    }
</script>