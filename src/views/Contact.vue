<template>
    <div class="section contact">
        <div class="contact__image" style="background-image: url('https://freerangestock.com/sample/123268/woman-in-art-gallery-.jpg')">
        </div>
        <div class="contact__form">
            <h1 class="title text-main">Contactez-nous :</h1>
            <form action="">
                <div class="field">
                    <label for="subject">Sujet :</label>
                    <select name="expo_select" id="expo_select" class="border-main">
                        <option v-if="selectedExpoID" :value="selectedExpoID">{{ selectedExpoTitle }}</option>
                        <option v-else value="">Sélectionnez une exposition</option>
                        <option v-for="expo in expos" :key="expo.id" :value="expo.id">{{ expo.title }}</option>
                    </select>
                </div>
                <div class="name">
                    <div class="field">
                        <label for="firstname">Prénom :</label>
                        <input class="border-main" type="text" name="firstname" placeholder="Prénom">
                    </div>
                    <div class="field">
                        <label for="lastname">Nom :</label>
                        <input class="border-main" type="text" name="lastname" placeholder="Nom">
                    </div>
                </div>
                <div class="field">
                    <label for="email">Adresse mail :</label>
                    <input class="border-main" type="email" name="email" placeholder="Votre adresse email">
                </div>
                <div class="field">
                    <label for="message">Message :</label>
                    <textarea class="border-main" name="message"></textarea>
                </div>
            </form>
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
                this.selectedExpoID = getCookie('expoID')

                if(DataExpos.find(x => x.id == this.selectedExpoID)) {
                    this.selectedExpoTitle = DataExpos.find(x => x.id == this.selectedExpoID).title
                } else {
                    this.selectedExpoTitle = 'expo sélectionnée'
                }
            } else {
                console.log('Pas de cookie')
            }
        },
        created() {
            document.cookie = "expoID=null;expires=Thu, 01 Jan 1970 00:00:01 GMT"
        },
        name: 'Contact',
        // Specify which components are used
    }
</script>