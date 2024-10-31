import "./VideoInfo.scss";

const VideoInfo = ({
  video:{title, channel, timestamp, views, likes, description}
}) => {
  return (
    <>
      <h1 className="video__title">{title}</h1>
      <div className="video__info">
        <div className="video__info--container">
          <h3 className="video__info--channel">By {channel}</h3>
          <p className="video__info--time">
            {new Date(timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="video__info--container">
          <p className="video__info--views">{views}</p>
          <p className="video__info--likes">{likes}</p>
        </div>
      </div>
      <p className="video__description">{description}</p>
    </>
  );
};

export default VideoInfo;
