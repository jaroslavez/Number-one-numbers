import { useMemo, useState } from 'react';
import {LEVELS} from '../../levels';
import { useSelector } from "react-redux";

import TableItem from '../TableItem/TableItem';

export default function Table() {
    const level = useSelector((state) => state.level);
    const items = useMemo(() => {
        let result = [];
        for(let i = 0; i < LEVELS[level].count; i++) {
            result.push(<TableItem num={1} />)
        }
    })
    

    return (
        <div className="table" style={{
            gridTemplateColumns: LEVELS[level].columns,
            gridTemplateRows: LEVELS[level].rows,
            }}>
                {items}
        </div>
    )
}