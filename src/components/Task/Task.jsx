import { useEffect, useRef, useState} from 'react';
import './Task.scss';

import { useSelector } from 'react-redux';

export default function Task() {
    const currentNumberToFind = useSelector((state) => state.currentNumberToFind);
    const refNum = useRef(null);
    const [left, setLeft] = useState(200);

    useEffect(() => {
        window.addEventListener("flip", (e) => {
            setLeft(-600);
            setTimeout(() => {
                requestAnimationFrame(() => {
                    refNum.current.classList.remove("task__number_transition");
                    setLeft(500);
                    setTimeout(() => requestAnimationFrame(() => {
                        refNum.current.classList.add("task__number_transition");
                        setLeft(0);
                    }), 300)
                });
            }, 300);
        })
        setLeft(0);
    }, [])

    return (
        <div className="task">
            <p className='task__hint'>Найдите указанное число:</p>
            <div className='task__number task__number_transition' ref={refNum} style={{left: `${left}px`}}>{currentNumberToFind}</div>
        </div>
    )
}