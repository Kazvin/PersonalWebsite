import './style.css';
// import './script.js';
import { NavBar } from "../Nav";
import React, { useState, useEffect } from "react";

// import { countdown, changeDate } from './script.js';


export function CountDownTimer() {
    //countdown date to
    const [targetDate, setTargetDate] = useState(new Date("2050-01-01T00:00:00"));

    //today's date tracker
    const [todaysDate, setTodayDate] = useState(new Date());

    var targetDateString = targetDate.toDateString();

    //total milliseconds between countdown date and todays date
    const [time, setTime] = useState(null);


    const [seconds, setSeconds] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [hours, setHours] = useState(null);
    const [days, setDays] = useState(null);



    const [totalSeconds, setTSeconds] = useState(null);
    const [totalMinutes, setTMinutes] = useState(null);
    const [totalHours, setTHours] = useState(null);

    //set to button countdown
    function changeDate(e) {
        e.preventDefault();
        console.log("input date: " + e.target.Date.value);
        let tempdate = new Date(e.target.Date.value);
        tempdate.setHours(tempdate.getHours() + 5);

        setTargetDate(new Date(tempdate));


    }

    //after the target date is set then set the time.
    useEffect(() => {
        setTodayDate(new Date());

        console.log("Target date set to " + targetDate);
        console.log("today's date set to " + todaysDate);

        console.log("getTime of targetDate " + targetDate.getTime());


        setTime(targetDate.getTime() - todaysDate.getTime());


    }, [targetDate]); // eslint-disable-line react-hooks/exhaustive-deps




    //after the total time is set calculate the seconds, minutes, hours, and days 
    useEffect(() => {

        setSeconds(Math.floor(time / 1000) % 60);
        setMinutes(Math.floor(time / 60 / 1000 % 60));
        setHours(Math.floor(time / 1000 / 3600 % 24));
        setDays(Math.floor(time / 3600 / 24 / 1000));

        setTSeconds(Math.floor(time / 1000));
        setTMinutes(Math.floor(time / 60 / 1000));
        setTHours(Math.floor(time / 1000 / 3600));

    }, [time]);


    //interval set to 1 second. update the timer
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds - 1);
            setTSeconds(totalSeconds - 1);

            if (seconds === 0) {
                setMinutes(minutes - 1);
                setTMinutes(totalMinutes - 1);
                setSeconds(59);
            }

            if (minutes === 0) {
                setHours(hours - 1);
                setTHours(totalHours - 1);
                setMinutes(59);
            }

            if (hours === 0) { setDays(days - 1); setHours(59); }

        }, 1000);
        return () => clearInterval(interval);
    });




    return (
        <>
            <NavBar />
            <div className='container-fluid fade'>



                <h1>Countdown</h1>
                <h2>Default set to new years 2050</h2>
                &nbsp;
                <h3>Date set to</h3>
                <h4>{targetDateString}</h4>

                <div className='calendar'>
                    <form onSubmit={changeDate}>
                        <input type='date' id='Date' />
                        <button >Countdown</button>
                    </form>
                </div>


                <div className='timer-container' >
                    <div>
                        <div id='days'><span>{days}</span></div>
                        <span>days</span>
                    </div>
                    <div>
                        <div id='hours'><span>{hours}</span></div>
                        <span>hours</span>
                    </div>
                    <div>
                        <div id='minutes'><span>{minutes}</span></div>
                        <span>minutes</span>
                    </div>
                    <div>
                        <div id='seconds'><span>{seconds}</span></div>
                        <span>seconds</span>
                    </div>
                </div>


                <div className='timer-container' >
                    <div>
                        <div id='thours'><span>{totalHours}</span></div>
                        <span>total hours</span>
                    </div>
                    <div>
                        <div id='tminutes'><span>{totalMinutes}</span></div>
                        <span>total Minutes</span>
                    </div>
                    <div>
                        <div id='tseconds'><span>{totalSeconds}</span></div>
                        <span>total Seconds</span>
                    </div>
                </div>


            </div>


        </>
    );
}