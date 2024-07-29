import { useDispatch } from 'react-redux';

import background_start_copy from '../../assets/background_start_copy.png';

import { WINDOWS, setCurrentWindow } from '../../store/gameSlice';

export default function Hint() {
    const dispatch = useDispatch();

    return (
        <img src={background_start_copy} onClick={() => dispatch(setCurrentWindow(WINDOWS.countdown))}/>
    )
}