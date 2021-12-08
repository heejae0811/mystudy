<template>
    <div class="select-box">
        <!-- select에는 change로 데이터를 변경해야한다.-->
        <select
            v-model="order"
            v-on:change="orderTodo"
        >
            <option value="data-desc">최신순</option>
            <option value="data-asc">오래된순</option>
        </select>

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
    data() {
        return {
            order: 'data-asc'
        }
    },
    methods: {
        // FIXME :: methods에서 commit를 사용해서 mutations를 호출할 수 있는데 dispatch를 사용하는거랑 뭐가 더 좋은가?
        orderTodo() {
            if(this.order === 'data-desc') {
                this.$store.commit('orderTodoLatest');
            } else {
                this.$store.commit('orderTodoOldest')
            }
        },
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