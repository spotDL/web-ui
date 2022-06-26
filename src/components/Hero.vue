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
