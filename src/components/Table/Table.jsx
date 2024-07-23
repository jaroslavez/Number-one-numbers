import { useMemo, useState } from 'react';
import {LEVELS} from '../../levels';
import { useSelector } from "react-redux";

import TableItem from '../TableItem/TableItem';

import "./Table.scss"

export default function Table() {
    const level = useSelector((state) => state.level);
    const items = useMemo(() => {
        let result = [];

        const min = 10 ** (LEVELS[level].digit - 1);
        const max = 10 ** LEVELS[level].digit;

        for(let i = 0; i < LEVELS[level].count; i++) {
            result.push(<TableItem num={randomInteger(min, max)} />)
        }
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