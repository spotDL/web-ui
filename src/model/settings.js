import { ref, computed } from 'vue'

import API from '/src/model/api'

const settings = ref({})

const settingsOptions = {
  audio_provider: ['youtube', 'youtube-music'],
  lyrics_provider: ['genius', 'musixmatch', 'azlyrics'],
  format: ['mp3', 'flac', 'ogg', 'opus', 'm4a'],
  output: '{artists} - {title}.{output-ext}',
}

API.getSettings().then((res) => {
  // console.log('Received settings response:', res)
  if (res.status === 200) {
    console.log('Received settings:', res.data)
    settings.value = res.data
  } else {
    console.log('Error loading settings')
  }
})

// console.log('Download Settings', settings.value)

function useSettingsManager() {
  const isSaved = ref()
  function saveSettings() {
    console.log('Saving settings:', settings.value)
    API.setSettings(settings.value).then((res) => {
      console.log('Received settings response:', res)
      if (res.status === 200) {
        console.log('Saved!')
        isSaved.value = true
        setTimeout(() => {
          isSaved.value = null
        }, 2000)
      } else {
        console.log('Error saving settings')
        isSaved.value = false
        setTimeout(() => {
          isSaved.value = null
        }, 2000)
      }
    })
  }
  return { saveSettings, settings, settingsOptions, isSaved }
}

export { useSettingsManager }
