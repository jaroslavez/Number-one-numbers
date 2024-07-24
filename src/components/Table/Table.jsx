import { useEffect, useMemo, useState } from 'react';
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
        <div className="table" style={{
            gridTemplateColumns: `repeat(${LEVELS[currentLevel].columns}, 1fr)`,
            gridTemplateRows: `repeat(${LEVELS[currentLevel].rows}, minmax(42px,83px)`,
            }}>
                {items}
        </div>
    )
}