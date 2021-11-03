<template>
    <main-layout>
        <template v-slot:header>slot 헤더</template>

        <div slot:main>slot 메인</div>

        <div slot="footer">slot 푸터</div>
    </main-layout>
    
</template>

<script>
import MainLayout from '@/components/layout/Index';

export default {
    name: 'Page1',
    components: { MainLayout }
}
</script>

<style scoped>

</style>