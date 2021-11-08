<template>
    <div>
        <button v-on:click="listOpen">리스트</button>

        <button v-on:click="galleryOpen">갤러리</button>

        <button v-on:click="webzineOpen">웹진</button>


        <list v-bind:class="{ 'table-list': isList,  'table-gallery': isGallery, 'table-webzine': isWebzine }"></list>

        <gallery></gallery>
        
        <webzine></webzine>
    </div>
</template>

<script>
import List from '@/components/lists/List.vue'
import Gallery from '@/components/lists/Gallery.vue'
import Webzine from '@/components/lists/Webzine.vue'

export default({
    name: 'Index',
    components: {
        List,
        Gallery,
        Webzine
    },
    data(){
        return{
            isList: true,
            isGallery: false,
            isWebzine: false
        }   
    },
    methods: {
        listOpen: function(){
            this.isList = true;
            this.isGallery = false;
            this.isWebzine = false;
        },
        galleryOpen: function(){
            this.isList = false;
            this.isGallery = true;
            this.isWebzine = false;
        },
        webzineOpen: function(){
            this.isList = false;
            this.isGallery = false;
            this.isWebzine = true;
        }
    }
})
</script>

<style>
button { margin: 40px 10px 0 0; }
</style>