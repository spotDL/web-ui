// small file used as placeholder/settings for API calls via axios to server-side
import axios from 'axios' // used to connect to server backend in ./server folder
import config from '/src/config.js'

import { v4 as uuidv4 } from 'uuid'

console.log('using env:', process.env)
console.log('using config: ', config)

const API = axios.create({
  baseURL: `${config.PROTOCOL}//${config.BACKEND}:${config.PORT}${config.BASEURL}`,
})

const sessionID = uuidv4()
console.log('session ID: ', sessionID)

let version
getVersion()

const wsConnection = new WebSocket(
  `${config.WS_PROTOCOL}//${config.BACKEND}${config.PORT !== '' ? ':' + config.PORT : ''
  }${config.BASEURL}/api/ws?client_id=${sessionID}`
)

wsConnection.onopen = (event) => {
  console.log('websocket connection opened', event)
}

function getVersion() {
  return new Promise((resolve, reject) => {
    API.get("/api/version")
      .then(res => {
        console.log("Backend version: ", res.data)
        version = versionToNumber(res.data)
        console.log("Using numerical version: ", version)
        resolve(version)
      })
      .catch(error => {
        console.log("Error getting version, using 0")
        version = 0
        resolve(version)
      })
  })
}

function versionToNumber(versionStr) {
  /*
  *  This function converts a version in format w.x.y.z to a number.
  *  Each position has its value * 1000 ^ (3-position)
  */
  if (!versionStr) return 0
  const tokens = versionStr.split(".")
  let n = 0
  const tokensLengthOrFixed = tokens.length > 4 ? 4 : tokens.length
  for (let i = 0; i < tokensLengthOrFixed; i++) {
    n += Number(tokens[i]) * Math.pow(1000, 3 - i)
  }

  return n
}

function search(query) {
  return API.get('/api/songs/search', { params: { query } })
}

function open(songURL) {
  //4.2
  if (version >= 4002000000) {
    return API.get('/api/url', { params: { url: songURL } })
  } else {
    return API.get('/api/song/url', { params: { url: songURL } })
  }
}

function download(songURL) {
  return API.post('/api/download/url', null, {
    params: { url: songURL, client_id: sessionID },
  })
}

function check_for_update() {
  return API.get('/api/check_update')
}

function downloadFileURL(fileName) {
  return (
    API.defaults.baseURL +
    '/api/download/file?file=' +
    encodeURIComponent(fileName) +
    '&client_id=' +
    encodeURIComponent(sessionID)
  )
}

function getSettings() {
  return API.get('/api/settings', { params: { client_id: sessionID } })
}
function setSettings(settings) {
  return API.post('/api/settings/update', settings, {
    params: { client_id: sessionID },
  })
}

function ws_onmessage(fn) {
  return (wsConnection.onmessage = fn)
}
function ws_onerror(fn) {
  return (wsConnection.onerror = fn)
}

export default {
  search,
  open,
  download,
  downloadFileURL,
  getSettings,
  setSettings,
  check_for_update,
  ws_onmessage,
  ws_onerror,
  getVersion
}
