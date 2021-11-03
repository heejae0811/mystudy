<!--
    router-view : 현재 라우터가 제공하는 컴포넌트가 렌더링 된다.
    router-link : html 태그로 변환되며 a 태그로 렌더링 된다.
    3주차 layout/Navigation.vue 파일을 보면 v-for와 배열의 값을 이용해 링크 변경이 가능하다.
-->
<template>
    <div>
        <ul>
            <li><router-link to="/about">about 페이지 이동</router-link></li>
            <li><router-link to="/welcome">welcome 페이지 이동</router-link></li>
            <li><router-link to="/parent">parent 페이지 이동</router-link></li>
            <li><router-link to="/child">child 페이지 이동</router-link></li>
            <li><router-link to="/button-total">button-total 페이지 이동</router-link></li>
            <li><router-link to="/button">button 페이지 이동</router-link></li>
            <li><router-link to="/input">input 페이지 이동</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Link'
}
</script>