import React from "react";
import SocialUrl1 from '../../assets/google_play.png';
import SocialUrl2 from '../../assets/app_store_badge.png';
import SocialUrl3 from '../../assets/huawei_badge@2x.png';

import './footer.styles.scss';

const FooterBar =()=>{
    return(
        <div className="text-center p-3" >
            <span className="media">
            <a href="#" target='_blank' rel="noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="#" target='_blank' rel="noreferrer"><i className="fa fa-linkedin" /></a>
            <a href="#" target='_blank' rel="noreferrer"><i className="fa fa-facebook"></i></a>
           </span>
           <div>
           <img alt='img' className="social-image" src={SocialUrl1} /> 
           <img alt='img' className="social-image" src={SocialUrl2} /> 
           <img alt='img' className="social-image" src={SocialUrl3} /> 
           </div>
            <hr />
            <span>© 2020 Copyright</span>
            <span className="text-dark" href=""> moodagent </span>
        </div>
        
        
    );
}

export default FooterBar;