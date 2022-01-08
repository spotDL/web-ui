<template>
  <div>
    <Navbar />
    <SearchList
      :data="sm.results"
      :error="sm.error"
      @download="(song) => dm.queue(song)"
    />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useSearchManager } from '../model/search'
import { useDownloadManager } from '../model/download'

import Navbar from '/src/components/Navbar.vue'
import SearchList from '/src/components/SearchList.vue'

export default {
  components: { Navbar, SearchList },
  setup() {
    onMounted(() => {
      window.scroll(0, 0)
    })

    const route = useRoute()

    const sm = useSearchManager()
    const dm = useDownloadManager()

    watch(
      () => route.params.query,
      () => {
        if (route.params.query) sm.searchFor(route.params.query)
      },
      { deep: true }
    )

    sm.searchFor(route.params.query)
    return { sm, dm }
  },
}
</script>

<style scoped></style>
