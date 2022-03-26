const config = {
  PROTOCOL: process.env.PROTOCOL || 'http',
  WS_PROTOCOL: process.env.WS_PROTOCOL || 'ws',
  BACKEND: process.env.BACKEND || 'localhost',
  PORT: process.env.PORT || '8800',
  BASEURL: process.env.BASEURL || '',
}

export default config
