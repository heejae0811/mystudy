<template>
    <label>
        <input
            :name="id"
            type="radio"
            @change="updateRadio"
        >
        <slot>{{ label }}</slot>
    </label>
</template>

<script>
export default{
    name: 'custom-radio',
    props: {
        id: {
            type: String
        },
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
        updateRadio(event){
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
