const {PHASE_DEVELOPMENT_SERVER} =require('next/constants')

module.exports = phase => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  const env= {
    SITE_NAME: 'EDblog',
    API_BLOG: (()=>{
      return isDevelopment
              ? 'https://jsonplaceholder.typicode.com'
              : 'https://jsonplaceholder.typicode.com'
    })()
  }
  return {
    env
  }
}