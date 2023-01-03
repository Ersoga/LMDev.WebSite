import {createStore} from 'redux'
//import userinfo from './reducers/userinfo';
import reducers from './reducers';
const store = createStore(reducers)
// const store = createStore({
//     modules:{
//         userinfo,
//         appinfo
//     }
// })

export default store;