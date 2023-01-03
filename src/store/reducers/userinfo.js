import { getToken,setToken } from "../../libs/util"
export default function appinfo(
    state = {
    userName: '',
    userGuid: '',
    user_type: -1,
    avatorImgPath: '',
    token: getToken(),
    hasGetInfo: false,
    unreadCount: 0,
    },action) {
    switch (action.type) {
        case 'setUserGuid':
             state.userGuid = action.value
             return state
        case 'setUserType':
            state.user_type = action.value
            return state
        case 'setUserName':
            state.userName = action.value
            return state
        case 'setToken':
            setToken(action.value)
            return state
        case 'setHasGetInfo':
            state.hasGetInfo = action.value
            return state
      default:
        return state
    }
  }
// export default {
//     state:{
//         userName: '',
//         userGuid: '',
//         user_type: -1,
//         avatorImgPath: '',
//         token: getToken(),
//     }
// }