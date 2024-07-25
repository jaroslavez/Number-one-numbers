import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TableItem.scss';

import randomInteger from '../../randomInteger';
import { COLORS } from '../../colors';
import { WINDOWS } from '../../store/currentWindowSlice';

import { incrementLevel, decrementLevel } from '../../store/levelSlice';
import { incrementBonus, decrementBonus } from '../../store/bonusSlice';
import { incrementAccurateAnswers, incrementonlyTotalAnswers } from '../../store/accurateAndTotalAnswersSlice';
import { addPoints } from '../../store/scoreSlice';
import { setCurrentWindow } from '../../store/currentWindowSlice';

const POINTS = 40;

const ANIMATIONS = [
    "shaking",
    "jumping",
    "disappearing",
];

export default function TableItem({num, animated}) {
    const refItem = useRef(null);
    const refText = useRef(null);
    const dispatch = useDispatch();

    const bonus = useSelector(state => state.bonus);
    const isTimeUp = useSelector(state => state.isTimeUp);
    const currentNumToFind = useSelector(state => state.currentNumberToFind);

    const [currentAnimation, setCurrentAnimation] = useState(null);


    useEffect(() => {
        if(!refItem || !refText)
            return;

        const randIndexColor = randomInteger(0, COLORS.length);
        refItem.current.style.backgroundColor = COLORS[randIndexColor];

        
        if(!animated || currentAnimation){
            return;
        }
        const randIndexAnimation = randomInteger(0, ANIMATIONS.length);
        setCurrentAnimation(ANIMATIONS[randIndexAnimation]);

        
    }, [refItem, refText]);

    useEffect(() => {
        if(!currentAnimation) {
            return;
        }

        switch(currentAnimation){
            case "shaking":
                refText.current.classList.add("table-item-wrapper__text_shaking");
                break;
            case "jumping":
                refItem.current.classList.add("table-item-wrapper__item_jumping");
                break;
            case "disappearing":
                refItem.current.classList.add("table-item-wrapper__item_disappearing");
                break;
        }
    }, [currentAnimation]);

    function handleClick() {
        const eventFlip = new CustomEvent("flip", { bubbles: true });
        refItem.current.dispatchEvent(eventFlip);

        setTimeout(() => {
            if(currentNumToFind === num) {
                dispatch(addPoints(POINTS * bonus));
                dispatch(incrementBonus());
                dispatch(incrementLevel());
                dispatch(incrementAccurateAnswers());
    
                if(!refItem){
                    return;
                }
                const eventRightAnswer = new CustomEvent("RightAnswer", { bubbles: true });
                refItem.current.dispatchEvent(eventRightAnswer);
            }
            else {
                dispatch(decrementBonus());
                dispatch(decrementLevel());
                dispatch(incrementonlyTotalAnswers());
    
                if(!refItem){
                    return;
                }
                const eventWrongAnswer = new CustomEvent("WrongAnswer", { bubbles: true });
                refItem.current.dispatchEvent(eventWrongAnswer);
            }
    
            isTimeUp && dispatch(setCurrentWindow(WINDOWS.report));
        }, 300);
    
        
    }

    return (
        <div className='table-item-wrapper' onClick={handleClick}>
            <div className='table-item-wrapper__item' ref={refItem}>
                <p className='table-item-wrapper__text' ref={refText}>{num}</p>
            </div>
        </div>
    )
}