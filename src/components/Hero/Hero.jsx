import "./Hero.scss"


const Hero = ({video: {image, video}}) => {
  return (
    <div className="video__container">
      <video
        controls
        width="100%"
        height="auto"
        poster={image}
        className="video"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;