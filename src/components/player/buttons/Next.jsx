import React from 'react'


const Next = ({setCurrentSongIndex,currentSongIndex , songs}) => {
  const audio = document.getElementById("audio");

    /* next song */
    const handleNextSong = () => {
      setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    
      if(audio){
        audio.currentTime = 0;
      }
    };

  return (
    <div className="sig-control control" onClick={handleNextSong}>
        <svg  viewBox="0 0 32 32" enableBackground="new 0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="play"></g> <g id="stop"></g> <g id="pause"></g> <g id="replay"></g> <g id="next"> <g> <g> <path d="M4.561,3.728C4.184,3.328,4,3.45,4,4v24c0,0.55,0.184,0.672,0.561,0.272l10.816-11.544 c0.377-0.4,0.408-1.056,0.031-1.456L4.561,3.728z"></path> <path d="M4.202,29.507L4.202,29.507C4.079,29.507,3,29.465,3,28V4c0-1.465,1.079-1.507,1.202-1.507 c0.568,0,0.958,0.414,1.087,0.55l10.848,11.545c0.725,0.77,0.711,2.038-0.031,2.826L5.29,28.956 C5.16,29.094,4.771,29.507,4.202,29.507z M5.004,5.66L5,26.337l9.674-10.389L5.004,5.66z"></path> </g> <g> <path d="M17.561,3.728C17.184,3.328,17,3.45,17,4v24c0,0.55,0.184,0.672,0.561,0.272l10.816-11.544 c0.377-0.4,0.408-1.056,0.031-1.456L17.561,3.728z"></path> <path d="M17.202,29.507L17.202,29.507C17.079,29.507,16,29.465,16,28V4c0-1.465,1.079-1.507,1.202-1.507 c0.568,0,0.958,0.414,1.087,0.55l10.848,11.545c0.725,0.77,0.711,2.038-0.031,2.826L18.29,28.956 C18.16,29.094,17.771,29.507,17.202,29.507z M18.004,5.66L18,26.337l9.674-10.389L18.004,5.66z"></path> </g> </g> </g> <g id="Layer_8"></g> <g id="search"></g> <g id="list"></g> <g id="love"></g> <g id="menu"></g> <g id="add"></g> <g id="headset"></g> <g id="random"></g> <g id="music"></g> <g id="setting"></g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Layer_26"></g> </g></svg>
    </div>
  )
}

export default Next