import React from "react";
import './logo.styles.css';

import moodagent from '../../assets/moodagent_logo.png';

const Logo =()=>{
    return(
        <img alt='logo' src={moodagent} height="40px" width="140px"/> 
    );
}

export default Logo;