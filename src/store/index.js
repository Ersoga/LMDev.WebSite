import {createStore} from 'redux'
import userinfo from './userinfo';
import appinfo from './appinfo';
const store = createStore({

    modules:{
        userinfo,
        appinfo
    }
})

export default store;