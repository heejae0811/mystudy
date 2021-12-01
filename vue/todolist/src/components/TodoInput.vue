<template>
    <div>
        <input
            type="text"
            placeholder="write todo"
            v-model="$store.state.newTodoItems"
            v-on:keyup.enter="$store.commit('addTodo')"
        >
        <button 
            v-on:click="$store.commit('addTodo')"
        >Add</button>
    </div>
</template>

<script>
export default ({
    name: 'Input',
});
</script>

<style>

</style>