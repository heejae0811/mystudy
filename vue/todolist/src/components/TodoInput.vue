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
            let item = {
                todo: this.newTodo,
                date: '날짜'
            }
            this.newTodo = '';
            this.$store.dispatch('addTodoAction', item);
        }
    }
});
</script>

<style>

</style>