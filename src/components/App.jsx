import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './App.scss'

import Header from './Header/Header';
import Task from './Task/Task';
import Table from './Table/Table';

import CountdownToLaunch from './CountdownToLaunch/CountdownToLaunch';

import { WINDOWS } from '../store/currentWindowSlice';
import { COLORS } from '../colors';
import randomInteger from '../randomInteger';

export default function App() {
  const currentWindow = useSelector(state => state.currentWindow);
  const trueLevel = useSelector(state => state.level.trueLevel)
  const gamePageWrapperRef = useRef(null)

  useEffect(() => {
    if(!gamePageWrapperRef || currentWindow !== WINDOWS.game){
      return;
    }

    const randIndex = randomInteger(0, COLORS.length);
    gamePageWrapperRef.current.style.backgroundColor = COLORS[randIndex];
  }, [gamePageWrapperRef, trueLevel, currentWindow]);

  let content;
  if(currentWindow === WINDOWS.countdown){
    content = (<div className='main-container__countdown-page-wrapper'>
      <CountdownToLaunch />
    </div>)
  }
  else if(currentWindow === WINDOWS.game){
    content = (<div className='main-container__game-page-wrapper' ref={gamePageWrapperRef}>
      <Header />
      <Task />
      <Table />
    </div>);
  }
  else{

  }

  return (
    <main className='main-container'>
      {content}
    </main>
  )
}


