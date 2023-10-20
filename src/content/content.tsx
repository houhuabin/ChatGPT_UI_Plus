import React from 'react'



import { Provider } from 'react-redux'
import store from './redux/Store'
import App from './App'


export default function content() {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
