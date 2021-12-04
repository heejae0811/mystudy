<!--
    commit으로 mutations의 함수를 호출할 수 있다.
    v-on:click="$store.commit('removeTodo')"
-->
<template>
    <div>
        <ul>
            <li 
                v-for="(todoList, index) in this.$store.state.todoItems"
                v-bind:key="index"
            >
                <p class="todo-list">{{ todoList.todo }}</p>
                <p class="todo-date">{{ todoList.date }}</p>
                
                <button
                    v-on:click="removeTodoMethods(todoList)"
                >Delete</button>
            </li>
        </ul>

        <!-- commit을 이용해 mutations에 접근 -->
        <button
            v-on:click="$store.commit('clearAllTodo')"
        >Clear All</button>
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