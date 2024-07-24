import './Header.scss';

import HeaderItemsWrapper from '../HeaderItemsWrapper/HeaderItemsWrapper';

import Timer from '../Timer/Timer';
import LevelCounter from '../LevelCounter/LevelCounter';
import Score from '../Score/Score';
import Bonus from '../Bonus/Bonus';

export default function Header() {
    return (
        <header className="header">
            <HeaderItemsWrapper name="ТАЙМЕР" component={<Timer />} />
            <HeaderItemsWrapper name="УРОВЕНЬ" component={<LevelCounter />} />
            <HeaderItemsWrapper name="ОЧКИ" component={<Score />} />
            <HeaderItemsWrapper name="БОНУС" component={<Bonus />} />
        </header>
    )
}