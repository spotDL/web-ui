<template>
  <div class="flex flex-row items-center space-x-4 w-full">
    <input
      type="text"
      placeholder="All Eyes On Me - Bo Burnham"
      class="input input-bordered w-full text-base-content"
      v-model="searchTerm"
      @keyup.enter="lookUp(searchTerm)"
    />
    <button class="btn btn-square btn-primary" @click="lookUp(searchTerm)">
      <!-- zero-width space - this btn class style breaks with only a svg inside -->
      &#8203;
      <Icon
        v-if="isValidURL(searchTerm)"
        icon="clarity:download-line"
        class="h-6 w-6"
      />
      <Icon v-else icon="clarity:search-line" class="h-6 w-6" />
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeMount } from 'vue'
import { Icon } from '@iconify/vue'
import router from '../router'

import { useSearchManager } from '../model/search'
import { useDownloadManager } from '../model/download'

export default {
  components: { Icon },
  setup() {
    const sm = useSearchManager()
    const dm = useDownloadManager()

    function lookUp(query) {
      if (sm.isValidURL(query)) {
        dm.fromURL(query)
        goto({ name: 'Download' })
      } else if (sm.isValidSearch(query)) {
        let dest = { name: 'Search', params: { query: query } }
        if (sm.isValidSearch(query)) goto(dest)
      }
    }

    function goto(dest) {
      router.push(dest)
    }
    return { lookUp, searchTerm: sm.searchTerm, isValidURL: sm.isValidURL }
  },
}
</script>

<style scoped></style>
