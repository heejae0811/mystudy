<template>
    <div>
        <button v-on:click="listOpen">리스트</button>
        <button v-on:click="galleryOpen">갤러리</button>
        <button v-on:click="webzineOpen">웹진</button>

        <!-- FIXME :: custom-list에 v-on:click 이벤트를 걸면 왜 작동이 안되나요?? -->
        <div v-on:click="modalOpen">
            <custom-list
                v-show="listVisible"
                
                v-bind:num="num"
                v-bind:title="title"
                v-bind:thumbnail="thumbnail"
                v-bind:writer="writer"
                v-bind:date="date"
                v-bind:count="count"
            ></custom-list>
        </div>

        <custom-gallery
            v-show="galleryVisible"

            v-bind:num="num"
            v-bind:title="title"
            v-bind:thumbnail="thumbnail"
            v-bind:writer="writer"
            v-bind:date="date"
            v-bind:count="count"
        ></custom-gallery>

        <custom-webzine
            v-show="webzineVisible"

            v-bind:num="num"
            v-bind:title="title"
            v-bind:thumbnail="thumbnail"
            v-bind:writer="writer"
            v-bind:date="date"
            v-bind:count="count"
        ></custom-webzine>


        <!-- FIXME :: 모달을 컴포넌트로 가져왔을 때 클릭 이벤트를 어떻게 적용하나요? props로 이벤트 전달??
        <custom-modal
            v-show="modalVisible"
            v-on:click.self="modalOpen"
            
            v-bind:num="num"
            v-bind:title="title"
            v-bind:thumbnail="thumbnail"
            v-bind:writer="writer"
            v-bind:date="date"
            v-bind:count="count"
        ></custom-modal>
        -->

        <div
            v-show="modalVisible"
            v-on:click.self="modalOpen"
            class="modal-wrap"
        >
            <div class="modal-box">
                <span 
                    v-on:click="modalOpen"
                    class="modal-close"
                >&times;</span>
                
                <p><span>번호 : </span> {{ num }}</p>
                <p><span>제목 : </span> {{ title }}</p>
                <p><img v-bind:src="thumbnail"></p>
                <p><span>글쓴이 : </span> {{ writer }}</p>
                <p><span>날짜 : </span> {{ date }}</p>
                <p><span>조회수 : </span> {{ count }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CustomList from '@/components/lists2/CustomList.vue';
import CustomGallery from '@/components/lists2/CustomGallery.vue';
import CustomWebzine from '@/components/lists2/CustomWebzine.vue';
//import CustomModal from '@/components/lists2/CustomModal.vue';

export default ({
    name: 'List2',
    components: {
        CustomList,
        CustomGallery,
        CustomWebzine,
        //CustomModal
    },
    data() {
        return {
            listVisible: true,
            galleryVisible: false,
            webzineVisible: false,
            modalVisible: false,

            num: 1,
            title: '뷰 5주차 과제',
            thumbnail: require('@/assets/images/tree01.jpg'),
            writer: '김송이',
            date: '',
            count: 0,
            
            // FIXME :: 배열의 값을 컴포넌트에 어떻게 전달하나요? v-for도 사용해야하는데 모르겠..
            userData: [
                {
                    num: 1,
                    title: '뷰 5주차 과제',
                    thumbnail: require('@/assets/images/tree01.jpg'),
                    writer: '김하영',
                    date: '',
                    count: 0
                },
                {
                    num: 2,
                    title: 'v-for="(item, key) in userData" :key="key"',
                    thumbnail: require('@/assets/images/tree02.jpg'),
                    writer: '송민섭',
                    date: '',
                    count: 0
                },
                {
                    num: 3,
                    title: 'v-on:click="modalOpen(item)',
                    thumbnail: require('@/assets/images/tree03.jpg'),
                    writer: '이희재',
                    date: '',
                    count: 0
                },
                {
                    num: 4,
                    title: '코딩 컨벤션 지키기!!',
                    thumbnail: require('@/assets/images/tree04.jpg'),
                    writer: '정주호',
                    date: '',
                    count: 0
                },
            ],
        }
    },
    methods: {
        listOpen: function() {
            this.listVisible = true;
            this.galleryVisible = false;
            this.webzineVisible = false;
        },
        galleryOpen: function() {
            this.listVisible = false;
            this.galleryVisible = true;
            this.webzineVisible = false;
        },
        webzineOpen: function() {
            this.listVisible = false;
            this.galleryVisible = false;
            this.webzineVisible = true;
        },
        modalOpen: function() {
            this.modalVisible = !this.modalVisible;
        }
    }
});
</script>

<style>

</style>