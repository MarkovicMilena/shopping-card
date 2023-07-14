<script lang="ts">
export default {
    name: "HeaderComponent",
};
</script>
<script lang="ts" setup>
import {
    HOME_PAGE_ROUTE_NAME,
    PRODUCTS_PAGE_ROUTE_NAME
} from "../router/index";

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="../assets/images/logo.jpg" alt="Logo" class="logo">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: HOME_PAGE_ROUTE_NAME }" class="nav-link active"
                            aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: PRODUCTS_PAGE_ROUTE_NAME }" class="nav-link active"
                            aria-current="page">Products</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

