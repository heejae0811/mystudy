<template>
    <div>
        <button v-on:click="listOpen">리스트</button>

        <button v-on:click="galleryOpen">갤러리</button>

        <button v-on:click="webzineOpen">웹진</button>

        <list v-bind:class="{ 'table-list': isList, 'table-gallery': isGallery, 'table-webzine': isWebzine }"></list>
    </div>
</template>

<script>
import List from '@/components/lists/List.vue';

export default ({
    name: 'Index',
    components: { List },
    data() {
        return {
            isList: true,
            isGallery: false,
            isWebzine: false
        }   
    },
    methods: {
        // TODO :: 뭔가 함수 1개로 할 수 있을 것 같은데...
        listOpen: function() {
            this.isList = true;
            this.isGallery = false;
            this.isWebzine = false;
        },
        galleryOpen: function() {
            this.isList = false;
            this.isGallery = true;
            this.isWebzine = false;
        },
        webzineOpen: function() {
            this.isList = false;
            this.isGallery = false;
            this.isWebzine = true;
        }
    }
});
</script>

<style>
button { margin: 40px 10px 0 0; }
</style>