import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss'

import Notification from './Notification/Notification';

import { WINDOWS } from '../store/gameSlice';
import { CONTENT } from '../content';
import { COLORS } from '../colors';
import randomInteger from '../randomInteger';

import right_answer from '../assets/right_answer.png';
import wrong_answer from '../assets/wrong_answer.png';


export default function App() {
  const currentWindow = useSelector(state => state.game.currentWindow);
  const mainRef = useRef(null);
  const [answer, setAnswer] = useState(null);

  const content = CONTENT[currentWindow];

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

  useEffect(() => {
    if(!mainRef){
      return;
    }

    let timeoutIDs = [];

    mainRef.current.addEventListener("RightAnswer", () => {
      setAnswer("right");
      const id = setTimeout(() => setAnswer(null), 400);
      timeoutIDs.push(id);
    });
    mainRef.current.addEventListener("WrongAnswer", () => {
      setAnswer("wrong");
      const id = setTimeout(() => setAnswer(null), 400);
      timeoutIDs.push(id);
    });

    return () => timeoutIDs.forEach((id) => clearTimeout(id));
  }, [mainRef]);

  return (
    <main className='main-container' ref={mainRef}>
      {content}
      {notification}
    </main>
  );
}


