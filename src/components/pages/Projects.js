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
        <div className="projects_info">
        <br />
        <h2>My Portfolio Website</h2>
        <h4>Type: Personal Project</h4>
        <ul>
            <li><p>Designed and created <a href="https://ran-shang.github.io/ran-website/">my portfolio website</a> using React.js.  </p></li>
            <li><p>Used React Router to keep the user interface in sync with the URL. </p></li>
            <li><p>Implemented React smooth scroll to animate the vertical scroll when clicking the home page buttons. </p></li>
            <li><p>Added CSS Media Queries to apply different styles for different types of devices. </p></li>
        </ul>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
        <br />
        <h2>Interactive Museum</h2>
        <h4>Type: Academic Project</h4>
        <ul>
            <li><p>Designed an <a href="https://drive.google.com/file/d/1-ENuQqfJSE1a5d79ZXX7bx38pOKQtfGK/view?usp=sharing">interactive museum</a> with four cubic zones using OpenGL. </p></li>
            <li><p>Implemented the fire, fountain, and wind effect using particles. </p></li>
            <li><p>Added several 3D models to the scene using the hierarchical model.</p></li>
            <li><p>Debugged and merged everyone’s code and made the introduction video for the project.</p></li>
        </ul>
        <br />
        <h2>Health Check Script</h2>
        <h4>Type: Work Project</h4>
        <ul>
            <li><p>Designed and created a script in Bash that automates pre-test and post-test health checks on the 5G Session Management Function (SMF). </p></li>
            <li><p>Analyzed the status of 25 vital components, including but not limited to SMF alarms and interfaces. </p></li>
            <li><p>Used awk, grep, iterations, and selections to monitor and notify the health of the checked parts. </p></li>
        </ul>
        <br />
        <h2>Catering Website</h2>
        <h4>Type: Academic Project</h4>
        <ul>
            <li><p>Redesigned a catering website with a more user-friendly and intuitive user interface. </p></li>
            <li><p>Added shopping cart and checkout functionalities with a modern look using JavaScript, PHP, HTML, and CSS. </p></li>
            <li><p>Implemented an interactive map on the checkout page using Leaflet.</p></li>
            <li><p>Created a database on Oracle and queried the dish information shown on the menu with SQL.</p></li>
        </ul>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> 
                        </a>
        </h4>
        <br />
        <h2>Risk Board Game</h2>
        <h4>Type: Academic Project</h4>
        <ul>
            <li><p>Used C++ to Develop a console application, which is the protoype of the <a href="https://www.warzone.com/">WARZONE Risk Game</a>. </p></li>
            <li><p>Implemented the game engine. </p></li>
            <li><p>Created the command processor and adapter using the adapter design pattern.</p></li>
            <li><p>Designed and created the start-up, main-game loop, and wining phases.</p></li>
            <li><p>Implemented the tournament mode, in which the game can be played without user interactions.</p></li>
        </ul>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
                        <br />
        <h2>COVID-19 Vaccination Information System</h2>
        <h4>Type: Academic Project</h4>
        <ul>
            <li><p>Created a database application to maintain and manipulate vaccination related information using SQL, React, and Node.js with three other students. </p></li>
            <li><p>Designed the ER diagram and converted it to relational schemas. </p></li>
            <li><p>Added a list of DML triggers to validate future data modifications.</p></li>
            <li><p>Generated massive mock data with Mockaroo and populated the database.</p></li>
        </ul>
        <br />
        <h2>Snake Game</h2>
        <h4>Type: Personal Project</h4>
        <ul>
            <li><p>A simple snake game wrote with C++. </p></li>
            <li><p>Implemented the kbhit() function on the Linux System. </p></li>
            <li><p>Used the slow() function to provide different difficulty levels.</p></li>
        </ul>
        <h4>See the Source Code From:
        <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                        </h4>
                        <br />
                        </div>
        <Footer />
    </div>
    
    )
}