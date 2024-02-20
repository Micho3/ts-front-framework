<script setup lang="ts">
    import { ref } from "vue";
    import frameHeader from '../components/header.vue'
    import frameNav from '../components/nav.vue'
    let count = ref(0)
    // console.log(header);
    // const app = createApp({
    //     data: () => {
    //         return {
    //             count: 0
    //         }
    //     }
    // })
    //     .component('frameHeader', header)
    //     .mount('#rootContainer')
</script>

<template>
    <el-container id="rootContainer">
        <el-header id="frame-header">
            <frame-header/>
        </el-header>
        <el-container id="contentContainer">
            <el-aside id="frame-nav">
                <frame-nav/>
            </el-aside>
            <el-main id="frame-main">
                test: {{ count }}
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
</style>