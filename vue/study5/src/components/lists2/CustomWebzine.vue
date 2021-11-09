<template>
    <div>
        <h1>이건 웹진</h1>

        <p>번호 : {{ num }}</p>
        <p>제목 : {{ title }}</p>
        <p>썸네일 : {{ thumbnail }}</p>
        <p>작성자 : {{ writer }}</p>
        <p>날짜 : {{ date }}</p>
        <p>조회수 : {{ count }}</p>
    </div>
</template>

<script>
export default ({
    name: 'CustomWebzine',
    props: [    
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

</style>