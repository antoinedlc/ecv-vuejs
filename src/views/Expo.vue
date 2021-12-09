<template>
  <div class="expo_container">
    <div class="expo_header">
      <h1>VOUS<br> RETROUVEREZ</h1>
    </div>
    <div class="expo_list">
      <div class="cross">
        <img class="cross" src="../assets/img/svg/cross.svg" alt="">
      </div>
      <div class="list_indiv" v-for="item in DataPaintings" :key="item.id">
        <img :src="item.src" alt="">
        <div class="description">
          <p class="date">{{item.date}}</p>
          <p class="title_painting">{{item.title}}</p>
          <p class="desc">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { DataPaintings } from '../data/paintings.js'

  export default {
    // Define dynamic data to pass in the template
    created() {
      this.DataPaintings = DataPaintings
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
    // Specify which components are used
  }
</script>