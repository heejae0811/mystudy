<template>
    <div>
        <child title="props를 소개합니다." content="props는 부모에서 하위 컴포넌트로 데이터를 전달할 수 있다."></child>

        <child title="v-bind는 jquery의 attr과 비슷한 역할" content="단방향 바인딩, v-bind 약어는 :"></child>

        <child v-bind:title="title" v-bind:content="content" v-bind:name="userName" :age="userAge"></child>
    </div>
</template>

<script>
import Child from '@/components/Child.vue'

export default{
    name: 'Parent',
    components: { Child },
    data(){
        return {
            title: 'v-bind를 이용해서 동적 props 소개',
            content: '부모에서 이 데이터가 변경되면 자식에게도 전달됩니다.',
            userName: '이희재',
            userAge: '27'
        }
    }
}
</script>