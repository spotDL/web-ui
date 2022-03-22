<template>
  <!-- :data-theme="theme ? 'forest' : 'emerald'" -->
  <div class="bg-base-300 absolute w-full top-0">
    <router-view></router-view>
    <Footer />
    <Settings />
  </div>
</template>

<script>
import { ref, onMounted, watch, onBeforeMount } from 'vue'
import Footer from './components/Footer.vue'
import Settings from './components/Settings.vue'
import { useBinaryThemeManager } from './model/theme'

export default {
  name: 'App',
  components: {
    Footer,
    Settings,
  },
  setup() {
    const themeMgr = useBinaryThemeManager()
    onBeforeMount(() => {
      themeMgr.setLightAlias('emerald')
      themeMgr.setDarkAlias('forest')
    })

    return { themeMgr }
  },
}
</script>

<style></style>
