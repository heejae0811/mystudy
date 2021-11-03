<template>
    <label>
        <input
            type="checkbox"
            @change="updateCheckbox"
        >
        <slot>{{ label }}</slot>
    </label>
</template>

<script>
export default{
    name: 'custom-checkbox',
    props: {
        label: {
            type: String,
            dafault: 'check me'
        },
        val: {
            type: null
        },
        data: {
            type: Array
        }
    },
    methods: {
        updateCheckbox(event){
            let data = this.$attrs.value

            if(event.target.checked){
                data.push(this.val)
                this.$emit('input', data);
            }else{
                this.$emit('input', data.filter(f => f !== this.val))
            }
        }
    }
}
</script>
