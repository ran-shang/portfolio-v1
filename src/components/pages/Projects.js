import React from "react";
import '../../App.css';
import { Footer } from "../Footer";
import "../Footer.css";

export default function Projects(){
    return (
    <div className="projects" id="projectSection">
        <div className="project-info-container">

        <h1 >MY PROJECTS</h1>
        </div>
        <br />
        <h2>Health Check Script</h2>
        <h4>Type: Work Project</h4>
        <ol>
            <li><p>●	Designed and created a script in Bash that automates pre-test and post-test health checks on the 5G Session Management Function (SMF). </p></li>
            <li><p>●	Analyzed the status of 25 vital components, including but not limited to SMF alarms and interfaces. </p></li>
            <li><p>●	Used awk, grep, iterations, and selections to monitor and notify the health of the checked parts. </p></li>
        </ol>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
        <br />
        <h2>Catering Website</h2>
        <h4>Type: Academic Project</h4>
        <ol>
            <li><p>●	Redesigned a catering website with a more user-friendly and intuitive user interface. </p></li>
            <li><p>●	Added shopping cart and checkout functionalities with a modern look using JavaScript, PHP, HTML, and CSS. </p></li>
            <li><p>●	Implemented an interactive map on the checkout page using Leaflet.</p></li>
            <li><p>●	Created a database on Oracle and queried the dish information shown on the menu with SQL.</p></li>
        </ol>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
                        <br />
        <h2>Snake Game</h2>
        <h4>Type: Personal Project</h4>
        <ol>
            <li><p>●	A simple snake game wrote with C++. </p></li>
            <li><p>●	Implemented the kbhit() function on the Linux System. </p></li>
            <li><p>●	Used the slow() function to provide different difficulty levels.</p></li>
        </ol>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
                        <br />
        <Footer />
    </div>
    
    )
}