<template>
    <div>
        <h1>이건 갤러리</h1>

        <div class="gallery">
            <ul>
                <li v-for="(item, key) in userData" :key="key">
                    <img v-bind:src="item.thumbnail">
                    <p>제목 : {{ item.title }}</p>
                    <p>작성자 : {{ item.writer }}</p>
                    <p>날짜 : {{ $date().format('YYYY/MM/DD hh:mm:ss') }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'CustomGallery',
    props: {
        userData: {
            type: Array
        }
    }
});
</script>

<style>
.gallery ul { display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 0; padding: 0; }
.gallery ul li { width: 25%; list-style: none; }
</style>