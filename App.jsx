import './App.scss';
import videos from "../src/assets/Data/video-details.json";
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';


function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleVideoSelect = (videoId) => {
    const selectedVideo = videos.find((video) => video.id === videoId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <Header />
      <Hero video={currentVideo}/>
    </>
  )
}

export default App;
