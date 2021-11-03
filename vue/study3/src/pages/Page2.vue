<template>
    <div>
        <main-header><div slot="header">slot 헤더</div></main-header>

        <main-navigation></main-navigation>

        <main-main><div slot="main">slot 메인</div></main-main>

        <main-footer><div slot="footer">slot 푸터</div></main-footer>
    </div>
</template>

<script>
import MainHeader from '@/components/layout/Header';
import MainNavigation from '@/components/layout/Navigation';
import MainMain from '@/components/layout/Main'
import MainFooter from '@/components/layout/Footer';

export default ({
    components: { MainHeader, MainNavigation, MainMain, MainFooter }
})
</script>

<style scoped>

</style>