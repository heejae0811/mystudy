<template>
    <div>
        <header><slot name="header"></slot></header>

        <main><slot></slot></main>

        <footer><slot name="footer"></slot></footer>
    </div>
</template>

<script>
export default ({
    name: 'AppLayout',
    props: [
        'text'
    ]
})
</script>

<style>
header { width: 100%; min-height: 70px; background-color: #eee; }
main { width: 100%; min-height: 500px; background-color: #ddd; }
footer { width: 100%; min-height: 70px; background-color: #ccc; }
</style>