import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Headshot from '../assets/images/Headshot.png'
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/frozen-coder" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Nathan Regan</h1>
          <p>Networking Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/frozen-coder" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;