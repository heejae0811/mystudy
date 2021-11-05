<template>
    <div>
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            <tr 
                v-for="(item, key) in userData" :key="key"
                v-on:click="modalOpen()"
            >
                <td>{{ item.number }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.writer }}</td>
                <td>{{ new Date() | moment('YYYY-MM-DD HH:mm:ss') }}</td>
                <td>{{ item.count }}</td>
            </tr>
        </table>

        <div
            v-if="modalVisible = true"
            v-on:click.self="modalOpen()"
            class="modal-wrap"
        >
            <div class="modal-box">
                <span v-on:click.self="modalOpen()" class="modal-close">&times;</span>

                <p>{{ modalData.number }}</p>
                <p>{{ modalData.title }}</p>
                <p>{{ modalData.writer }}</p>

                <p>{{ modalData.count }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'list',
    data(){
        return{
            userData: [
                {
                    number: 1,
                    title: '뷰 5주차 과제',
                    writer: '김하영',
                    date: '',
                    count: '??'
                },
                {
                    number: 2,
                    title: 'v-for="(item, key) in userData',
                    writer: '송민섭',
                    date: '',
                    count: '??'
                },
                {
                    number: 3,
                    title: '어렵다',
                    writer: '이희재',
                    date: '',
                    count: '??'
                },
            ],
            modalData: {
                visible: false,
                number: '',
                title: '',
                writer: '',
                date: '',
                count: ''
            }
        }
    },
    methods: {
        modalOpen: function(item){
            this.modalData.visible = !this.modalData.visible
            this.modalData.number = item.number;
            this.modalData.title = item.title;
            this.modalData.writer = item.writer;
            this.modalData.date = item.date;
            this.modalData.count = item.count;
        }
    }
})
</script>

<style>
table { width: 100%; margin: 50px auto 0; border: 1px solid #ddd; border-collapse: collapse; }
table th { padding: 5px 10px; border-left: 1px solid #ddd; }
table td { padding: 5px 10px; border-left: 1px solid #ddd; border-top: 1px solid #ddd; cursor: pointer; }

.modal-wrap { position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
.modal-wrap .modal-box { position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 350px; height: 500px; margin: auto; background-color: #fff; border-radius: 20px; }
.modal-wrap .modal-box .modal-close { float: right; margin: 10px 20px 0 0; font-size: 30px; cursor: pointer; }
</style>
