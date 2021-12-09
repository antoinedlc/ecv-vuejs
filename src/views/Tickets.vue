<template>
    <div class="section">
        <div class="heading">
            <h1>Tickets</h1>
            <p>Trouvez-ici les tickets pour les différentes expositions</p>
        </div>

    </div>
</template>

<script>
    // Import dynamic data
    import { DataTickets } from '../data/tickets.js'

    import { Swiper } from 'swiper';

    const swiperTickets = new Swiper('.swiper-tickets', {
        navigation: {
            nextEl: '.swiper-tickets-button-next',
            prevEl: '.swiper-tickets-button-prev',
        },

        slidesPerView: 4,
        spaceBetween: 24,
    })

    console.log(swiperTickets)

    export default {
        // Define dynamic data to pass in the template
        created() {
            this.tickets = DataTickets
        },
        name: 'Tickets',
    }
</script>