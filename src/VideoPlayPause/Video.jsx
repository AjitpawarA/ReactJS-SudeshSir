import React, { useRef } from 'react'
import vid from "./v.mp4"
import { useState } from 'react'

function Video() {

    const [ play, setplay]=useState(false);
    const videlement=useRef();

    function handleclick(){
        setplay(!play);

        if(!play){
            videlement.current.play();
        }
        else{
            videlement.current.pause();
        }
    }
  return (
    <div>
        <button onClick={handleclick}>{play ? "pause": "play"}</button>
        <video src={vid} ref={videlement} style={{width:"400px", height:"400px"}}></video>
    </div>
  )
}

export default Video