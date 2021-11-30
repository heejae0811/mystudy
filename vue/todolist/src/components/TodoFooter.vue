<template>
    <div>
        <button
            v-on:click="clearTodo"
        >Clear All</button>
    </div>    
</template>

<script>
export default ({
    name: 'TodoFooter',
    // methods: {
    //     clearTodo: function() {
    //         localStorage.clear();
    //     }
    // }
});
</script>

<style>

</style>