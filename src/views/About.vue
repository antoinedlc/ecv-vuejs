<template>
    <div class="section">
        <div class="heading">
            <h1 class="title">À propos</h1>
            <p class="subtitle">Museo, qu'est-ce que c'est ?</p>
        </div>
        <div class="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="quote">"Un musée, c'est une porte vers tout un tas d'autres mondes. Et vous, voyageur, y concevez vos propres routes."</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <router-link to="/expos" class="button--circle">
                <span>Décourvrir<br>nos expos</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
    }
</script>