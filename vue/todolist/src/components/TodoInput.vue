<template>
    <div>
        <input
            type="text"
            placeholder="write todo"
            v-model="newTodo"
            v-on:keyup.enter="addTodoMethods"
        >
        <button 
            v-on:click="addTodoMethods"
        >Add</button>
    </div>
</template>

<script>
export default ({
    name: 'Input',
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodoMethods() {
            let todoList = {
                todo: this.newTodo,
                date: this.$date().format('YYYY.MM.DD')
            }
            this.newTodo = '';
            this.$store.dispatch('addTodoAction', todoList);
        }
    }
});
</script>

<style>

</style>