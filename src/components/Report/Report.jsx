import { useDispatch, useSelector } from 'react-redux';

import { setCurrentWindow } from '../../store/currentWindowSlice';
import { WINDOWS } from '../../store/currentWindowSlice';
import { resetAnswers } from '../../store/accurateAndTotalAnswersSlice';
import { resetBonus } from '../../store/bonusSlice';
import { resetLevel } from '../../store/levelSlice';
import { resetScore } from '../../store/scoreSlice';
import { setIsTimeOut } from '../../store/isTimeUpSlice';

import './Report.scss';

const TOP = [
    "first",
    "second",
    "thrird",
]

export default function Report() {
    const score = useSelector(state => state.score);
    const total_answers = useSelector(state => state.accurateAndTotalAnswers.total);
    const accurate_answers = useSelector(state => state.accurateAndTotalAnswers.accurate);

    const dispatch = useDispatch();

    for(let key of TOP) {
        let record = {
            date: new Date(),
            value: score,
        }
        record = JSON.stringify(record);

        if(!localStorage.getItem(key)) {
            localStorage.setItem(key, record);
            break;
        }

        let recordFromStorage = localStorage.getItem(key);
        recordFromStorage = JSON.parse(recordFromStorage);

        if(recordFromStorage.value > score){
            continue;
        } 

        localStorage.setItem(key, record);
        break;

    }

    let first = localStorage.getItem("first");
    first && (first = JSON.parse(first));

    let second = localStorage.getItem("second");
    second && (second = JSON.parse(second));

    let third = localStorage.getItem("thrird");
    third && (third = JSON.parse(third));

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    function handleClick() {
        dispatch(setCurrentWindow(WINDOWS.hint));
        dispatch(resetAnswers());
        dispatch(resetBonus());
        dispatch(resetLevel());
        dispatch(resetScore());
        dispatch(setIsTimeOut(false))
    }

    return(
        <div className='report-page'>
            <header className='report-page__header'>
                <span className='report-page__title'>Ваши результаты</span>
            </header>
            <div className='report-page__table'>
                <div className='report-page__label'>Текущий результат</div>
                <div className='report-page__result'>{score}</div>

                <div className='report-page__label'>Верных ответов</div>
                <div className='report-page__result'>{accurate_answers + " из " + total_answers}</div>

                <div className='report-page__label'>Точность ответов</div>
                <div className='report-page__result'>{(accurate_answers / total_answers) * 100 + "%"}</div>

                <p className='report-page__best-result-text'>Три лучших результата</p><span></span>

                <div className='report-page__label'>#1 {first ? new Date(first.date).toLocaleDateString("ru", options) : "---"}</div>
                <div className='report-page__result'>{first ? first.value : "---"}</div>

                <div className='report-page__label'>#2 {second ? new Date(second.date).toLocaleDateString("ru", options) : "---"}</div>
                <div className='report-page__result'>{second ? second.value : "---"}</div>

                <div className='report-page__label'>#3 {third ? new Date(third.date).toLocaleDateString("ru", options) : "---"}</div>
                <div className='report-page__result'>{third ? third.value : "---"}</div>
            </div>
            <button className='report-page__again-button' onClick={handleClick}>ЕЩЁ РАЗ?</button>
        </div>
    )
}