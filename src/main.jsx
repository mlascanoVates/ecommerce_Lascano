import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {firestoreInit} from './firebase/config.js'
import './reset.css'
import './index.css'

firestoreInit()

ReactDOM.createRoot(document.getElementById('root')).render(
 /*  <React.StrictMode> */
    <App />
/*   </React.StrictMode> */

)
