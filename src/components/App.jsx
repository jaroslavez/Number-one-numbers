import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './App.scss'

import Header from './Header/Header';
import Task from './Task/Task';
import Table from './Table/Table';

import CountdownToLaunch from './CountdownToLaunch/CountdownToLaunch';

import { WINDOWS } from '../store/currentWindowSlice';

export default function App() {
  const currentWindow = useSelector(state => state.currentWindow);
  const gamePageWrapperRef = useRef(null)

  useEffect(() => {
    
  })

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

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}
