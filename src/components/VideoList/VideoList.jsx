import { Link } from "react-router-dom";
import "./VideoList.scss";
import { baseUrl } from "../../App";

const VideoList = ({ videos, currentVideoId }) => {
  
  const sortedVideosByTime = videos.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <div className="videos">
      <h2 className="videos__title">Next Videos</h2>
      <ul className="videos__list">
        {sortedVideosByTime
          .filter((video) => video.id !== currentVideoId)
          .map((video) => (
            <li
              key={video.id}
              className="videos__item"
            >
              <Link to={`/videos/${video.id}`} className="videos__link">
                <img
                  src={`${baseUrl}/${video.image}`}
                  alt={video.title}
                  className="videos__image"
                />
                <div className="videos__info">
                  <p className="videos__info--title">{video.title}</p>
                  <p className="videos__info--channel">{video.channel}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default VideoList;
