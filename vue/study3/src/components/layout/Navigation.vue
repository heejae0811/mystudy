<template>
    <ul>
        <li v-for="(item, index) of listItem" :key="index">
            <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return{
            listItem: [
                {
                    name: "Page1",
                    link: "/page1"
                },
                {
                    name: "Page2",
                    link: "/page2"
                },
            ]
        }
    }
}
</script>