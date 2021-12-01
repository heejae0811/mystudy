<template>
    <div>
        <ul>
            <li 
                v-for="(todoItem, index) in this.$store.state.todoItems"
                v-bind:key="todoItem.item"
            >
                {{ todoItem.item }}
                <button
                    v-on:click="removeTodo(todoItem, index)"
                >Delete</button>
            </li>
        </ul>

        <p> {{ this.$store.getters.doneTodos }} </p>
    </div>
</template>

<script>
export default ({
    name: 'TodoList',
    props: [
        'propsdata'
    ],
    methods: {
        removeTodo: function(todoItem, index) {
            this.$emit('removeItem', todoItem, index);
        }
    },
});
</script>

<style>

</style>