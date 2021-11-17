<template>
    <div>
        <h1>이건 웹진인데 잘못된(?) 방식, 이렇게 하지 말 것!!</h1>
        <p>
            props에 아래 방식처럼 데이터 값을 하나씩 가지고 오는 것이 아니라 <br>
            userData라는 배열 안에 있는 객체의 값을 가지고 와야한다. <br>
            userData를 바인딩! 리스트, 갤러리 참고 <br>
        </p>

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