<script setup lang="ts">
import Nav from './Nav.vue';
import Drawer from "../shared/layout/Drawer.vue"
import Settings from "./Settings.vue"
import Footer from './Footer.vue';
</script>

<template>
    <Drawer name="main" title="Main">
        <template v-slot:main>
            <Nav />
            <main class="h-fit pt-2 flex">
                <div class="flex h-full w-full overflow-y-auto">
                    <!-- Search -->
                    <div class="flex w-full max-w-[calc(100vw_-_34rem)] ml-2 h- min-h-[calc(100vh_-_64px_-_1rem)]">
                        <div class="h-full w-full px-4"></div>
                    </div>
                </div>
                <!-- Downloads -->
                <div class="hidden md:flex fixed right-2 top-[calc(64px_+_0.5rem)] w-full max-w-lg h-full -mr-2 pr-2">
                    <div class="w-full h-[calc(100vh_-_64px_-_1rem)] bg-base-200 rounded-box py-4">
                        <div class="w-full scrollbar-thin h-full overflow-x-clip overflow-y-auto px-4">
                        </div>
                    </div>
                </div>
            </main>
            <div class="w-full max-w-[calc(100vw_-_33.5rem)] ml-2 px-2">
                <div class="divider" />
                <Footer />
            </div>
        </template>
        <template v-slot:drawer-content>
            <Settings />
        </template>
    </Drawer>
</template>