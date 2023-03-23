import React, { useState } from 'react'
import NavMusicViewport from './NavMusicViewport'

const NavMusic = ({songs , setCurrentSongIndex ,  setPlayAudio}) => {

  const [activeNavMusic , setActiveNavMusic] = useState(false)

  const handleNavMusic = () => {
    if( songs.length > 0){
      setActiveNavMusic(!activeNavMusic)
    }
  }


  return (
    <>
    <div className="navMusic" onClick={handleNavMusic}> 
        <svg  viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" >
          </g><g id="SVGRepo_iconCarrier"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></g>
        </svg>
    </div>
  
    {activeNavMusic &&  <NavMusicViewport songs = {songs} setCurrentSongIndex = {setCurrentSongIndex} setPlayAudio = {setPlayAudio}/> }

    </>
  )
}

export default NavMusic