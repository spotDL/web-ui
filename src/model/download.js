import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import API from '/src/model/api'

const sessionID = uuidv4()
const downloadQueue = ref([])

function useDownloadManager() {
  function queue(song, beginDownload = true) {
    downloadQueue.value.push(song)
    if (beginDownload) download(song)
  }

  function fromURL(url) {
    API.open(url)
      .then((res) => {
        console.log('Received Response:', res)
        if (res.status === 200) {
          console.log('Opened Song:', res.data)
          queue(res.data)
        } else {
          console.log('Error:', res)
        }
      })
      .catch((err) => {
        console.log('Other Error:', err.message)
      })
  }

  function remove(song) {
    downloadQueue.value = downloadQueue.value.filter(
      (_song) => _song.song_id !== song.song_id
    )
  }

  function queueLength() {
    return downloadQueue.value.length
  }

  function downloadedLength() {
    return downloadQueue.value.filter((song) => {
      return song.web_status === 'downloaded'
    }).length
  }

  function downloadedProgress() {
    if (downloadedLength() === 0 || queueLength() === 0) return 0
    return (downloadedLength() / queueLength()) * 100
  }

  function inQueue(song) {
    return downloadQueue.value.find(
      (_song) => _song.song_id === song.song_id
    ) !== undefined
      ? true
      : false
  }

  function download(song) {
    _setDownloading(song)
    API.download(song.url, sessionID)
      .then((res) => {
        console.log('Received Response:', res)
        if (res.status === 200) {
          console.log('Download Complete:', res.data)
          _setWebURL(song, API.downloadFileURL(res.data, sessionID))
          _setDownloaded(song)
        } else {
          console.log('Error:', res)
          _setError(song)
        }
      })
      .catch((err) => {
        console.log('Other Error:', err.message)
      })
  }

  function downloadAll() {
    downloadQueue.value.forEach((song, index, array) => {
      download(song)
    })
  }

  function isDownloaded(song) {
    return downloadQueue.value[_songIndex(song)].web_status === 'downloaded'
  }
  function isDownloading(song) {
    return downloadQueue.value[_songIndex(song)].web_status === 'downloading'
  }

  function status(song) {
    // API.status(sessionID, )
    return downloadQueue.value[_songIndex(song)].web_status
  }

  function _songIndex(song) {
    return downloadQueue.value.findIndex(
      (_song) => _song.song_id === song.song_id
    )
  }
  function _setWebURL(song, URL) {
    downloadQueue.value[_songIndex(song)].web_download_url = URL
  }
  function _setDownloading(song) {
    downloadQueue.value[_songIndex(song)].web_status = 'downloading'
  }
  function _setDownloaded(song) {
    downloadQueue.value[_songIndex(song)].web_status = 'downloaded'
  }
  function _setError(song) {
    downloadQueue.value[_songIndex(song)].web_status = 'error'
  }

  return {
    downloadQueue,
    queue,
    fromURL,
    queueLength,
    downloadedLength,
    downloadedProgress,
    remove,
    download,
    downloadAll,
    inQueue,
    status,
    isDownloaded,
    isDownloading,
  }
}

export { useDownloadManager }
