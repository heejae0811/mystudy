<template>
    <div>
        <list></list>
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
    }
})
</script>