<template>
    <input
        :type="type"
        :maxlength="maxLength"
        :minlength="minLength"
        :placeholder="placeholder"
        @input="updateInputText"
    >
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        type: {
            type: String
        },
        maxLength: {
            type: String
        },
        minLength: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    methods: {
        updateInputText(event){
            this.isValidate = !!event.target.value;
            this.$emit('input', event.target.value)
        }
    }
}
</script>