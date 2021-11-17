<template>
    <div
        v-show="modalVisible"
        v-on:click.self="modalVisible = false"
        class="modal-wrap"
    >
        <div class="modal-box">
            <span
                v-on:click="modalVisible = false"
                class="modal-close"
            >&times;</span>
            
            <p><span>번호 : </span> {{ modalData.num }}</p>
            <p><span>제목 : </span> {{ modalData.title }}</p>
            <p><img v-bind:src="modalData.thumbnail"></p>
            <p><span>글쓴이 : </span> {{ modalData.writer }}</p>
            <p><span>날짜 : </span> {{ $date().format('YYYY/MM/DD hh:mm:ss') }}</p>
            <p><span>조회수 : </span> {{ modalData.count }}</p>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'CustomModal',
    props: {
        userData: {
            type: Array
        },
        modalData: {
            type: Object
        }
    }
});
</script>

<style>
.modal-wrap { position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
.modal-wrap .modal-box { position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 350px; height: 500px; margin: auto; padding: 30px; background-color: #fff; border-radius: 20px; }
.modal-wrap .modal-box .modal-close { float: right; margin-top: -20px; font-size: 30px; cursor: pointer; }
</style>