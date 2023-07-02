<script setup lang="ts">
import { useLocalStorage } from "@app/composables/useLocalStorage"

import { useAppStore } from "@app/store"

const store = useAppStore();

const themes = ["forest", "dark", "light", "cyberpunk", "cupcake"]

</script>

<script lang="ts">
import ChevronDownIcon from "@app/components/icons/ChevronDownIcon.vue"
import CheckIcon from "@app/components/icons/CheckIcon.vue"
import PaintIcon from "@app/components/icons/PaintIcon.vue"
</script>

<template>
  <div class="dropdown dropdown-end">
    <button class="btn btn-ghost hidden md:inline-flex normal-case">
      <PaintIcon class="h-5 w-5" />
      Theme
      <ChevronDownIcon class="w-4 h-4" />
    </button>
    <div class="dropdown-content bg-base-300 text-base-content w-56 rounded-box mt-2">
      <div v-for="theme in  themes " class="grid grid-cols-1 p-2">
        <button @click="store.$patch({ theme })" class="outline-base-content overflow-hidden rounded-lg text-left"
          :data-set-theme="theme">
          <div :data-theme="theme" class="bg-base-100 text-base-content w-full cursor-pointer">
            <div class="grid grid-cols-5 grid-rows-3">
              <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                  <div class="bg-primary w-2 rounded"></div>
                  <div class="bg-secondary w-2 rounded"></div>
                  <div class="bg-accent w-2 rounded"></div>
                  <div class="bg-neutral w-2 rounded"></div>
                </div>
                <div class="flex-grow text-sm capitalize ml-2">{{ theme }}</div>
                <CheckIcon :class="`w-4 h-4 shrink-0 ${!(store.theme === theme) && 'invisible'}`" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>