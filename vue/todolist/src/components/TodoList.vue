<!--
    commit으로 mutations의 함수를 호출할 수 있다.
    v-on:click="$store.commit('removeTodo')"
-->
<template>
    <div class="todo-list">
        <ul>
            <li 
                v-for="(todoList, index) in this.$store.state.todoItems"
                v-bind:key="index"
            >
                <p class="todo-list">{{ todoList.todo }}</p>
                <!-- <p class="todo-date">{{ todoList.date }}</p> -->
                
                <button
                    v-on:click="removeTodoMethods(todoList)"
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
.todo-list li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2vw;
    border-radius: 1vw;
    background-color: #fff;
}

.todo-list li p {
    width: 78%;
    padding: 3vw 2vw;
    font-size: 4vw;
}

.todo-list li button {
    width: 20%;
    border-radius: 0 1vw 1vw 0;
    background-color: #000;
    color: #fff;
    font-size: 4vw;
    text-align: center;
}
</style>