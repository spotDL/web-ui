<script setup lang="ts">
import Settings from "./Settings.vue"
import Search from "./Search.vue";
import Queue from "./Queue.vue";
import Header from "./Header.vue"
import Footer from "./Footer.vue";
</script>

<template>
  <Header />
  <div>
    <div class="mx-auto flex max-w-8xl px-8">
      <div class="block w-80 shrink-0">
        <div class="sticky top-[var(--header-height)] h-[calc(100vh_-_var(--header-height))]">
          <Settings />
        </div>
      </div>
      <div class="block z-10 order-2 w-80">
        <div class="sticky shrink-0 top-[var(--header-height)] h-[calc(100vh_-_var(--header-height))]">
          <Queue />
        </div>
      </div>
      <main class="flex min-w-0 flex-1 min-h-screen pt-[var(--header-height)]">
        <Search />
      </main>
    </div>
    <Footer />
  </div>
</template>