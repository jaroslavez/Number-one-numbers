import { useDispatch, useSelector } from 'react-redux';

import { reset } from '../../store/gameSlice';

import './Report.scss';
import { Fragment } from 'react';

const TOP = [
    "first",
    "second",
    "thrird",
];

const OPTIONS = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export default function Report() {
    const score = useSelector(state => state.game.score);
    const total_answers = useSelector(state => state.game.totalAnswers);
    const accurate_answers = useSelector(state => state.game.accurateAnswers);

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

    const values_of_LocalStorage = TOP.map((key) => {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    });
    
    const top_results = values_of_LocalStorage.map((value, i) => {
        return (
            <Fragment key={i}>
                <div className='report-page__label'>#{i + 1} {value ? new Date(value.date).toLocaleDateString("ru", OPTIONS) : "---"}</div>
                <div className='report-page__result'>{value ? value.value : "---"}</div>
            </Fragment>
        )
    });

    

    function handleClick() {
        dispatch(reset());
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
                <div className='report-page__result'>{((accurate_answers / total_answers) * 100).toFixed(2) + "%"}</div>

                <p className='report-page__best-result-text'>Три лучших результата</p><span></span>

                {top_results}

            </div>
            <button className='report-page__again-button' onClick={handleClick}>ЕЩЁ РАЗ?</button>
        </div>
    )
}