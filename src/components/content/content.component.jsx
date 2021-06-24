import React from "react";
import './content.styles.scss';

const Content = ({children, imageUrl, mobileUrl, bgClassName, imageContainerClassName})=>{
    return(
        <section className={`content-container ${bgClassName}`}>
            <div className="half-container text-container">
                {children}
                
            </div>
            <div className={`half-container image-container ${imageContainerClassName}`}> 
                <img alt='img' className="desktop-image" src={imageUrl} /> 
                <img alt='img' className="mobile-image" src={mobileUrl || imageUrl} /> 
            </div>
        </section>
    );
}

export default Content;