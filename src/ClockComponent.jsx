import React, {useState, useEffect} from "react";

function ClockComponent(){

    const [time, setTime] = useState(new Date())

    useEffect(() =>{

        const intervalValid = setInterval(() =>{
             setTime(new Date());
         },1000);

        return () => {
            clearInterval(intervalValid);
        }
    }, []);

    function formatTime(){

        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12;

        return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)} ${PadZero(meridiem)}`
    }

    function PadZero(number){
        return (number < 10 ? "0":"") + number
    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default ClockComponent