import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss'

import Header from './Header/Header';
import Task from './Task/Task';
import Table from './Table/Table';
import Notification from './Notification/Notification';

import CountdownToLaunch from './CountdownToLaunch/CountdownToLaunch';
import Hint from './Hint/Hint';
import Report from './Report/Report';

import { WINDOWS } from '../store/currentWindowSlice';
import { COLORS } from '../colors';
import randomInteger from '../randomInteger';

import right_answer from '../assets/right_answer.png';
import wrong_answer from '../assets/wrong_answer.png';


export default function App() {
  const currentWindow = useSelector(state => state.currentWindow);
  const trueLevel = useSelector(state => state.level.trueLevel);
  const gamePageWrapperRef = useRef(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if(!gamePageWrapperRef || currentWindow !== WINDOWS.game){
      return;
    }

    const randIndex = randomInteger(0, COLORS.length);
    gamePageWrapperRef.current.style.backgroundColor = COLORS[randIndex];

    gamePageWrapperRef.current.addEventListener("RightAnswer", () => {
      setAnswer("right");
      setTimeout(() => setAnswer(null), 400);
    });
    gamePageWrapperRef.current.addEventListener("WrongAnswer", () => {
      setAnswer("wrong");
      setTimeout(() => setAnswer(null), 400);
    });
  }, [gamePageWrapperRef, trueLevel, currentWindow]);

  let content;
  if(currentWindow === WINDOWS.hint) {
    content = (<div className='main-container__hint-page-wrapper'>
      <Hint />
    </div>)
  }
  else if(currentWindow === WINDOWS.countdown){
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
  else if(currentWindow === WINDOWS.report){
    content = (<div className='main-container__report-page-wrapper'>
      <Report />
    </div>)
  }
  else {
    throw Error("Несуществующее окно");
  }

  let notification;

  if(answer === "right" && currentWindow === WINDOWS.game) {
    notification = <Notification image={right_answer} />;
  }
  else if(answer === "wrong" && currentWindow === WINDOWS.game) {
    notification = <Notification image={wrong_answer} />;
  }
  else {
    notification = null;
  }

  return (
    <main className='main-container'>
      {content}
      {notification}
    </main>
  );
}


