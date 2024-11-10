import "./Hero.scss"
import { baseUrl } from "../../App";
const apiKey = "f62229a7-4276-4ce1-a592-6df6e8407873";

const Hero = ({video: {image, video}}) => {
  return (
    <div className="video__container">
      <video
       controls
        width="100%"
        height="auto"
        poster={`${baseUrl}/${image}`}
        className="video"
      >
        <source src={`${video}?api_key=${apiKey}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;