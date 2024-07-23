import './Task.scss';

import { useSelector } from 'react-redux';

export default function Task() {
    const currentNumberToFind = useSelector((state) => state.currentNumberToFind);

    return (
        <div className="task">
            <p className='task__hint'>Найдите указанное число:</p>
            <p className='task__number'>{currentNumberToFind}</p>
        </div>
    )
}