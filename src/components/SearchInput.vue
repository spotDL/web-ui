<template>
  <div class="flex flex-row items-center space-x-4 w-full">
    <input
      type="text"
      :placeholder="placeHolder"
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
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import router from '../router'

import { useSearchManager } from '../model/search'
import { useDownloadManager } from '../model/download'

export default {
  components: { Icon },
  setup() {
    const sm = useSearchManager()
    const dm = useDownloadManager()

    const placeHolderOptions = [
      'All Eyes On Me - Bo Burnham',
      'https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f',
      'Lil Wayne',
      'Drive - Miley Cyrus',
      'Sofia - TMG',
      'Lightning Crashes - Live',
    ]

    const placeHolder = ref(placeHolderOptions[0])

    const polling = setInterval(() => {
      // Loop placeHolder value through placeHolderOptions by moving 0th index to end every 6 seconds
      placeHolderOptions.push(placeHolderOptions.shift())
      placeHolder.value = placeHolderOptions[0]
    }, 6000)

    onBeforeUnmount(() => {
      clearInterval(polling)
    })

    function lookUp(query) {
      if (sm.isValidURL(query)) {
        dm.fromURL(query)
        goto({ name: 'Download' })
      } else if (sm.isValidSearch(query)) {
        let dest = { name: 'Search', params: { query: query } }
        if (sm.isValidSearch(query)) goto(dest)
      } else {
        console.log('Invalid search term.')
      }
    }

    function goto(dest) {
      router.push(dest)
    }
    return {
      lookUp,
      searchTerm: sm.searchTerm,
      isValidURL: sm.isValidURL,
      placeHolder,
    }
  },
}
</script>

<style scoped></style>
