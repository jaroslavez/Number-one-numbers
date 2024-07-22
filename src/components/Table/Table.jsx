import { useMemo, useState } from 'react';
import {LEVELS} from '../../levels';
import { useSelector } from "react-redux";

import TableItem from '../TableItem/TableItem';

import "./Table.scss"

export default function Table() {
    const level = useSelector((state) => state.level);
    const items = useMemo(() => {
        let result = [];
        for(let i = 0; i < LEVELS[level].count; i++) {
            result.push(<TableItem num={1} />)
        }
        return result;
    }, [level])
    

    return (
        <div className="table" style={{
            gridTemplateColumns: `repeat(${LEVELS[level].columns}, 1fr)`,
            gridTemplateRows: `repeat(${LEVELS[level].rows}, 1fr)`,
            }}>
                {items}
        </div>
    )
}