<template>
    <div>
        <button v-on:click="listOpen">리스트</button>
        <button v-on:click="galleryOpen">갤러리</button>
        <button v-on:click="webzineOpen">웹진</button>

        <!--
            3. 자식 컴포넌트(CustomList.vue)에서 emit으로 받은 data를 부모-자식 간 양방향 바인딩 해야 하기 때문에 v-model를 사용한다.

            커스텀 태그는 말 그대로 커스텀 이어서 클릭 이벤트를 걸어도 메서드로 받기 때문에 native가 필요하다.
        -->
        <custom-list
            v-show="listVisible"
            v-bind:userData="userData"
            v-model="modalData"
            v-on:click.native="modalOpen()"
        ></custom-list>

        <custom-gallery
            v-show="galleryVisible"
            v-bind:userData="userData"
            v-model="modalData"
            v-on:click.native="modalOpen()"
        ></custom-gallery>

        <custom-webzine
            v-show="webzineVisible"
            v-bind:userData="userData"
            v-model="modalData"
            v-on:click="modalOpen()"
        ></custom-webzine>

        <!--
        <custom-modal
            v-model="modalData"
            v-on:click="modalOpen()"
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
                
                <!--
                    4. 자식 컴포넌트(CustomList.vue)에서 emit으로 받은 data를 modalData에서 가져온다.
                    v-for로 userData를 받아오는 것이 아니라 자식 컴포넌트에서 emit으로 보낸 item 값이 필요하다.
                -->
                <p><span>번호 : </span> {{ modalData.num }}</p>
                <p><span>제목 : </span> {{ modalData.title }}</p>
                <p><img v-bind:src="modalData.thumbnail"></p>
                <p><span>글쓴이 : </span> {{ modalData.writer }}</p>
                <p><span>날짜 : </span> {{ $date().format('YYYY/MM/DD hh:mm:ss') }}</p>
                <p><span>조회수 : </span> {{ modalData.count }}</p>
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
            modalData: {}, // emit으로 받은 data가 들어가는 곳
            userData: [
                {
                    num: 1,
                    title: 'v-for="(item, key) in userData" :key="key"',
                    thumbnail: require('@/assets/images/tree01.jpg'),
                    writer: '김하영',
                    date: '',
                    count: 0
                },
                {
                    num: 2,
                    title: 'v-bind:userData="userData"',
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
    },

    mounted() {
        // mounted에서 console.log 확인 가능
    }
});
</script>

<style>

</style>