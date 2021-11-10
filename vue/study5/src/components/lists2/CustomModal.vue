<template>
    <div
        class="modal-wrap">
        <div
            v-for="(item, key) in userData" :key="key"
            class="modal-box"
        >
            <span 
                class="modal-close"
            >&times;</span>
            
            <p><span>번호 : </span> {{ item.num }}</p>
            <p><span>제목 : </span> {{ item.title }}</p>
            <p><img v-bind:src="item.thumbnail"></p>
            <p><span>글쓴이 : </span> {{ item.writer }}</p>
            <p><span>날짜 : </span> {{ item.date }}</p>
            <p><span>조회수 : </span> {{ item.count }}</p>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'CustomModal',
    props: {
        userData: {
            type: Array
        }
    }
});
</script>

<style>
.modal-wrap { position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
.modal-wrap .modal-box { position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 350px; height: 500px; margin: auto; padding: 30px; background-color: #fff; border-radius: 20px; }
.modal-wrap .modal-box .modal-close { float: right; margin-top: -20px; font-size: 30px; cursor: pointer; }
</style>