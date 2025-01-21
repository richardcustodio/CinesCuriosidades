import React from 'react';

const VideoCard = ({ title, videoId }) => {
  return (
    <div className="video-card">
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{title}</p>
    </div>
  );
};

export default VideoCard;
