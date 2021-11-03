<!--
    <header><slot></slot></header>  -> X
    slot을 사용하고 싶으면 해당 위치가 아닌 import된 파일에 작성한다.(Index.vue)
-->
<template>
    <header></header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header { width: 100%; height: 50px; background-color: #ddd; }
</style>