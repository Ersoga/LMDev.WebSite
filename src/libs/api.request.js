import HttpRequest from '@/libs/axios'
import config from '../config'
const baseUrl = process.env.API_URL
const defaultPrefix = config.ApI_VERSION;
const axios = new HttpRequest(baseUrl,defaultPrefix)
export default axios
