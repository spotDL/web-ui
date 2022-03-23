<template>
  <div class="min-h-screen m-2">
    <div v-if="pt.downloadQueue.value.length === 0">
      <div class="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No downloads are queued. Search for a song to begin.</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="carousel carousel-end bg-base-200 rounded-box shadow-lg">
        <div
          v-for="(downloadItem, index) in pt.downloadQueue.value"
          :key="index"
          class="carousel-item h-48"
        >
          <img :src="downloadItem.song.cover_url" />
        </div>
      </div>

      <div class="card card-bordered my-2 shadow-lg card-compact bg-base-100">
        <div
          v-for="(downloadItem, index) in pt.downloadQueue.value"
          :key="index"
          class="card-body grid grid-rows-1"
        >
          <h2 class="card-title">
            {{ downloadItem.song.name }} - {{ downloadItem.song.artist }}
          </h2>

          <p>
            {{ downloadItem.song.album_name }}
          </p>
          <div class="stat-figure text-primary flex space-x-2 items-center">
            <div
              v-if="downloadItem.isErrored()"
              class="badge badge-error gap-2"
            >
              error
            </div>
            <span class="badge">{{
              downloadItem.message || downloadItem.web_status
            }}</span>
            <button
              class="btn btn-error btn-outline btn-square"
              @click="dm.remove(downloadItem.song)"
            >
              &#8203;
              <Icon icon="clarity:trash-line" class="h-6 w-6" />
            </button>
            <a
              v-if="downloadItem.isDownloaded()"
              class="btn btn-square btn-ghost"
              href="javascript:;"
              @click="download(downloadItem.web_download_url)"
              download
            >
              &#8203;
              <Icon icon="clarity:download-line" class="h-6 w-6" />
            </a>
            <button
              v-else-if="downloadItem.progress === 0"
              class="btn btn-square btn-ghost loading"
            >
              &#8203;
            </button>
            <div
              v-else
              class="
                radial-progress
                bg-primary
                text-primary-content
                border-4 border-primary
              "
              :style="`--value: ${downloadItem.progress * 100}; --size: 2.5rem`"
            >
              {{ Math.round(downloadItem.progress * 100) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

import { useProgressTracker, useDownloadManager } from '../model/download'
export default {
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
  setup(props, context) {
    const pt = useProgressTracker()
    const dm = useDownloadManager()

    function download(url) {
      const a = document.createElement('a')
      a.href = url
      a.download = url.split('/').pop()
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    return { dm, pt, download }
  },
}
</script>

<style scoped></style>
