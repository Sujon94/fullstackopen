import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ABCs from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const Clock = (props)=> <p>Now it is {props.date.toLocaleTimeString()}</p>;
//const timer =()=>{
    root.render(
        <React.StrictMode>
            <ABCs />
            <Clock />
        </React.StrictMode>
    );
//}

//setInterval(timer, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
