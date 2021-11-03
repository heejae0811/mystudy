<!--
    slot에 name을 지정해서 사용할 수 있다.(slot의 확장성)
    이후 스터디에서 slot을 배울 것 이지만, 평소에 잘 사용하는 방법이 아니다.
-->
<template>
    <div>
        <main-header><slot name="header"></slot></main-header>

        <main-navigation></main-navigation>

        <main-main><slot name="main"></slot></main-main>

        <main-footer><slot name="footer"></slot></main-footer>
    </div>
</template>

<script>
import MainHeader from '@/components/layout/Header';
import MainNavigation from '@/components/layout/Navigation';
import MainMain from '@/components/layout/Main';
import MainFooter from '@/components/layout/Footer';

export default ({
    components: { MainHeader, MainNavigation, MainMain, MainFooter }
})
</script>

<style scoped>

</style>
