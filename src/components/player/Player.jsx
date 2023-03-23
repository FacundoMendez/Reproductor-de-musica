import React, { useState , useEffect} from 'react'
import "./player.css"
import Prev from './buttons/Prev'
import Next from './buttons/Next'
import StartPause from './buttons/StartPause'
import NavMusic from './buttons/navMusic/NavMusicIcon'
import Volumen from './buttons/Volumen'
import ProgressBar from './buttons/ProgressBar'
import gsap from "gsap"
import { Power4 } from 'gsap'
import TransitionPages from '../assets/transitions/TransitionPages'

const Player = () => {   
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songs, setSongs] = useState([]);
  
     /* control de start/pause */
  const [playAudio , setPlayAudio] = useState(false)

  

  const createSongObject = (file) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.src = URL.createObjectURL(file);
      audio.addEventListener("loadedmetadata", () => {
        let totalMinutes = Math.floor(audio.duration / 60);
        let totalSeconds = Math.floor(audio.duration % 60);
        let formattedDuration = audio.duration ? `${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}` : "0:00";
        resolve({ name: file.name, file: file, duration: formattedDuration });
      });
    });
  };
  
  const handleFiles = async (event) => {
    const files = event.target.files;
    const songsArray = [];
  
    for (let i = 0; i < files.length; i++) {
      const song = await createSongObject(files[i]);
      songsArray.push(song);
    }
  
    setSongs(songsArray);
  };

  useEffect(() =>{

    gsap.from( ".reproductor", 1, {
      delay:.5,
      y: 95,
      opacity:0,
      ease:Power4.easeInOut,
      stagger:{amount: .9}
    })
  },[])


  const styleMobile = () => {
    if (window.innerWidth < 950){
      if(songs.length > 0){
        return "25rem"
      }else{
        return "16rem"
      }
    }
  }

  const styleMobileButtons = () => {
    if (window.innerWidth < 950){
      if(songs.length > 0){
        return "28%"
      }else{
        return "16%"
      }
    }
  }

  return (
    <>
    <TransitionPages/>

    <div id="content">
      <canvas className='canvas_banner' id="canvas_banner"></canvas>
      <audio  preload="auto" id="audio" />

      <div className="reproductor" style={{height: `${styleMobile()}`}}>

        <div className="fileBox">
            <label htmlFor="thefile" className={songs.length > 0 ? "file_elem" : "file"} id="file">
                {songs.length > 0 ? 
                  "+" 
                  : 
                  "Choose an audio file"
                }
                
                <input
                  type="file"
                  id="thefile"
                  accept="audio/*"
                  multiple
                  onChange={handleFiles}
                />

            </label>

            {songs.length > 0 && 
            <div className="boxNameSong">
              <p className='nombre'>{songs[currentSongIndex].name.substring(0, 30)} </p>
            </div>
            } 

        </div>
        


        <div className="boxControls" >
          <div className="boxButtons" style={{top: `${styleMobileButtons()}`}}>
            <Prev songs={songs} currentSongIndex={currentSongIndex}  setCurrentSongIndex = {setCurrentSongIndex}/>
            <StartPause songs={songs} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} playAudio={playAudio} setPlayAudio = {setPlayAudio}/>
            <Next songs={songs} currentSongIndex={currentSongIndex}  setCurrentSongIndex = {setCurrentSongIndex} />
          </div>

          <Volumen />

          {songs.length > 0 &&  <ProgressBar /> } 

          <div className="navMobileRep"></div>
        </div>
   
      </div>
      {songs.length > 0 && <NavMusic songs = {songs} setCurrentSongIndex = {setCurrentSongIndex} setPlayAudio = {setPlayAudio}/> }

    </div>
    </>
  )
}

export default Player