<template>
    <div class="todo-input">
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
            if (this.newTodo.length < 1) {
                alert("입력을 하셔야죠");
                return false;
            }

            // FIXME :: 지역 변수를 만들 필요가 없다.
            this.$store.dispatch('addTodoAction', {
                todo: this.newTodo,
                date: this.$date().format('YYYY.MM.DD')
            });

            this.newTodo = '';
        }
    }
});
</script>

<style>
.todo-input {
    display: flex;
    justify-content: space-between;
    margin: 5vw auto;
}
.todo-input input {
    width: 78%;
    height: 12vw;
    border-radius: 1vw;
    font-size: 4vw;
    line-height: 12vw;
    text-indent: 2vw;
}

.todo-input button {
    width: 20%;
    height: 12vw;
    border-radius: 1vw;
    background-color: #000;
    color: #fff;
    font-size: 4vw;
    line-height: 12vw;
    text-align: center;
}
</style>
