import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import InstallingWindows from '../assets/images/InstallingWindows.png'
//import WindowsPDF from '../assets/pdfs/AiLab.pdf'
import ConfiguringOSPF from '../assets/images/OspfLab.png'
import LocalAI from '../assets/images/LocalAi.png'
import BGP from '../assets/images/BGPLab.png'
import SwitchHackingLab from '../assets/images/SwitchHackingLab.png'
import AWS1 from '../assets/images/AWSLab1-3.png'
import AWS2 from '../assets/images/AWSLab4-6.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href='/portfolio/pdfs/Windows11Lab.pdf' target="_blank" rel="noreferrer"><img src={InstallingWindows} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='/portfolio/pdfs/Windows11Lab.pdf' target="_blank" rel="noreferrer"><h2>Installing Windows 11 and Drivers</h2></a>
                <p>In this lab, I set up Windows 11 pro on my lab system</p>
            </div>
            <div className="project">
                <a href='/portfolio/pdfs/OSPFlab.pdf' target="_blank" rel="noreferrer"><img src={ConfiguringOSPF} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='/portfolio/pdfs/OSPFlab.pdf' target="_blank" rel="noreferrer"><h2>Configuring Multi-Area OSPF</h2></a>
                <p>By configuring multi area OSPF, I was able to use OSPF in a way that is more efficient for larger networks.</p>
            </div>
            <div className="project">
                <a href='/portfolio/pdfs/OSPFlab.pdf' target="_blank" rel="noreferrer"><img src={LocalAI} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='/portfolio/pdfs/OSPFlab.pdf' target="_blank" rel="noreferrer"><h2>Configuring Local AI</h2></a>
                <p>In the lab, I ran local LLM instances on my workstation. Doing so eliminates many potential security concerns that come with using online models like chat GPT, as they potentially have access to all the data given to their models. </p>
            </div>
            <div className="project">
                <a href="/portfolio/pdfs/BGP lab.pdf" target="_blank" rel="noreferrer"><img src={BGP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/portfolio/pdfs/BGP lab.pdf" target="_blank" rel="noreferrer"><h2>Configuring BGP</h2></a>
                <p>In this lab, I configured BGP across three ASes, running OSPF, IS-IS, and EIGRP respectively</p>
            </div>
            <div className="project">
                <a href="/portfolio/pdfs/Switch Hacking Lab.pdf" target="_blank" rel="noreferrer"><img src={SwitchHackingLab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/portfolio/pdfs/Switch Hacking Lab.pdf" target="_blank" rel="noreferrer"><h2>Layer Two Attacks and Mitigations</h2></a>
                <p>In this lab, I conducted and showed the effects of three common layer two attacks: ARP spoofing, MAC overflow, and DTP spoofing. After demonstrating these attacks, I show how to prevent them.</p>
            </div>
            <div className="project">
                <a href="/portfolio/pdfs/Aws(1-3).pdf" target="_blank" rel="noreferrer"><img src={AWS1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/portfolio/pdfs/Aws(1-3).pdf" target="_blank" rel="noreferrer"><h2>AWS Cloud Foundations Labs 1-3</h2></a>
                <p>In these three labs, I have documented steps on how to implement AWS IAM, how to use Amazon EC2, and how to use Virtual Private Clouds on AWS</p>
            </div>
            <div className="project">
                <a href="/portfolio/pdfs/Aws(3-6).pdf" target="_blank" rel="noreferrer"><img src={AWS2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/portfolio/pdfs/Aws(3-6).pdf" target="_blank" rel="noreferrer"><h2>AWS Cloud Foundations Labs 4-6</h2></a>
                <p>In these three labs, I focused on Storage, Databases, and auto-scaling</p>
            </div>
        </div>
    </div>
    );
}

export default Project;