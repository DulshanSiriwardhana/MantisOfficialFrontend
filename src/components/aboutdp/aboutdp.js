import React from "react";
import coverDp from '../../images/image.png';
import './aboutdp.css'

const Aboutdp =()=>{
    return(
        <div className="aboutdpcontainer">
            <img className="aboutimage" src={coverDp}/>
        </div>
    );
}

export default Aboutdp;