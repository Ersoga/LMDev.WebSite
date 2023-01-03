import apiserver from "../../libs/api.request";

export const login = ({userName,password})=>{
    return apiserver.request({
        withPrefix:true,
        url:"/Oauth/Token"//测试使用，从测试api直接获取token
    })
}
export const getUserInfo = ()=>{
    return apiserver.request({
        withPrefix:true,
        url:"/User/GetUserInfoByToken"
    })
}