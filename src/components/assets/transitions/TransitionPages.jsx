import React, { useEffect } from 'react'
import gsap, { Circ } from "gsap"
import { Power4 } from 'gsap'
import "./transition.css"

const TransitionPages = () => {

    useEffect(() =>{

        gsap.to(".colorPalet", 1, {
          delay:.1,
          top:"101%",
          ease:Power4.easeInOut,
          /* stagger:{amount: .9} */
        })
  
        gsap.to(".colorPalet2", 1, {
          delay:.45,
          top:"101%",
          ease:Circ.easeInOut,
          /* stagger:{amount: .9} */
        })
  
        
    
  
    },[])

  return (
    <>
        <div className="colorPalet"></div>
        <div className="colorPalet2"></div>
    </>
  )
}

export default TransitionPages