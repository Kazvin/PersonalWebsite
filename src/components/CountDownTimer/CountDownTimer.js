import './style.css';
// import './script.js';
import { NavBar } from "../Nav";
import React from "react";

// import { countdown, changeDate } from './script.js';


export function CountDownTimer() {
    
    return (
        <>
        <NavBar />

        
    <h1>Countdown</h1>
    <h2>Default set to new years 2050</h2>

    

    <div className='calendar'>
        <input type='date' id='Date' />
        <button onclick="changeDate()">Countdown</button>
    </div>
    

    <div className='timer-container' >
        <div>
            <div id='days'></div>
            <span>days</span>
        </div>
        <div>
            <div id='hours'></div>
            <span>hours</span>
        </div>
        <div>
            <div id='minutes'></div>
            <span>minutes</span>
        </div>
        <div>
            <div id='seconds'></div>
            <span>seconds</span>
        </div>
    </div>


    <div className='timer-container' >
        <div>
            <div id='thours'></div>
            <span>Total hours</span>
        </div>
        <div>
            <div id='tminutes'></div>
            <span>Total minutes</span>
        </div>
        <div>
            <div id='tseconds'></div>
            <span>Total seconds</span>
        </div>
    </div>


    </>
    );
}