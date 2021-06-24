import React from "react";


import FooterBar from "../../components/footer/footer.component";
import './homepage.styles.scss';
import MobileImg from '../../assets/Moodagent@2x.png';
import MobileBgImg from '../../assets/Moodagent-cutoff.png';
import DesktopImg from '../../assets/Desktop_player.png';
import Content from "../../components/content/content.component";
import { Button } from "react-bootstrap";
const mobileInfo = [
    {
        text: "Download the Moodagent app here:",
        buttonText:"install"
    },
    {
        text: "Follow the on-screen instructions to create your account"
    },
    {
        text: "Follow the on-screen Tell us what you like to listen to. you can choose from the suggested artists or search for anyone you webkitCancelAnimationFrame, as long as you pick at least ThemeProvider. You might wanna pick even more-this will be the foundation of your personalized experience on Moodagent"
    },
    {
        text: "Follow the on-screen instructions to create your account"
    }
];
const desktopInfo = [
    {
        text: "Download the Moodagent app here:",
        buttonText:"install"
    },
    {
        text: "Follow the on-screen instructions to create your account"
    },
    {
        text: "Follow the on-screen Tell us what you like to listen to. you can choose from the suggested artists or search for anyone you webkitCancelAnimationFrame, as long as you pick at least ThemeProvider. You might wanna pick even more-this will be the foundation of your personalized experience on Moodagent"
    },
    {
        text: "Follow the on-screen instructions to create your account"
    }
];
const List = ({listItems}) => {
    return(
        <ol>
            {listItems.map((item, i) => (
                <li key={i}> 
                    <span className="item-text">{item.text}</span>
                    {item.buttonText &&
                        <Button>{item.buttonText}</Button>
                    }
                </li>
            ))}
        </ol>
    )
}
const Homepage =()=>{
    return(
        <div className="home-page-container">
          <Content imageUrl={MobileImg} mobileUrl={MobileBgImg} bgClassName="section1">
            <h1>Getting Started</h1>
            <h3>Moodagent on mobile:</h3>
            <List listItems={mobileInfo}/>
          </Content>
          <Content imageUrl={DesktopImg} bgClassName="section2" imageContainerClassName={"desktop-image-container"}>
            <h1>Desktop Moodagent</h1>
            <List listItems={desktopInfo}/>
         </Content>
          <div className="footerbar">
            <FooterBar />
          </div>
       </div>
    
    );
}

export default Homepage;