<!--
	vue에서는 유튜브 같은 새 창으로 이동이 아닌 이상 href를 사용하지 않는다. -> path 사용
	흠.. 어떻게 바꾸지;; pathname을 바꾸는 것 같은뎁;;
	-> vue-router 패키지를 사용해서 굳이 이 방법은 몰라도 될 것 같기도 ㅎㅎ
-->
<template>
	<a
		:href="href"
		:class="{ active: isActive }"
		@click="go"
	>
		<slot></slot>
	</a>
</template>

<script>
import routes from '../router.js';

export default {
	props: {
		href: {
			type: String,
			required: true
		}
	},
	computed: {
		isActive() {
			return this.href === this.$root.currentRoute;
		}
	},
	methods: {
		go(event) {
			event.preventDefault();
			this.$root.currentRoute = this.href;
			window.history.pushState(
				null,
				routes[this.href],
				this.href
			)
		}
	}
}
</script>