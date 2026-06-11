import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons';
import CiscoCCNA from '../assets/images/ccna_large.jpg'
import AWS from '../assets/images/AWS.png'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Routing",
    "Network Fundamentals",
    "IP",
    "Connectivity",
    "Docker",
];

const labelsSecond = [
    "EC2",
    "RDS",
    "AWS",
    "VPC",
    "Cloud Storage",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src={CiscoCCNA}/>
                    <h3>Cisco CCNA Certification</h3>
                    <p>I have completed a Cisco CCNA course, learning the fundamentalas of networking and earning the CCNA certification.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={AWS}/>
                    <h3>AWS Cloud Practioner</h3>
                    <p>I have completed a AWS Cloud Practioner course, which went over how to set up infrastructure on AWS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;