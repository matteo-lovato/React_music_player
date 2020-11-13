export const playAudio = (isPlaying, audioRef) => {
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
