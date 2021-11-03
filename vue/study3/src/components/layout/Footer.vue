<!--
    <footer><slot></slot></footer>  -> X
    slot을 사용하고 싶으면 해당 위치가 아닌 import된 파일에 작성한다.(Index.vue)
-->
<template>
    <footer></footer>
</template>

<script>
export default ({
    name: 'Footer'
})
</script>

<style scoped>
    footer { width: 100%; height: 50px; background-color: #bbb;  }
</style>
