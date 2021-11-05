<template>
    <div>
        <button 
            v-on:click="listOpen"
            class="btn-list"
        >리스트</button>

        <button 
            v-on:click="listOpen"
            class="btn-gallery"
        >갤러리</button>

        <button 
            v-on:click="listOpen"
            class="btn-webzine"
        >웹진</button>


        <list
            v-if="visible"
        ></list>

        <gallery
            v-else-if="visible = false"
        ></gallery>

        <webzine
            v-else
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
            visible: true,

            listVisible: true,
            galleryVisible: false,
            webzineVisible: false
        }   
    },
    methods: {
        listOpen: function(){
            this.visible = !this.visible;
        }
    }
})
</script>