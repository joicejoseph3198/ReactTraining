import Background from "./Background";
import Foreground from "./Foreground";
import transition from "../transition";

const Favourite = () => {
    return (
        <div>
            <Background/>
            <Foreground/>
        </div>
    )
}

export default transition(Favourite);