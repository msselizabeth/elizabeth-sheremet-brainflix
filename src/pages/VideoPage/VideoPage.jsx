import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import "./VideoPage.scss";
import { apiKey, baseUrl } from "../../App";
import Loading from "../../components/Loading/Loading";

const VideoPage = ({ videos }) => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  async function getVideo(videoId) {
    try {
      const { data } = await axios.get(
        `${baseUrl}videos/${videoId}?api_key=${apiKey}`
      );
      setVideo(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (videos.length) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  if (!video) return <p>Loading...</p>;

  return (
    <>
      <Hero video={video} />
      <section className="section">
        <div className="layout video__layout">
          <div className="video__layout--info-block">
            <VideoInfo video={video} />
            {video.comments && <Comments comments={video.comments} />}
          </div>
          <VideoList videos={videos} currentVideoId={video.id} />
        </div>
      </section>
    </>
  );
};

export default VideoPage;
