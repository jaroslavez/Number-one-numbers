import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import {LEVELS} from '../../levels';
import randomInteger from '../../randomInteger';

import { setCurrentNumberToFind } from '../../store/gameSlice';

import TableItem from '../TableItem/TableItem';

import "./Table.scss";

export default function Table() {
    const dispatch = useDispatch();

    const currentNumberToFind = useSelector((state) => state.game.currentNumberToFind);
    const currentLevel = useSelector((state) => state.game.currentLevel);
    const trueLevel = useSelector((state) => state.game.trueLevel);
    const [items, setItems] = useState(null);

    const refTable = useRef(null);

    useEffect(() => {
        let result = [];
        let rand_numbers = [];

        const min = 10 ** (LEVELS[currentLevel].digit - 1);
        const max = 10 ** LEVELS[currentLevel].digit;

        for(let i = 0; i < LEVELS[currentLevel].count; i++) {
            let num;
            do{
                num = randomInteger(min, max);
            } while(rand_numbers.includes(num));

            rand_numbers.push(num);
            result.push(<TableItem num={num} animated={LEVELS[currentLevel].animate} key={num}/>);
        }

        const currentNum = rand_numbers[randomInteger(0, rand_numbers.length)];
        dispatch(setCurrentNumberToFind(currentNum));

        setItems(result);
    }, [trueLevel]);
    

    return (
        <SwitchTransition mode={"out-in"}>
            <CSSTransition
                key={currentNumberToFind}
                classNames="flip"
                nodeRef={refTable}
                addEndListener={(done) => {
                    refTable.current.addEventListener("transitionend", done, false);

                }} 
            >
                <div className="table" ref={refTable} style={{
                    gridTemplateColumns: `repeat(${LEVELS[currentLevel].columns}, 1fr)`,
                    gridTemplateRows: `repeat(${LEVELS[currentLevel].rows}, minmax(42px,83px)`,
                    }}>
                        {items}
                </div>
            </CSSTransition>
        </SwitchTransition>
        
    )
}