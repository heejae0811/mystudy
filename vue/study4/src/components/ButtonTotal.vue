<template>
	<div id="counter-event-example">
		<p>클릭의 총 합 : {{ total }}</p>
		<button-counter @increment="incrementTotal"></button-counter>
		<button-counter v-on:increment="incrementTotal"></button-counter>
	</div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue'

export default {
	name: 'index',
	components: { 
		ButtonCounter
	},
	data: function() {
    return {
            total: 0
        };
    },
	methods: {
		incrementTotal: function (param) {
			this.total += param
		}
	}
}
</script>
