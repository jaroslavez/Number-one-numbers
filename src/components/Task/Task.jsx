import { useRef } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './Task.scss';

import { useSelector } from 'react-redux';

export default function Task() {
    const currentNumberToFind = useSelector((state) => state.game.currentNumberToFind);
    const refNum = useRef(null);

    return (
        <div className="task">
            <p className='task__hint'>Найдите указанное число:</p>
            <SwitchTransition mode={"out-in"}>
                <CSSTransition
                    key={currentNumberToFind}
                    classNames="flip"
                    nodeRef={refNum}
                    addEndListener={(done) => {
                        refNum.current.addEventListener("transitionend", done, false);
                        
                    }} 
                >
                    <div className='task__number' ref={refNum}>{currentNumberToFind}</div>
                </CSSTransition>
            </SwitchTransition>
            
        </div>
    )
}