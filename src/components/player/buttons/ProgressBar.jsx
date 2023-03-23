import React , {useState, useEffect } from 'react'


const ProgressBar = () => {
  const audio = document.getElementById("audio");

  const [progress, setProgress] = useState(0);
  const [formattedDuration, setFormattedDuration] = useState("0:00");

  const formatDuration = (duration) => {
    let totalMinutes = Math.floor(duration / 60);
    let totalSeconds = Math.floor(duration % 60);
    return `${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}`;
  };

  const handleTimeUpdate = () => {
    if (audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
      setFormattedDuration(formatDuration(audio.duration));
    }
  };

  const handleClick = (event) => {
    const clickX = event.pageX;
    const progressBar = event.currentTarget;
    const progressBarRect = progressBar.getBoundingClientRect();
    const progress =((clickX - progressBarRect.left) / progressBarRect.width) * 100;
    audio.currentTime = (audio.duration * progress) / 100;
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [audio]);

  let minutes = 0;
  let seconds = 0;
  let formattedTime = "0:00";

  if (audio) {
    minutes = Math.floor(audio.currentTime / 60);
    seconds = Math.floor(audio.currentTime % 60);
    formattedTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return (
    <div className="boxProgress">
      <div className="initSong">{formattedTime}</div>
      <div className="progress-bar" onClick={handleClick}>
        <div className="progress-bar-fill" style={{ width: `${progress}%`  }} />
      </div>
      <div className="exitSong">{formattedDuration}</div>
    </div>
  );
};

export default ProgressBar