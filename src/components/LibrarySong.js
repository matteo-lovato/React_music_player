import React from "react";

function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  id,
  setSongs,
}) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
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
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "library-song-selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="library-song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
