<template>
  <div
    class="navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    style="width: auto !important"
  >
    <button
      class="px-2 mx-2 navbar-start"
      @click="router.push({ name: 'Home' })"
    >
      <div class="bg-cover bg-no-repeat bg-center">
        <img src="../assets/spotdl.svg" class="py-2 pr-2 w-10 center" />
      </div>
      <button class="text-lg font-bold">spotDL</button>
    </button>
    <!-- <div class="navbar-start">
      <a
        class="btn btn-ghost text-xl font-bold"
        @click="router.push({ name: 'Home' })"
      >
        <img src="../assets/spotdl.svg" class="py-2 pr-2 w-10 center" />
        spotDL
      </a>
    </div> -->
    <div class="hidden sm:flex px-2 mx-2 navbar-center w-96 space-x-4">
      <SearchInput class="w-full" />
    </div>
    <div class="navbar-end">
      <label class="btn btn-circle swap swap-rotate mx-2">
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
      <label for="my-modal" class="btn btn-circle modal-button mx-2">
        <Icon icon="clarity:settings-line" class="h-6 w-6" />
      </label>
      <div class="indicator mx-2">
        <div
          v-if="pt.downloadQueue.value.length > 0"
          class="indicator-item indicator-top indicator-end badge badge-secondary"
          style="top: -5px; right: -5px"
        >
          {{ pt.downloadQueue.value.length }}
        </div>
        <a
          class="btn btn-circle"
          :class="route.name === 'Download' ? 'btn-primary' : 'btn-ghost'"
          @click="
            route.name === 'Download'
              ? router.push({
                  name: 'Search',
                  params: { query: sm.searchTerm.value },
                })
              : router.push({ name: 'Download' })
          "
        >
          <Icon icon="clarity:download-cloud-line" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
  <div class="sm:hidden px-2 mx-2">
    <SearchInput class="w-full" />
  </div>
</template>

<script setup lang="ts">
import router from '../router'
import { useRoute } from 'vue-router'

import { useBinaryThemeManager } from '../model/theme'
import { useProgressTracker, useDownloadManager } from '../model/download'
import { useSearchManager } from '../model/search'

import { Icon } from '@iconify/vue'
import SearchInput from '../components/SearchInput.vue'

const pt = useProgressTracker()
const dm = useDownloadManager()
const sm = useSearchManager()
const route = useRoute()

const themeMgr = useBinaryThemeManager({
  newLightAlias: 'spotdl-light',
  newDarkAlias: 'spotdl-dark',
})
</script>

<style scoped>
.center {
  text-align: center;

  margin-left: auto;
  margin-right: auto;
}
</style>
