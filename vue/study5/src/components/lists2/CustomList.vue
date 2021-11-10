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
            <tr
                v-for="(item, key) in userData" :key="key"
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
table td { padding: 5px 10px; border: 1px solid #ddd; }
</style>