import React from 'react'
import './header.css'
import seifPic from "../../assets/pics/seif.png";


interface Props {
    
}

const header = (props: Props) => {
    return (
      <div className="body">
        <div className="picture">
          <img
            src={seifPic}
            alt="Seif"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    );
}

export default header
