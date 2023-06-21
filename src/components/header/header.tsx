import React from 'react'
import './header.css'
import seifPic from "../../assets/pics/seif2.png";


interface Props {
    
}

const header = (props: Props) => {
    return (
      <div className="body">
        <img
          src={seifPic}
          alt="Seif"
          style={{ width: "300px", height: "300px", marginTop: "2%"}}
        />
        <div className="buttons">
          <button >Expierence</button>
          <button>Education</button>
          <button>Contact Me</button>
        </div>
      </div>
    );
}

export default header
