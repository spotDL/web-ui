<script setup lang="ts">
import Nav from './Nav.vue';
import Drawer from "../shared/layout/Drawer.vue"
import Settings from "./Settings.vue"
</script>

<template>
    <Drawer name="main" title="Main">
        <template v-slot:main>
            <main>
                <Nav />
                <div class="flex">
                </div>
            </main>
        </template>
        <template v-slot:drawer-content>
            <Settings />
        </template>
    </Drawer>
</template>