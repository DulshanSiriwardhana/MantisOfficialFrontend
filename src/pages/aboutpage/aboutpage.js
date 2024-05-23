import React from "react";
import Aboutdp from "../../components/aboutdp/aboutdp";
import './aboutpage.css'

const Aboutpage =()=>{

    return(
        <div className="aboutpagecontainer">
            <div className="aboutpagetop">
                <div className="aboutpagetoptext">
                    <h1>About<span style={{color:'#3586ff'}}>Me</span></h1>
                </div>
                <div className="aboutpagetopimagesection">
                    <div className="aboutpagetopimage">
                        <Aboutdp/>
                    </div>
                    <div className="aboutpagetopabout">
                        <div className="aboutpagetext">
                            <p>Hi there!</p>
                            <p>I'm T.D Rasindu Dulshan Siriwardhana</p>
                            <p>I am a Computer Engineering undergraduate in University of Ruhuna Faculy of Engineering.</p>
                            <p>I am fationate as a full-stack developer</p>
                            <h1 style={{color:'#3586ff'}}>My Career So Far</h1>
                            <p>Always up for a challenge</p>
                            <p>Proficient at designing and feature development on various frameworks,<br></br> writting codes in various languages, feature development and implementation.</p>
                            <p>Specialize in thinking outside the box to find unique solutions to difficult Engineering problems</p>
                            <h1 style={{color:'#3586ff'}}>What Skills I have</h1>
                        </div>
                        <div className="skilllistcontainer">
                            <div className="skillrow1">
                                <div className="r11">Python</div>
                                <div className="r12">JavaScript</div>
                                <div className="r13">HTML</div>
                                <div className="r14">CSS</div>
                            </div>
                            <div className="skillrow2">
                                <div className="r21">Java</div>
                                <div className="r22">C++</div>
                                <div className="r23">C#</div>
                                <div className="r24">C</div>
                            </div>
                            <div className="skillrow3">
                                <div className="r31">Verilog</div>
                                <div className="r32">VHDL</div>
                                <div className="r33">Kotlin</div>
                                <div className="r34">Dart</div>
                            </div>
                            <div className="skillrow4">
                                <div className="r41">MERN Stack</div>
                                <div className="r42">Flutter</div>
                                <div className="r43">WPF</div>
                                <div className="r44">Machine Learning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutbottomcontainer">
                <div className="aboutbottom">
                    <h1>FindMe On</h1>
                    <div className="aboutfindmeonicons">
                        <a href="https://www.hackerrank.com/profile/dondulshan">
                            <img src="https://www.cdnlogo.com/logos/h/58/hackerrank.svg"/>
                        </a>
                        <a href="https://projecteuler.net/profile/dulshan_siriwardhana.png">
                            <img src="https://projecteuler.net/profile/dulshan_siriwardhana.png"/>
                        </a>
                        <a href="https://www.fiverr.com/a2z_python?up_rollout=true">
                            <img src="https://www.cdnlogo.com/logos/f/79/fiverr.svg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutpage;