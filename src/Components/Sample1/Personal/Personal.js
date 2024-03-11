import React from 'react'
import "./Personal.css"

const Personal=()=>{
    return(
        <div className="personalCard">
        <div className="personalImage">
          <img src="Assets/Sample1/docs.png" />
        </div>
        <div className="personalTitle">
          <p>Frontend Development</p>
        </div>
        <div className="personalText">
          <p>Html, Css, Scss, Tailwind css, Javascript, React.js, Next.js</p>
        </div>
      </div>
    )
}

export default Personal;