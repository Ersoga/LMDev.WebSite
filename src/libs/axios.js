import axios from 'axios'
import {getToken} from '../libs/util'

class HttpRequest {
    constructor(baseUrl,preFix)
    {
        this.baseUrl = baseUrl
        this.defaultPrefix = preFix
        this.queue = {}//请求队列
    }
    getInsideConfig() {
        const config = {
          baseURL: this.baseUrl,
          headers: {
            "Authorization": "Bearer " + getToken()
          }
        }
        return config
    }
    destroy(url) {
      delete this.queue[url]
      if (!Object.keys(this.queue).length) {
        // Spin.hide()
      }
    }
    showError(error, errorInfo) {
        let message = "接口服务错误,请稍候再试.";

        let statusCode = -1;
        if (error.response && error.response.status) {
            statusCode = error.response.status;
        }
        switch (statusCode) {
            case 401:
                message = "接口服务错误,原因:未授权的访问(没有权限或者登录已超时)";
                break;
            case 500:
                message = "接口服务错误,原因:[" + error.response.statusText + "]";
                break;
            case -1:
                message = "网络出错,请检查你的网络或者服务是否可用<br />请求地址:[" + error.config.url + "]";
                break;
            default:
                message = "出现其他错误";
        }
        alert(message);
    }
    interceptors(instance, url) {
      // 请求拦截
      instance.interceptors.request.use(config => {
        return config
      }, error => {
        console.log('232');
        return Promise.reject(error)
      })
      // 响应拦截
      instance.interceptors.response.use(res => {
        console.log("Object.keys(this.queue).length");
        //iView.LoadingBar.finish();
        this.destroy(url)
        const {
          data,
          status
        } = res
        return {
          data,
          status
        }
      }, error => {
        this.destroy(url)
        let errorInfo = error.response
        if (!errorInfo) {
          const {
            request: {
              statusText,
              status
            },
            config
          } = JSON.parse(JSON.stringify(error))
          errorInfo = {
            statusText,
            status,
            request: {
              responseURL: config.url
            }
          }
        }
        //addErrorLog(errorInfo)
        if (error.config.hideError == null || error.config.hideError == false) {
          this.showError(error);
        }
  
  
        //iView.LoadingBar.finish();
  
        return Promise.reject(error)
      })
    }
    request(options) {
        const instance = axios.create()
        let withPrefix = true
        if (options.withPrefix !== undefined && options.withPrefix === false) {
          withPrefix = false
        }
        let url = options.url
        if (options.prefix !== undefined && options.prefix.length > 0) {
          url = options.prefix + options.url
        }
        else if (withPrefix) {
          url = this.defaultPrefix + options.url
        }
        options.url = url
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
      }
}

export default HttpRequest;