import "./App.scss";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoPage from "./pages/VideoPage/VideoPage";
import axios from "axios";

export const apiKey = "f62229a7-4276-4ce1-a592-6df6e8407873";
export const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    try {
      const res = await axios.get(`${baseUrl}videos?api_key=${apiKey}`);
      const videosList = res.data;
      setVideos(videosList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<VideoPage videos={videos} />} />
          <Route
            path="/videos/:videoId"
            element={<VideoPage videos={videos} />}
          />
         
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
