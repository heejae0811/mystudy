<template>
    <div>
        <button
            v-on:click="$store.commit('clearAllTodo')"
        >Clear All</button>
    </div>
</template>

<script>
export default ({
    name: 'TodoFooter',
});
</script>

<style>

</style>