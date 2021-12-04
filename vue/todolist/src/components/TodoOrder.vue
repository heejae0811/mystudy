<template>
    <div class="select-box">
        <select>
            <label for="order">Order</label>
            <option value="date-asc">최신순</option>
            <option value="date-desc">오래된순</option>
        </select>

        <!-- commit을 이용해 mutations에 접근 -->
        <button
            class="btn-clear"
            v-on:click="$store.commit('clearAllTodo')"
        >Clear All</button>
    </div>
</template>

<script>
export default ({
    name: 'TodoOrder'
});
</script>

<style>
.select-box {
    overflow: hidden;
    margin-bottom: 5vw;
}

.select-box select {
    width: 20%;
    height: 6vw;
    outline: none;
    border-radius: 1vw;
    background-color: #fff;
    font-size: 2vw;
    line-height: 6vw;
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