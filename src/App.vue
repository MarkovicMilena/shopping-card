<script lang="ts">
export default {
  name: "App",
};
</script>
<script lang="ts" setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <header-component />
  <router-view />
</template>

<style lang="scss">
@import "./sass/styles.scss";
</style>