import React from "react";

function LibrarySong({ song, setCurrentSong, audioRef, isPlaying }) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // check if the song is playing
    if (isPlaying) {
      // this is a promise
      const playPromise = audioRef.current.play();
      // if there is an audio
      if (playPromise !== undefined) {
        //wait to load it and play it
        playPromise.then(audio => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name}></img>
      <div className="library-song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
