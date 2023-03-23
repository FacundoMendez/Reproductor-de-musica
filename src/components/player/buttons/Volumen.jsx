import React , {useState} from 'react'

const Volumen = () => {
    const [volume, setVolume] = useState(1);
    const audio = document.getElementById("audio");
  

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        audio.volume = event.target.value;
      };
    

  return (
    <>
    <div className="boxMusic">
  
      {
        volume >= .5 ?
          <svg fill="#ffffff" id="iconMusic" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1129.432 113v1694.148H903.545l-451.772-451.773V564.773L903.545 113h225.887Zm542.545 248.057C1832.017 521.097 1920 733.882 1920 960.107c0 226.226-87.983 438.898-248.023 598.938l-79.851-79.85c138.694-138.582 214.93-323.018 214.93-519.087 0-196.183-76.236-380.506-214.93-519.2ZM338.83 564.773v790.602H169.415C75.672 1355.375 0 1279.703 0 1185.96V734.187c0-93.742 75.672-169.414 169.415-169.414H338.83Zm1093.922 36.085c95.776 97.018 148.407 224.644 148.407 359.16 0 134.628-52.631 262.253-148.407 359.272l-80.303-79.174c74.656-75.897 115.767-175.4 115.767-280.099 0-104.585-41.111-204.088-115.767-279.986Z" fillRule="evenodd"></path> </g></svg>
        :
        (volume > 0 && volume <= .5) ?
            <svg width="1222" height="1172" id="iconMusic" viewBox="0 0 1222 1172" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M718.836 68.9771V1103.11H575.069L287.535 827.344V344.747L575.069 68.9771H718.836ZM215.651 344.747V827.344H107.826C48.1621 827.344 0 781.152 0 723.93V448.16C0 390.938 48.1621 344.747 107.826 344.747H215.651ZM911.887 366.774C972.844 425.995 1006.34 503.9 1006.34 586.011C1006.34 668.19 972.844 746.095 911.887 805.317L860.777 756.987C908.293 710.659 934.458 649.92 934.458 586.01C934.458 522.17 908.293 461.432 860.777 415.102L911.887 366.774Z" fill="white"/>
            </svg>
        
        :

          <svg fill="#ffffff" id="iconMusic" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1129.433 113v1694.15H903.547l-451.774-451.773V564.773L903.547 113h225.886ZM338.83 564.773v790.604H169.415c-92.806 0-167.9-74.166-169.392-166.609L0 1185.962V734.188c0-92.805 74.166-167.9 166.608-169.392l2.807-.023H338.83ZM1789.951 635 1920 764.926 1724.988 959.94 1920 1154.95 1789.951 1285l-194.89-195.012L1400.05 1285 1270 1154.951l195.012-195.012L1270 764.926 1400.049 635l195.012 195.012L1789.951 635Z" fillRule="evenodd"></path> </g></svg>
      }

      <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          className = "volumenPlayer"
          value={volume}
          onChange={handleVolumeChange}
      />

    </div>
    

  </>

  )
}

export default Volumen