import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from "axios";

// const promise = axios
//     .get('http://localhost:3001/notes')
//     .then(res => {
//         const notes = res.data
        ReactDOM.createRoot(document.getElementById('root')).render(<App/* notes={notes}*/ />)
//     })
