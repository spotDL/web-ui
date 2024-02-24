<template>
  <div class="hero min-h-screen">
    <div v-if="true" class="flex justify-end absolute top-0 right-0">
      <label class="btn btn-circle swap swap-rotate m-2">
        <input
          type="checkbox"
          @change="
            themeMgr.setTheme(
              ($event.target as HTMLInputElement)?.checked ? 'light' : 'dark'
            )
          "
          :checked="themeMgr.currentTheme.value === 'dark' ? false : true"
        />
        <Icon
          icon="clarity:sun-line"
          class="swap-on fill-current h-8 w-8 m-4"
        />
        <Icon
          icon="clarity:moon-line"
          class="swap-off fill-current h-8 w-8 m-4"
        />
      </label>
      <label for="my-modal" class="btn btn-square modal-button m-2">
        <Icon icon="clarity:settings-line" class="h-6 w-6" />
      </label>
    </div>
    <div class="block text-center justify-center hero-content">
      <div class="bg-cover bg-no-repeat bg-center">
        <img src="../assets/spotdl.svg" class="mb-5 w-32 center" />
      </div>
      <div>
        <h1 class="mb-5 text-5xl font-bold text-base-content">spotDL</h1>
        <p class="mb-5 text-base-content">
          Download your Spotify songs with embedded album art and metadata
        </p>
      </div>

      <SearchInput />
      <div role="alert" class="alert alert-info shadow-lg my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          This interface now can download a song or an entire album, artist, or
          playlist.
          <br />
          <span v-if="version < '4.2.1'"> This version is n </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SearchInput from '../components/SearchInput.vue'

import { useBinaryThemeManager } from '../model/theme'

const themeMgr = useBinaryThemeManager({
  newLightAlias: 'spotdl-light',
  newDarkAlias: 'spotdl-dark',
})

const version = localStorage.getItem('version') || '0.0.0'
</script>

<style scoped>
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
