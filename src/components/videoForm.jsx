import React, { useState } from 'react';

const VideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar e extrair o ID do vídeo do YouTube
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(youtubeRegex);

    if (match && match[1]) {
      const videoId = match[1];
      onAddVideo({ title, videoId }); // Envia o título e o ID para a lista
      setTitle('');
      setUrl('');
    } else {
      alert('Por favor, insira um URL válido do YouTube!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <input
        type="text"
        placeholder="Título do vídeo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL do YouTube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Adicionar Vídeo</button>
    </form>
  );
};

export default VideoForm;
