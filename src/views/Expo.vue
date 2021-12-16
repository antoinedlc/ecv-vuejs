<template>
    <div class="section expo">
        <div class="expo_container">
            <div class="expo_header">
                <h1 class="text-main">VOUS<br> RETROUVEREZ</h1>
            </div>
            <div class="expo_list">
                <div class="cross">
                    <img class="cross" src="../assets/img/svg/cross.svg" alt="">
                </div>
                <div class="list_indiv" v-for="item in paintings" :key="item.id">
                    <img :src="item.src" alt="">
                    <div class="description">
                        <p class="date">{{item.date}}</p>
                        <p class="title_painting">{{item.title}}</p>
                        <p class="desc">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import dynamic data
    import { DataExpos } from '../data/expos.js'

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    export default {
        // Define dynamic data to pass in the template
        beforeCreate() {
            this.expos = DataExpos

            if(getCookie('expoID')) {
                this.expo = this.expos.find(x => x.id === getCookie('expoID'))
                console.log(this.expo)
                this.paintings = this.expo.paintings
            } else {
                console.log('Pas de cookie')
            }
        },
        created() {
            document.cookie = "expoID=null;expires=Thu, 01 Jan 1970 00:00:01 GMT"
        },
        mounted() {
            let tabExpo = document.querySelectorAll('.list_indiv');
            let cross = document.querySelector(".cross");
            tabExpo.forEach(function (items){
                items.addEventListener("click",function (){
                    items.classList.add("fullscreen");
                    cross.classList.add("enable");
                    items.style.pointerEvents="none";
                });
                cross.addEventListener("click",function (){
                    items.classList.remove("fullscreen");
                    cross.classList.remove("enable");
                    items.style.pointerEvents="auto";
                });
            });
        },
        name: 'Expo',
    }
</script>