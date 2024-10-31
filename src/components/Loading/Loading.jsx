import { BounceLoader, ClipLoader, FadeLoader, PropagateLoader } from "react-spinners"
import "./Loading.scss";

const Loading = ({text}) => {

    return (
        <div className="layout loading__container">
            <FadeLoader color="#0095FF" height={12} width={3} margin={1.5} radius={15} speedMultiplier={0.75} />
            <p className="loading__text">{text}</p>
        </div>
    )
}

export default Loading;