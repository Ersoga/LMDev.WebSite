import { combineReducers } from 'redux'
import appinfo from './appinfo'
import userinfo from './userinfo';
const _ = (state = 0, _) => state;
export default combineReducers({
    _,
    appinfo,
    userinfo
})