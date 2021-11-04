<template>
    <app-layout>
        <h1 slot="header">
            <p>slot 밑에 p태그 입니다.</p>
            <ul>
                <li>ul>li 구조도 가능?</li>
            </ul>
        </h1>
        <ul slot="header">
            <li>가능한가봐</li>
        </ul>

        <div>여기가 main slot??</div>
        <section>section 태그</section>
        <aside>aside 태그</aside>
        <span>span 태그</span>

        <address slot="footer">안국역 안국빌딩 11층</address>
    </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue'

export default ({
    name: 'Layout2',
    components: {
        AppLayout
    }
})
</script>