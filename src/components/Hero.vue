<template>
  <div class="hero min-h-screen">
    <div v-if="true" class="flex justify-end absolute top-0 right-0">
      <!-- <input
        type="checkbox"
        class="toggle my-5 mx-2"
        @change="themeMgr.setTheme($event.target.checked ? 'light' : 'dark')"
        :checked="themeMgr.currentTheme.value === 'dark' ? false : 'checked'"
      /> -->
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input
          type="checkbox"
          @change="themeMgr.setTheme($event.target.checked ? 'light' : 'dark')"
          :checked="themeMgr.currentTheme.value === 'dark' ? false : 'checked'"
        />

        <!-- sun icon -->
        &#8203;
        <Icon
          icon="clarity:sun-line"
          class="swap-on fill-current h-8 w-8 m-4"
        />

        <!-- moon icon -->
        &#8203;
        <Icon
          icon="clarity:moon-line"
          class="swap-off fill-current h-8 w-8 m-4"
        />
      </label>
      <label for="my-modal" class="btn btn-square modal-button m-2">
        &#8203;
        <Icon icon="clarity:settings-line" class="h-6 w-6" />
      </label>
    </div>
    <div class="block text-center justify-center hero-content">
      <div class="bg-cover bg-no-repeat bg-center">
        <img src="../assets/spotdl.svg" class="mb-5 w-32 center" />
      </div>
      <div class="max-w-lg">
        <h1 class="mb-5 text-5xl font-bold text-base-content">spotDL</h1>
        <p class="mb-5 text-base-content">
          Download your Spotify songs with embedded album art and metadata
        </p>
      </div>

      <SearchInput />
      <div class="alert alert-info shadow-lg my-4">
        <div>
          <!-- <svg
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
          </svg> -->
          <Icon
            icon="clarity:info-circle-line"
            class="swap-off fill-current h-6 w-6"
          />
          <span
            >This web interface currently downloads only songs. <br />
            Album, Artist, Playlist and Show links will not work.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeMount } from 'vue'
import { Icon } from '@iconify/vue'
import SearchInput from '../components/SearchInput.vue'

import { useBinaryThemeManager } from '../model/theme'

export default {
  components: { Icon, SearchInput },
  setup() {
    const themeMgr = useBinaryThemeManager({
      newLightAlias: 'spotdl-light',
      newDarkAlias: 'spotdl-dark',
    })

    return { themeMgr }
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
