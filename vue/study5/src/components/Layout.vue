<template>
    <app-layout>
        <h1 slot="header">slot을 사용해서 만든 Layout 페이지</h1>

        <p>
            단일 element에서 slot 사용은 불가능하다. <br>
            ex) &lt;app /&gt; <br>
        </p>
        <ul>
            <li>이름 x slot : 자식의 모든 요소랑 교체가 가능하다.</li>
            <li>이름 o slot : </li>
        </ul>

        <p slot="footer">여기는 하단 입니다.</p>
    </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout.vue';

export default ({
    name: 'Layout',
    components: { AppLayout }
});
</script>