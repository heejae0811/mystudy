<template>
    <div>
        <ul>
            <li 
                v-for="(todoList, index) in todoLists"
                :key="index"
            >
                {{ todoLists }}
                <button
                    v-on:click="removeTodoList"
                >delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default ({
    name: 'TodoList',
    data() {
        return {
            todoLists: []
        }
    },
    methods: {
        removeTodoList: function(todoList, index) {
            localStorage.removeItem(todoList);
            this.todoLists.splice(index, 1);
        }
    },
    created: function() {
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                this.todoLists.push(localStorage.key(i));
            }
        }
    }
});
</script>

<style>

</style>