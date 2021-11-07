<template>
    <div>
        <button 
            v-on:click="listOpen"
            class="btn-list"
        >리스트</button>

        <button 
            v-on:click="galleryOpen"
            class="btn-gallery"
        >갤러리</button>

        <button 
            v-on:click="listOpen"
            class="btn-webzine"
        >웹진</button>


        <list
            v-bind:class="{ 'table-list': isList,  'table-gallery': isGallery }"
        ></list>

        <gallery
        ></gallery>
        
        <webzine
        ></webzine>
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
            isGallery: false
        }   
    },
    methods: {
        listOpen: function(){
            this.isList = true;
            this.isGallery = false;
        },
        galleryOpen: function(){
            this.isList = false;
            this.isGallery = true;
        },
    }
})
</script>