<template>
  <Hero />
</template>

<script>
import { ref, onMounted } from 'vue'
import Hero from '/src/components/Hero.vue'
import API from '../model/api'

export default {
  components: { Hero },
  setup() {
    onMounted(() => {
      window.scroll(0, 0)
      /*API.check_for_update().then((resp) => {
        if (Boolean(resp.data) === true) {
          alert("This version is no longer supported, please update https://github.com/spotDL/spotify-downloader")
          }
      }).catch((error) => {
        alert("This version is no longer supported, please update https://github.com/spotDL/spotify-downloader")
      })*/
    })
    return {}
  },
}
</script>

<style scoped></style>
