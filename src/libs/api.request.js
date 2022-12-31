import HttpRequest from './axios'

const apiserver = new HttpRequest(process.env.GATSBY_API_URL,process.env.GATSBY_API_PREFIX)

export default apiserver;