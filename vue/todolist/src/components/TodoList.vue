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
                <div class="inner">
                    <input 
                        type="checkbox"
                        class="btn-check"
                        v-model="todoList.complete"
                        v-on:click="completeTodoMethods(todoList)"
                    >
                    <label for="checkbox">{{ todoList.complete }}</label>

                    <p class="todo-list">{{ todoList.todo }}</p>
                    <p class="todo-date">{{ todoList.date }}</p>
                </div>
                
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
        },
        completeTodoMethods(todoItem){
            this.$store.dispatch('completeTodoAction', todoItem);
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

.todo-list li .inner {
    width: 78%;
    margin: 3vw 2vw;
}

.todo-list li input {
    vertical-align: inherit;
}

.todo-list li p {
    font-size: 4vw;
}

.todo-list li p.todo-list {
    display: inline-block;
    padding-left: 1vw;
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