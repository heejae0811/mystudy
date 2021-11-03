<!--
    <main><slot></slot></main>  -> X
    slot을 사용하고 싶으면 해당 위치가 아닌 import된 파일에 작성한다.(Index.vue)
-->
<template>
    <main></main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped>
    main { width: 100%; height: 500px; background-color: #ccc; }
</style>
