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
                v-on:click="modalOpen()"
            >
                <td class="num">{{ num }}</td>
                <td class="title">{{ title }}</td>
                <td class="writer">{{ writer }}</td>
                <td class="date">{{ $date().format('YYYY/MM/DD hh:mm:ss') }}</td>
                <td class="counter">{{ count }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default ({
    name: 'CustomList',
    props: [
        'userData',
        'num',
        'title',
        'thumbnail',
        'writer',
        'date',
        'count'
    ]
});
</script>

<style>
table { width: 100%; margin: 50px auto 0; border: 1px solid #ddd; border-collapse: collapse; }
table th { padding: 5px 10px; border: 1px solid #ddd; }
table td { padding: 5px 10px; border: 1px solid #ddd; }
</style>