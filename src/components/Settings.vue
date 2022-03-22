<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Download Settings</h3>
      <div class="flex flex-col justify-center my-4">
        <!-- {{ sm.settings.value }} -->
        <!-- audio_provider -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Audio Provider</span>
          </label>
          <select
            class="select w-full"
            v-model="sm.settings.value.audio_provider"
          >
            <option
              v-for="(provider, index) in sm.settingsOptions.audio_provider"
              :key="index"
              :selected="provider === sm.settings.value.audio_provider"
            >
              {{ provider }}
            </option>
          </select>
        </div>
        <!-- lyrics_provider -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Lyrics Provider</span>
          </label>
          <select
            class="select w-full"
            v-model="sm.settings.value.lyrics_provider"
          >
            <option
              v-for="(provider, index) in sm.settingsOptions.lyrics_provider"
              :key="index"
              :selected="provider === sm.settings.value.lyrics_provider"
            >
              {{ provider }}
            </option>
          </select>
        </div>
        <!-- format -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Output Format</span>
          </label>
          <select class="select w-full" v-model="sm.settings.value.format">
            <option
              v-for="(format, index) in sm.settingsOptions.format"
              :key="index"
              :selected="format === sm.settings.value.format"
            >
              {{ format }}
            </option>
          </select>
        </div>
      </div>
      <div class="modal-action">
        <label for="my-modal" class="btn" @click="sm.saveSettings()"
          >Save</label
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import { useSettingsManager } from '../model/settings'

import { Icon } from '@iconify/vue'

export default {
  components: {
    Icon,
  },
  setup() {
    const sm = useSettingsManager()

    return { sm }
  },
}
</script>

<style scoped></style>
