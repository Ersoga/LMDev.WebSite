import * as React from "react"
import Cara from './cara'
import  ReactDOM  from "react-dom"

import {Provider} from 'react-redux'
import {persistor} from '../store'
import store from "../store"
import {PersistGate} from 'redux-persist/lib/integration/react'

class CaraStore extends React.Component{
    render(): React.ReactNode {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Cara></Cara>
                </PersistGate>
            </Provider>
        )
    }
}
ReactDOM.render(<CaraStore/>,document.getElementById('root'))
// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <Cara></Cara>
//     </PersistGate>
//   </Provider>,document.getElementById('root')
// );