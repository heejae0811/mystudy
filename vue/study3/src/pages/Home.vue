<template>
  <div>
    <p>이것은 Home.vue 파일 입니다.</p>

    <a href="/navigation">a 태그 : Navigation 페이지로 가기</a>

    <ul>
      <li><v-navigation href="/navigation">component: Navigation 페이지로 가기</v-navigation></li>
    </ul>
  </div>
</template>

<script>
import VNavigation from "@/components/VLink";

export default {
  name: "Home",
  components: { VNavigation },
}
</script>

<style scoped>

</style>
