
import Comments from "../Comments/Comments";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoList from "../VideoList/VideoList";
import "./VideoComponent.scss";

const VideoComponent = ({ video, videoList, handleVideoSelect }) => {
  return (
    <section className="section">
      <div className="layout video__layout">
        <div className="video__layout--info-block">
          <VideoInfo video={video} />
          <Comments comments={video.comments} />
        </div>

        <VideoList
          videos={videoList}
          currentVideoId={video.id}
          onVideoSelect={handleVideoSelect}
        />
      </div>
    </section>
  );
};

export default VideoComponent;
