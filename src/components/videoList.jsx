import React, { useState } from 'react';
import VideoCard from './videoCard';

const VideoList = () => {
  const [videos, setVideos] = useState([
    { title: 'Filme 1', videoId: 'dQw4w9WgXcQ' }, // Exemplo de ID do YouTube
    { title: 'Filme 2', videoId: '3JZ_D3ELwOQ' },
  ]);

  const addVideo = (video) => {
    setVideos((prevVideos) => [...prevVideos, video]);
  };

  return (
    <div>
      <VideoForm onAddVideo={addVideo} />
      <div className="video-list">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} videoId={video.videoId} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
