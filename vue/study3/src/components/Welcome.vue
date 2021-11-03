<template>
    <div>
        경로 : / <br>
        Welcome.vue 파일 입니다. <br>
        <v-link href="/about">어바웃 페이지 이동</v-link>
    </div>
</template>

<script>
import VLink from "@/components/VLink";

export default {
  name: "Welcome",
  components: { VLink },
}
</script>

<style scoped>

</style>