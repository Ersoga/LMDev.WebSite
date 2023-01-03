import { combineReducers } from 'redux'
import appinfo from './appinfo'
import userinfo from './userinfo';
export default combineReducers({
    appinfo,
    userinfo
})