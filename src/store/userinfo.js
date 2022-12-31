import { getToken } from "../libs/util"
export default {
    state:{
        userName: '',
        userGuid: '',
        user_type: -1,
        avatorImgPath: '',
        token: getToken(),
    }
}