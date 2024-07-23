import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { WINDOWS } from "../../store/currentWindowSlice";
import { setCurrentWindow } from "../../store/currentWindowSlice";

import "./CountdownToLaunch.scss";

export default function CountdownToLaunch() {
    const [timeLeft, setTimeLeft] = useState(3);
    const dispatch = useDispatch();

    useEffect(() => {
        if(timeLeft===0){
            dispatch(setCurrentWindow(WINDOWS.game))
            setTimeLeft(null)
         }
     
         if (!timeLeft) return;
     
         const intervalId = setInterval(() => {
           setTimeLeft(timeLeft - 1);
         }, 1000);
     
         return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <div className="countdown-to-launch">
            {timeLeft}
        </div>
    )
}