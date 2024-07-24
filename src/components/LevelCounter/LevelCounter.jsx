import { useSelector } from "react-redux";
import { LEVELS } from "../../levels";

export default function LevelCounter() {
    const currentLevel = useSelector(state => state.level.currentLevel);

    return(
        <p>
            {currentLevel + '-' + Object.keys(LEVELS).length}
        </p>
    )
}