import CountdownToLaunch from './components/CountdownToLaunch/CountdownToLaunch';
import Hint from './components/Hint/Hint'
import Report from './components/Report/Report';

import GamePage from './components/GamePage/GamePage';

import { WINDOWS } from './store/gameSlice';

export const CONTENT = {
    [WINDOWS.hint]: (
                    <div className='main-container__hint-page-wrapper'>
                      <Hint />
                    </div>
                    ),
    [WINDOWS.countdown]: (
                          <div className='main-container__countdown-page-wrapper'>
                            <CountdownToLaunch />
                          </div>
                          ),
    [WINDOWS.game]: <GamePage />,
    [WINDOWS.report]: (
                      <div className='main-container__report-page-wrapper'>
                          <Report />
                      </div>
                      ),
  
  }