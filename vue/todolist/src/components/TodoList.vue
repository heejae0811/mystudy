<!--
    commit으로 mutations의 함수를 호출할 수 있다.
    v-on:click="$store.commit('removeTodo')"
-->
<template>
    <div>
        <ul>
            <li 
                v-for="(todoItem, index) in this.$store.state.todoItems"
                v-bind:key="index"
            >
                {{ todoItem }}
                <button
                    v-on:click="removeTodoMethods(todoItem)"
                >Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default ({
    name: 'TodoList',
    methods: {
        removeTodoMethods(todoItem) {
            this.$store.dispatch('removeTodoAction', todoItem);
        }
    }
});
</script>

<style>

</style>