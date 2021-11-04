<template>
    <div class="child">
        <p><slot :text="child-text"></slot></p>
    </div>
</template>

<script>
export default ({
    name: 'child',
    props: [
        'text'
    ]
})
</script>