<template>
    <div>
        <ul>
            <li 
                v-for="(todoItem, index) in propsdata"
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
    // data() {
    //     return {
    //         todoItems: []
    //     }
    // },
    // created() {
    //     if (localStorage.length > 0) {
    //         for (let i = 0; i < localStorage.length; i++ ){
    //             if(localStorage.key(i) !== 'loglevel:webpack-dev-serve') {
    //                 this.todoItems.push(localStorage.getItem(localStorage.key(i)));
    //             }
    //         }
    //     }
    // },
    props: [
        'propsdata'
    ],
    methods: {
        removeTodo: function(todoItem, index) {
            // localStorage.removeItem(todoItem.item);
            // this.todoLists.splice(index, 1);
            this.$emit('removeItem', todoItem, index);
        }
    },
    // this.todoItems.push(
    //     JSON.parse(localStorage.getItem(localStorage.key(i)))
    // );
});
</script>

<style>

</style>