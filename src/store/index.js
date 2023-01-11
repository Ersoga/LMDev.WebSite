import {createStore,applyMiddleware} from 'redux'
//import userinfo from './reducers/userinfo';
import reducers from './reducers';
import thunk from 'redux-thunk'

import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const config = {
    key:'root',
    storage:storage,
    stateReconciler: autoMergeLevel2,
}
const persistConfigReducer = persistReducer(config,reducers)
const store = createStore(persistConfigReducer)
export const persistor = persistStore(store)
// const store = createStore({
//     modules:{
//         userinfo,
//         appinfo
//     }
// })
store.subscribe(()=>{
    localStorage.setItem('persist:rootor',JSON.stringify(store.getState()))
})
export default store;