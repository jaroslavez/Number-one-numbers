import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './GamePage.scss'

import { COLORS } from '../../colors';
import randomInteger from '../../randomInteger';

import Header from '../Header/Header';
import Task from '../Task/Task';
import Table from '../Table/Table';

export default function GamePage() {
    const gamePageWrapperRef = useRef(null);
    const trueLevel = useSelector(state => state.game.trueLevel);

    useEffect(() => {
        if(!gamePageWrapperRef){
          return;
        }
    
        const randIndex = randomInteger(0, COLORS.length);
        gamePageWrapperRef.current.style.backgroundColor = COLORS[randIndex];
    }, [gamePageWrapperRef, trueLevel]);

    return (
        <div className='game-page' ref={gamePageWrapperRef}>
            <Header />
            <Task />
            <Table />
        </div>
    )
}