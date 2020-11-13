import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) {
  // event handlers
  const playSongHandler = () => {
    // is the song playing?
    if (isPlaying) {
      // then pause it
      audioRef.current.pause();
    } else {
      // no? then play it
      audioRef.current.play();
    }
    // update state
    setIsPlaying(!isPlaying);
  };

  const getTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = e => {
    const current = e.target.value;
    audioRef.current.currentTime = current;
    setSongInfo({ ...songInfo, currentTime: current });
  };
  //state

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
