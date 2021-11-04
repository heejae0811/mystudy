<template>
    <div class="parent">
        <child>
            <template slot-scope>
                <p>부모 컴포넌트에서 작성한 text 입니다.</p>
                <p>{{ props.text }}</p>
            </template>
        </child>

        <child>{{ text }}</child>
    </div>
</template>

<script>
import Child from '@/components/Child.vue'

export default ({
    name: 'parent',
    components: {
        Child
    },
    data(){
        return {
            text: '부모 컴포넌트에서 작성한 text'
        }
    }
})
</script>