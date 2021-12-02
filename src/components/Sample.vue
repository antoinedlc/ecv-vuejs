<!-- Le tag "template" permet de définir ce qui sera retourné à l'appel du composant -->
<template>
    <!--
        Il ne peut y avoir qu'un seul tag parent au sein d'un composant,
        aussi est-il recommandé de toujours englober vos éléments
        dans une div parente, avec ou sans classe
    -->
    <div>
        <!--
            La syntaxe {{ variable }} permet de remplacer "variable"
            par une donnée fournie lors de l'appel du composant.
            C'est l'équivalent, en VueJS, d'un echo PHP 
        -->
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <div class="items">
            <!--
                La directive v-for="item in items" permets de faire un foreach
                du tableau "items" et de récupérer chaque élément en tant que "item".
                La directive :key="item.key" permet de définir quelle clé permettra
                de distinguer chaque élément des autres ((un id, un slug...))
            -->
            <span v-for="(item, index) in items" :key="item.index" class="item" style="margin-right: 2.4rem">{{ index }} : {{ item.text }}</span>
        </div>
    </div>
</template>

<!-- Le tag "script" permet de définir les fonctionnalités d'un composant -->
<script>
    // "export default" va aller chercher le tag "template"
    export default {
        // "name:" va donner son nom au composant
        name: 'Sample',
        /*
            "props:" va définir quels paramètres mais aussi quels types
            lui fournir pour générer le rendu
        */
        props: {
            title: String,
            content: String,
            items: Array
        }
    }
</script>