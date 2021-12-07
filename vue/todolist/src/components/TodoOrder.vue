<template>
    <div class="select-box">
        <button
            type="button"
            v-on:click="completeTodoMethods"
        >완료</button>

        <!-- <select>
            <label for="order">Order</label>
            <option value="all">Todo</option>
            <option 
                value="done"
                v-on:click="completeTodoMethods"
            >완료</option>
            <option value="doing">미완료</option>
        </select> -->

        <!-- commit을 이용해 mutations에 접근 -->
        <button
            class="btn-clear"
            v-on:click="$store.commit('modalOpen')"
        >Clear All</button>
    </div>
</template>

<script>
export default ({
    name: 'TodoOrder',
    methods: {
        completeTodoMethods(todoItem){
            this.$store.dispatch('selectCompleteTodoAction', todoItem);
        }
    }
});
</script>

<style>
.select-box {
    overflow: hidden;
    margin-bottom: 5vw;
}

.select-box select {
    width: 20%;
    height: 12vw;
    outline: none;
    border: none;
    border-radius: 1vw;
    background-color: #fff;
    font-size: 4vw;
    line-height: 12vw;
    text-indent: 1vw;
}

.btn-clear {
    float: right;
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