<template>
    <div 
        class="modal-wrap"
        v-if="$store.state.modalVisible"
    >
        <div class="modal-content">
            <p>전체 삭제 하시겠습니까?</p>
            <button 
                type="button"
                class="btn-yes"
                v-on:click="$store.commit('clearAllTodo')"
            >Yes</button>
            <button 
                type="button"
                class="btn-no"
                v-on:click="$store.commit('modalOpen')"
            >No</button>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'TodoModal',
    methods: {
        
    }
});  
</script>

<style>
.modal-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-wrap .modal-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 90%;
    height: fit-content;
    margin: auto;
    border-radius: 4vw;
    background-color: #fff;
}

.modal-wrap .modal-content p {
    padding: 10vw 2vw;
    font-size: 7vw;
    text-align: center;
}

.modal-wrap .modal-content button {
    width: 50%;
    height: 12vw;
    background-color: #000;
    color: #fff;
    font-size: 4vw;
    text-align: center;
}

.btn-yes {
    border-radius: 0 0 0 4vw;
}

.btn-no {
    border-radius: 0 0 4vw 0;
}
</style>