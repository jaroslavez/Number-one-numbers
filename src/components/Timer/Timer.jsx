import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsTimeOut } from "../../store/isTimeUpSlice";

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(30);
    const dispatch = useDispatch();

    useEffect(() => {
         const intervalId = setInterval(() => {
           setTimeLeft(timeLeft - 1);
         }, 1000);

         if(timeLeft===0){
            dispatch(setIsTimeOut(true));
            clearInterval(intervalId);
         }
     
         return () => clearInterval(intervalId);
    }, [timeLeft]);

    return(
        <p>
            00:{timeLeft < 10 ? '0' + timeLeft : timeLeft}
        </p>
    )
}