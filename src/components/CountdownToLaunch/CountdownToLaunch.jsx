import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { WINDOWS } from "../../store/gameSlice";
import { setCurrentWindow } from "../../store/gameSlice";

import "./CountdownToLaunch.scss";

export default function CountdownToLaunch() {
    const [timeLeft, setTimeLeft] = useState(3);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!timeLeft){
            dispatch(setCurrentWindow(WINDOWS.game))
            setTimeLeft(null);
            return;
         }
     
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