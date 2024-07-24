import { useSelector } from "react-redux";

import './Bonus.scss';
import { useEffect, useState } from "react";

export default function Bonus() {
    const bonus = useSelector(state => state.bonus);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        let temp_circles = [];

        for(let i = 0; i < 5; i++){
            i < bonus ? 
            temp_circles.push(<span className="header__circle header__circle_filled"></span>) : 
            temp_circles.push(<span className="header__circle header__circle"></span>);
        }

        setCircles(temp_circles);
    }, [bonus]);

    return(
        <p className="header__circle-wrapper">
            {circles}
            {`x${bonus}`}
        </p>
    )
}