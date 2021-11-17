<template>
    <div>
        <h1>이건 리스트</h1>

        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            <!--
                1. 부모 컴포넌트(Index.vue)의 usdeData를 v-for와 props를 사용해서 data를 가져온다.
                2. 리스트를 클릭했을 때 해당 팝업이 떠야하기 때문에 emit를 사용해서 부모 컴포넌트로 data를 보낸다.
            -->
            <tr
                v-for="(item, key) in userData" 
                :key="key"
                v-on:click="$emit('input', item)"
            >
                <td class="num">{{ item.num }}</td>
                <td class="title">{{ item.title }}</td>
                <td class="writer">{{ item.writer }}</td>
                <td class="date">{{ $date().format('YYYY/MM/DD hh:mm:ss') }}</td>
                <td class="counter">{{ item.count }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default ({
    name: 'CustomList',
    props: {
        userData: {
            type: Array
        }
    }
});
</script>

<style>
table { width: 100%; margin: 50px auto 0; border: 1px solid #ddd; border-collapse: collapse; }
table th { padding: 5px 10px; border: 1px solid #ddd; }
table td { padding: 5px 10px; border: 1px solid #ddd; cursor: pointer; }
</style>