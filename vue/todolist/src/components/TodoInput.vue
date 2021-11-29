<template>
    <div>
        <input type="text" v-model="newTodoList">
        <button 
            v-on:click="addTodoList"
        >add</button>
    </div>
</template>

<script>
export default ({
    name: 'Input',
    data() {
        return {
            newTodoList: ''
        }
    },
    methods: {
        addTodoList: function() {
            // localStorage : storage 객체에 접근해 저장한 데이터가 만료되지 않는다.
            localStorage.setItem(this.newTodoList, this.newTodoList);
            this.newTodoList = '';
        },
        clearTodoInput: function() {
            this.newTodoList = '';
        }
    }
});
</script>

<style>

</style>