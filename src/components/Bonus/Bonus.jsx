import { useSelector } from "react-redux";
import classNames from "classnames";

import './Bonus.scss';

export default function Bonus() {
    const bonus = useSelector(state => state.game.bonus);
    const circlesC = (new Array(5)).fill(0).map((value, i)=>{
        const class_names = classNames("header__circle", {header__circle_filled: i < bonus})
        return (<span className={class_names}/>) //classNames
    })

    return(
        <p className="header__circle-wrapper">
            {circlesC}
            {`x${bonus}`}
        </p>
    )
}