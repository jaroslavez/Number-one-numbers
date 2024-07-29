import { useSelector } from "react-redux";

export default function Score() {
    const score = useSelector(state => state.game.score);

    return (
        <p>
            {score}
        </p>
    )
}