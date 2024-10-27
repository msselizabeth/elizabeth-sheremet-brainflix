import "./VideoList.scss";

const VideoList = ({ videos, currentVideoId, onVideoSelect }) => {
  return (
    <div className="videos">
      <h2 className="videos__title">Next Videos</h2>
      <ul className="videos__list">
        {videos
          .filter((video) => video.id !== currentVideoId)
          .map((video) => (
            <li
              key={video.id}
              className="videos__item"
              onClick={() => onVideoSelect(video.id)}
            >
              <img src={video.image} alt={video.title} className="videos__image"/>
              <div className="videos__info">
              <p className="videos__info--title">{video.title}</p>
              <p className="videos__info--channel">{video.channel}</p>
            </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default VideoList;
