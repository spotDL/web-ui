<template>
  <!-- <div class="" style="width: 100%"> -->
  <div
    class="navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    style="width: auto !important"
  >
    <button class="px-2 mx-2 navbar-start" @click="goto({ name: 'Home' })">
      <div class="bg-cover bg-no-repeat bg-center">
        <img src="../assets/spotdl.svg" class="py-2 pr-2 w-10 center" />
      </div>
      <button class="text-lg font-bold">spotDL</button>
    </button>
    <div class="hidden sm:flex px-2 mx-2 navbar-center w-96 space-x-4">
      <SearchInput class="w-full" />
    </div>
    <div class="navbar-end">
      <!-- <button class="btn btn-square px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> -->
      <label for="my-modal" class="btn btn-square modal-button mx-2">
        <Icon icon="clarity:settings-line" class="h-6 w-6" />
      </label>
      <div class="indicator">
        <div
          v-if="pt.downloadQueue.value.length > 0"
          class="indicator-item indicator-top indicator-end badge badge-secondary"
          style="top: -5px; right: -5px"
        >
          {{ pt.downloadQueue.value.length }}
        </div>
        <a
          class="btn btn-square"
          :class="route.name === 'Download' ? 'btn-primary' : 'btn-ghost'"
          @click="goto({ name: 'Download' })"
        >
          <Icon icon="clarity:download-cloud-line" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
  <div class="sm:hidden px-2 mx-2">
    <SearchInput class="w-full" />
  </div>
  <!-- </div> -->
</template>

<script>
import { ref, onMounted } from 'vue'
import router from '../router'
import { useRoute } from 'vue-router'

import { useProgressTracker, useDownloadManager } from '../model/download'

import { Icon } from '@iconify/vue'
import SearchInput from '../components/SearchInput.vue'

export default {
  components: {
    Icon,
    SearchInput,
  },
  setup() {
    const pt = useProgressTracker()
    const dm = useDownloadManager()

    const route = useRoute()
    function goto(dest) {
      router.push(dest)
    }
    return { goto, route, pt, dm }
  },
}
</script>

<style scoped>
.center {
  text-align: center;

  margin-left: auto;
  margin-right: auto;
}
</style>
