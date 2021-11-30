<template>
    <div>
        <input
            type="text"
            placeholder="write todo"
            v-model="newTodoItem"
            v-on:keyup.enter="addTodoList"
        >
        <button 
            v-on:click="addTodoItem"
        >Add</button>
    </div>
</template>

<script>
export default ({
    name: 'Input',
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodoItem() {
            if(this.newTodoItem !== '') {
                // localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.$emit('addItem', this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
});
</script>

<style>

</style>