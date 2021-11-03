<!--
	child.vue는 컴포넌트로 사용했고, 부모로부터 받은 데이터가 없기 때문에 라우터에서 직접 호출했을 때 아무것도 나타나지 않는다.
-->
<template>
	<div class="child">
		<h2>{{ title }}</h2>
		<p>{{ content }}</p>
		<span>{{ name }}</span>
		<i>{{ age }}</i>
	</div>
</template>

<script>
export default {
	name: 'child',
	props: [
		'title', 'content', 'name', 'age'
	]
}
</script>

<style>
div.child { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ddd; }
</style>