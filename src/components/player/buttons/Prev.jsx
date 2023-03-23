import React from 'react'

const Prev = ({setCurrentSongIndex,currentSongIndex , songs}) => {
  const audio = document.getElementById("audio");


  const handlePrevSong = () => {
    setCurrentSongIndex((currentSongIndex + songs.length - 1) % songs.length);

    if(audio){
      audio.currentTime = 0;
    }
  };
  return (
    <div className="ant-control control" onClick={handlePrevSong}>
        <svg viewBox="0 0 32 32" enableBackground="new 0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="play"></g> <g id="stop"></g> <g id="pause"></g> <g id="replay"></g> <g id="next"></g> <g id="Layer_8"> <g> <g> <path d="M27.136,3.736C27.508,3.332,28,3.45,28,4v24c0,0.55-0.492,0.668-0.864,0.264L16.449,16.736 c-0.372-0.405-0.325-1.068,0.047-1.473L27.136,3.736z"></path> <path d="M27.602,29.504c-0.441,0-0.868-0.2-1.202-0.563L15.715,17.416c-0.718-0.781-0.697-2.022,0.044-2.829L26.401,3.058 c0.333-0.362,0.76-0.562,1.201-0.562C28.399,2.496,29,3.143,29,4v24C29,28.857,28.399,29.504,27.602,29.504z M27,5.358 l-9.77,10.584c-0.036,0.04-0.044,0.109-0.036,0.132L27,26.646V5.358z"></path> </g> <g> <path d="M14.297,3.736C14.669,3.332,15,3.45,15,4v24c0,0.55-0.331,0.668-0.703,0.264L3.69,16.736 c-0.372-0.405-0.365-1.068,0.007-1.473L14.297,3.736z"></path> <path d="M14.706,29.504c-0.286,0-0.717-0.098-1.146-0.563L2.954,17.414c-0.727-0.791-0.724-2.032,0.006-2.827l10.6-11.527 c0.428-0.466,0.859-0.563,1.146-0.563C15.329,2.496,16,2.967,16,4v24C16,29.033,15.329,29.504,14.706,29.504z M14,5.538 L4.433,15.94c-0.025,0.027-0.023,0.102-0.006,0.119L14,26.463V5.538z"></path> </g> </g> </g> <g id="search"></g> <g id="list"></g> <g id="love"></g> <g id="menu"></g> <g id="add"></g> <g id="headset"></g> <g id="random"></g> <g id="music"></g> <g id="setting"></g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Layer_26"></g> </g></svg>
    </div>
  )
}

export default Prev