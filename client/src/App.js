import React from 'react';
import MoviePlayer from './MoviePlayer/MoviePlayer';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      Score it mofo

      <MoviePlayer />
      <MusicPlayer />
    </div>
  );
}

export default App;
