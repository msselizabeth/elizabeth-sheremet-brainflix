import './App.scss';
import videos from "../src/assets/Data/video-details.json";
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoComponent from './components/VideoComponent/VideoComponent';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleVideoSelect = (videoId) => {
    const selectedVideo = videos.find((video) => video.id === videoId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <Header />
      <main>
      <Hero video={currentVideo}/>
      <VideoComponent video={currentVideo} videoList={videos} handleVideoSelect={handleVideoSelect} />
      </main>
    </>
  )
}

export default App;
