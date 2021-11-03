<template>
    <div>
        경로 : /about <br>
        About.vue 페이지 입니다. <br>
        <v-link href="/">웰컴 페이지 이동</v-link>
    </div>
</template>

<script>
import VLink from "@/components/VLink";

export default {
  name: "About",
  components: { VLink },
}
</script>

<style scoped>

</style>