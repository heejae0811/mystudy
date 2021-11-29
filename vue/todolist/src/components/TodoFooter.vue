<template>
    <div>
        <button
            v-on:click="clearAllTodoList"
        >Clear All Todo List</button>
    </div>    
</template>

<script>
export default ({
    name: 'TodoFooter',
    methods: {
        clearAllTodoList: function() {
            localStorage.clear();
        }
    }
});
</script>

<style>

</style>