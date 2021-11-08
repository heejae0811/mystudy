<template>
    <div>
        <table>
            <tr>
                <th>사진</th>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            <tr 
                v-for="(item, key) in userData" :key="key"
                v-on:click="modalOpen(item)"
            >
                <td class="thumbnail"><img v-bind:src="item.thumbnail"></td>
                <td class="num">{{ item.num }}</td>
                <td class="title">{{ item.title }}</td>
                <td class="writer">{{ item.writer }}</td>
                <!-- 날짜: day.js 사용 -->
                <!-- TODO :: 새로고침해도 시간 안바뀌게 할 수 있나.. -->
                <td class="date">{{ $date().format('YYYY/MM/DD hh:mm:ss') }}</td>
                <td class="counter">{{ item.count }}</td>
            </tr>
        </table>

        <section>
            웹진 페이지 입니다. 그냥 이렇게 해봤습니다. <br>
            날짜 시간 계산 라이브러리 moment.js는 더 이상 지원하지 않기 때문에 day.js를 사용하면 된다.
        </section>

        <div
            v-if="modalData.visible"
            v-on:click.self="modalOpen(item)"
            class="modal-wrap"
        >
            <div class="modal-box">
                <span 
                    v-on:click="modalOpen(item)"
                    class="modal-close"
                >&times;</span>
                
                <p><span>번호 : </span> {{ modalData.num }}</p>
                <p><span>제목 : </span> {{ modalData.title }}</p>
                <p><img v-bind:src="modalData.thumbnail"></p>
                <p><span>글쓴이 : </span> {{ modalData.writer }}</p>
                <!-- 날짜: moment.js 사용 -->
                <p><span>날짜 : </span> {{ new Date() | moment('YYYY-MM-DD HH:mm:ss') }}</p>
                <p><span>조회수 : </span> {{ modalData.count }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import days from 'days';

export default ({
    name: 'list',
    component: { days },
    data() {
        return {       
            userData: [
                {
                    num: 1,
                    title: '뷰 5주차 과제',
                    // FIXME :: require를 사용안하고 img src 값을 가져오는 방법은??
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
            modalData: {
                visible: false,
                num: '',
                title: '',
                thumbnail: '',
                writer: '',
                date: '',
                count: ''
            }
        }
    },
    methods: {
        modalOpen: function(item) {
            this.modalData.visible = !this.modalData.visible;
            this.modalData.num = item.num;
            this.modalData.title = item.title;
            this.modalData.thumbnail = item.thumbnail;
            this.modalData.writer = item.writer;
            this.modalData.date = item.date;
            this.modalData.count = ++item.count;
        }
    }
});
</script>

<style>
img { width: 250px; height: 250px; }

.table-list table { width: 100%; margin: 50px auto 0; border: 1px solid #ddd; border-collapse: collapse; }
.table-list th { padding: 5px 10px; border-left: 1px solid #ddd; }
.table-list td { padding: 5px 10px; border-left: 1px solid #ddd; border-top: 1px solid #ddd; cursor: pointer; }
.table-list section,
.table-list tr th:first-child,
.table-list tr td:first-child { display: none; }

.table-gallery table { display: flex; justify-content: space-between; margin: 50px auto 0; }
.table-gallery tr { position: relative; width: auto; margin: auto; }
.table-gallery tr td { display: block; cursor: pointer; }
.table-gallery section,
.table-gallery tr:first-child,
.table-gallery tr td.num,
.table-gallery tr td.date,
.table-gallery tr td.counter { display: none; }

.table-webzine table { display: none; }
.table-webzine section { margin: 50px auto 0; }

.modal-wrap { position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
.modal-wrap .modal-box { position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 350px; height: 500px; margin: auto; padding: 30px; background-color: #fff; border-radius: 20px; }
.modal-wrap .modal-box .modal-close { float: right; margin-top: -20px; font-size: 30px; cursor: pointer; }
</style>