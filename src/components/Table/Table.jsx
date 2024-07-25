import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {LEVELS} from '../../levels';
import randomInteger from '../../randomInteger';

import { setCurrentNumberToFind } from '../../store/currentNumberToFindSlice';

import TableItem from '../TableItem/TableItem';

import "./Table.scss";

export default function Table() {
    const dispatch = useDispatch();

    const currentLevel = useSelector((state) => state.level.currentLevel);
    const trueLevel = useSelector((state) => state.level.trueLevel);
    const [items, setItems] = useState(null);

    const refTable = useRef(null);
    const [left, setLeft] = useState(200);

    useEffect(() => {
        window.addEventListener("flip", (e) => {
            setLeft(-600);
            setTimeout(() => requestAnimationFrame(() => {
 
                refTable.current.classList.remove("table_transition");
                setLeft(600);
                setTimeout(() => requestAnimationFrame(() => {
                    refTable.current.classList.add("table_transition");
                    setLeft(0);
                }), 300);
            }), 300);
        })
        setLeft(0);
    }, [])

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
        <div className="table table_transition" ref={refTable} style={{
            gridTemplateColumns: `repeat(${LEVELS[currentLevel].columns}, 1fr)`,
            gridTemplateRows: `repeat(${LEVELS[currentLevel].rows}, minmax(42px,83px)`,
            left: `${left}px`,
            }}>
                {items}
        </div>
    )
}