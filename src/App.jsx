import React from 'react';
import VideoList from './components/videoList';
import VideoForm from './components/videoForm';

const App = () => {
  return (
    <div>
      <header>
        <h1>CinesCuriosidades</h1>
      </header>
      <main>
        <VideoForm />
        <VideoList />
      </main>
      <footer>
        <p>CinesCuriosidades © 2025</p>
      </footer>
    </div>
  );
};

export default App;
