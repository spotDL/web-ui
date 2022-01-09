// small file used as placeholder/settings for API calls via axios to server-side
import axios from 'axios' // used to connect to server backend in ./server folder
import config from '/src/config.js'

console.log('using config', config)

const API = axios.create({
  baseURL: process.env.BACKEND || config.BACKEND,
})

export default {
  search(query) {
    return API.get('/api/songs/search?query=' + query)
  },
  open(songURL) {
    return API.get('api/song/url?url=' + songURL)
  },
  download(songURL, sessionID) {
    return API.post(
      '/api/downloader/download/url?url=' + songURL + '&sessionID=' + sessionID
    )
  },
  downloadFileURL(fileName, sessionID) {
    return (
      API.defaults.baseURL +
      '/api/downloader/download/file?file=' +
      fileName +
      '&sessionID=' +
      sessionID
    )
  },
}
