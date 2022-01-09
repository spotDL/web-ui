<template>
  <div class="hero min-h-screen">
    <div v-if="true" class="flex justify-end absolute top-0 right-0">
      <input
        type="checkbox"
        class="toggle m-5"
        @change="themeMgr.setTheme($event.target.checked ? 'light' : 'dark')"
        :checked="themeMgr.currentTheme.value === 'dark' ? false : 'checked'"
      />
    </div>
    <div class="block text-center justify-center hero-content">
      <div class="bg-cover bg-no-repeat bg-center">
        <img src="../assets/spotdl.svg" class="mb-5 w-32 center" />
      </div>
      <div class="max-w-lg">
        <h1 class="mb-5 text-5xl font-bold text-base-content">spotdl</h1>
        <p class="mb-5 text-base-content">
          Download any song and never have to worry about metadata.
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
    const themeMgr = useBinaryThemeManager()

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
