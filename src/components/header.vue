<script setup lang="ts">
    // import { createApp, ref } from "vue";
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import  { faUserCircle } from "@fortawesome/free-regular-svg-icons";
    import  {  faGear } from "@fortawesome/free-solid-svg-icons";
    library.add(faUserCircle, faGear)
    let username: string = 'admin'
    // const app = createApp({
    //
    // })
        // .component('font-awesome-icon', FontAwesomeIcon)
        // .mount('#frame-header')
</script>

<template>
    <img class="title-logo" src="../assets/images/logo.png" alt="logo">
    <div class="user-option">
        <font-awesome-icon size="lg" :icon="['fa', 'gear']"/>
        <el-divider direction="vertical" />
        <font-awesome-icon size="lg" :icon="['far', 'user-circle']"/> {{username}}
    </div>
</template>

<style scoped lang="scss">

</style>