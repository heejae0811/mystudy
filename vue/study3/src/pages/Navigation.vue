<template>
  <div>
    <p>이것은 Navigation.vue 파일 입니다.</p>

    <a href="/home">a 태그 : Home 페이지로 가기</a>

    <ul>
      <li><v-navigation href="/home">component : Home 페이지로 가기</v-navigation></li>
    </ul>
  </div>   
</template>

<script>
import VNavigation from "@/components/VLink";

export default {
  name: "Navigation",
  components: { VNavigation },
}
</script>

<style scoped>

</style>
