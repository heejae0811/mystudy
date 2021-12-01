<template>
    <div>
        <ul>
            <li 
                v-for="(todoItem, index) in this.$store.state.todoItems"
                v-bind:key="index"
            >
                {{ todoItem }}
                <button
                    v-on:click="$store.commit('removeTodo')"
                >Delete</button>
            </li>
        </ul>

        <ul>
            <li 
                v-for="(todoItem2, index) in this.$store.state.todoItems2"
                v-bind:key="index"
            >
                {{ todoItem2 }}
                <button
                    v-on:click="$store.commit('removeTodo')"
                >Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default ({
    name: 'TodoList',
});
</script>

<style>

</style>