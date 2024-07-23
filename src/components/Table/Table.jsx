import { useMemo, useState } from 'react';
import {LEVELS} from '../../levels';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNumberToFind } from '../../store/currentNumberToFindSlice';

import TableItem from '../TableItem/TableItem';

import "./Table.scss";

export default function Table() {
    const dispatch = useDispatch();

    const level = useSelector((state) => state.level);
    const items = useMemo(() => {
        let result = [];
        let rand_numbers = [];

        const min = 10 ** (LEVELS[level].digit - 1);
        const max = 10 ** LEVELS[level].digit;

        for(let i = 0; i < LEVELS[level].count; i++) {
            let num;
            do{
                num = randomInteger(min, max);
            } while(rand_numbers.includes(num));

            rand_numbers.push(num);
            result.push(<TableItem num={num} key={num}/>);
        }

        const currentNum = rand_numbers[randomInteger(0, rand_numbers.length)];
        dispatch(setCurrentNumberToFind(currentNum));

        return result;
    }, [level]);
    

    return (
        <div className="table" style={{
            gridTemplateColumns: `repeat(${LEVELS[level].columns}, 1fr)`,
            gridTemplateRows: `repeat(${LEVELS[level].rows}, 1fr)`,
            }}>
                {items}
        </div>
    )
}


function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}