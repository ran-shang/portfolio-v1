import React from "react";
import "./MeSection.css";
function MeSection(){
    return(
        <div class='me' id="meSection">
            
            <h1>About Me</h1>
            <div className="me_container">
                <div className="me_info">
                    <br/>
                    <p className="info_icon work"><i class="fa fa-briefcase"></i></p>
                    <h3>Working Experience:</h3>
                    <br/>
                    <div className="info_word work">
                        <p>Full-Time Online Programmer at Ubisoft, Montreal, 2023 to current. </p>
                        <br/>
                        <p>Co-op Online Programmer at Ubisoft, Montreal, 2023. </p>
                        <br/>
                        <p>Co-op Software Developer at Presagis, Montreal, 2022. </p>
                        <br/>
                        <p>Co-op Integration Engineer at Ericsson, Montreal, 2021.</p>
                    </div>
                    <br/>
                </div>
                <div className="me_education">
                    <br/>
                    <p className="info_icon university"><i class="fa fa-graduation-cap"></i></p>
                    <h3>Education:</h3>
                    <br />
                    <p className="info_word education">2023 Bachelor's Degree 
                        on Computer Science at Concordia University, Montreal.
                        </p>
                        <br/>
                </div>
            </div>

        </div>
    )
}

export default MeSection;