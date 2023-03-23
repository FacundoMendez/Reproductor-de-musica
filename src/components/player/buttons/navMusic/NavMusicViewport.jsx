import React, {useCallback} from 'react'

const NavMusicViewport = ({songs , setCurrentSongIndex, setPlayAudio}) => {

    const handleSongClick = useCallback( (index) => {
        setCurrentSongIndex(index);
        setPlayAudio(true);
    },[setCurrentSongIndex , setPlayAudio])
    
      return (
        <div className="boxNavMusic">
          <ul>
            {
              songs.map((song, index) => {
                return (
                  <li key={index} className="songsList" onClick={() => handleSongClick(index)}>
                    {song.name}
                   <p className='durationSong'>{song.duration}</p>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    };

export default NavMusicViewport