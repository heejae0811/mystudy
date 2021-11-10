<template>
    <div>
        <button v-on:click="listOpen">리스트</button>
        <button v-on:click="galleryOpen">갤러리</button>
        <button v-on:click="webzineOpen">웹진</button>

        <!--
            커스텀 태그는 말 그대로 커스텀 한 것 이어서 클릭 이벤트를 걸어도 메서드로 받기 때문에 native가 필요하다.
            v-on:click.native="" 
        -->
        <custom-list
            v-show="listVisible"
            v-bind:userData="userData"
            v-on:click="modalVisible = true"
        ></custom-list>

        <custom-gallery
            v-show="galleryVisible"
            v-bind:userData="userData"
        ></custom-gallery>

        <custom-webzine
            v-show="webzineVisible"
            v-bind:userData="userData"
        ></custom-webzine>

        <!-- FIXME :: 팝업모달을 컴포넌트로 가져왔을 때 클릭 이벤트를 어떻게 적용하나요? 어제 설명 들었는데 모르겠습니다 ㅠㅠ props, emit, sync... -->
        <custom-modal
            :show.sync="modalVisible"
            v-bind:userData="userData"
        ></custom-modal>
        
        <!--
        <div
            v-show="modalVisible"
            v-on:click.self="modalOpen"
            class="modal-wrap">
            <div
                v-for="(item, key) in userData" :key="key"
                class="modal-box"
            >
                <span
                    v-on:click="modalOpen"
                    class="modal-close"
                >&times;</span>
                
                <p><span>번호 : </span> {{ item.num }}</p>
                <p><span>제목 : </span> {{ item.title }}</p>
                <p><img v-bind:src="item.thumbnail"></p>
                <p><span>글쓴이 : </span> {{ item.writer }}</p>
                <p><span>날짜 : </span> {{ $date().format('YYYY/MM/DD hh:mm:ss') }}</p>
                <p><span>조회수 : </span> {{ item.count }}</p>
            </div>
        </div>
        -->
    </div>
</template>

<script>
import CustomList from '@/components/lists2/CustomList.vue';
import CustomGallery from '@/components/lists2/CustomGallery.vue';
import CustomWebzine from '@/components/lists2/CustomWebzine.vue';
import CustomModal from '@/components/lists2/CustomModal.vue';

export default ({
    name: 'List2',

    components: {
        CustomList,
        CustomGallery,
        CustomWebzine,
        CustomModal
    },

    data() {
        return {
            listVisible: true,
            galleryVisible: false,
            webzineVisible: false,
            modalVisible: false,
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
            this.$emit('modalVisible');
        }

    }
});
</script>

<style>

</style>