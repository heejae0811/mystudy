<template>
    <div>
        <h1>이건 갤러리</h1>

        <img v-bind:src="thumbnail">
        <p>제목 : {{ title }}</p>
        <p>작성자 : {{ writer }}</p>
        <p>날짜 : {{ date }}</p>
    </div>
</template>

<script>
export default ({
    name: 'CustomGallery',
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