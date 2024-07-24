import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TableItem.scss';

import randomInteger from '../../randomInteger';
import { COLORS } from '../../colors';
import { WINDOWS } from '../../store/currentWindowSlice';

import { incrementLevel, incrementOnlyTrueLevel } from '../../store/levelSlice';
import { incrementBonus } from '../../store/bonusSlice';
import { resetBonus } from '../../store/bonusSlice';
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


    useEffect(() => {
        if(!refItem || !refText)
            return;

        const randIndexColor = randomInteger(0, COLORS.length);
        refItem.current.style.backgroundColor = COLORS[randIndexColor];

        

        if(!animated){
            return;
        }
        const randIndexAnimation = randomInteger(0, ANIMATIONS.length);

        switch(ANIMATIONS[randIndexAnimation]){
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
    }, []);

    function handleClick() {
        if(currentNumToFind === num) {
            dispatch(addPoints(POINTS * bonus));
            dispatch(incrementBonus());
            dispatch(incrementLevel());
        }
        else {
            dispatch(resetBonus());
            dispatch(incrementOnlyTrueLevel());
        }

        isTimeUp && dispatch(setCurrentWindow(WINDOWS.report));
    }

    return (
        <div className='table-item-wrapper' onClick={handleClick}>
            <div className='table-item-wrapper__item' ref={refItem}>
                <p className='table-item-wrapper__text' ref={refText}>{num}</p>
            </div>
        </div>
    )
}