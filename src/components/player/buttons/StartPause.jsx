import React, { useCallback, useEffect , useState} from 'react'
import CanvasColor from '../canvasColor/CanvasColor'


const StartPause = ({songs , currentSongIndex , setCurrentSongIndex , setPlayAudio , playAudio}) => {

  const audio = document.getElementById("audio");



  const playSong = useCallback(() => {
    if (songs.length > 0) {
      const song = songs[currentSongIndex];
      if (song && song.file) {
        const url = URL.createObjectURL(song.file);
        audio.src = url;
  
        if (playAudio) {
          audio.play()
        }
      }
    }
  }, [songs, currentSongIndex, audio, playAudio]);

    /* pause / start song */
    const handlePlayPause = useCallback(() => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      setPlayAudio(!playAudio);
    }, [audio, setPlayAudio, playAudio]);
    

  const handleEnded = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };


  const canvasFunc = useCallback(() => {
    CanvasColor(playAudio)
  }, [playAudio]);



  useEffect(() => {
    playSong();
    canvasFunc();
    
    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [songs, canvasFunc, handleEnded]);

    
  return (
    <div className="pause-control control" onClick={handlePlayPause}>
        {playAudio  ?
        
            <svg  viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause</title> <path d="M0 6.563v18.875c0 0.531 0.438 0.969 0.969 0.969h6.625c0.5 0 0.906-0.438 0.906-0.969v-18.875c0-0.531-0.406-0.969-0.906-0.969h-6.625c-0.531 0-0.969 0.438-0.969 0.969zM12.281 6.563v18.875c0 0.531 0.438 0.969 0.938 0.969h6.625c0.531 0 0.969-0.438 0.969-0.969v-18.875c0-0.531-0.438-0.969-0.969-0.969h-6.625c-0.5 0-0.938 0.438-0.938 0.969z"></path> </g></svg>

            :

            <svg  xmlns="http://www.w3.org/2000/svg" className="bi bi-play-fill"   viewBox="2 0 32 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" fill="white"></path> </svg>
        }
    </div>

  )
}

export default StartPause