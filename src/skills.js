import './App.css';
import './css/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function Skills(){

    useEffect(() => {
        AOS.init({
            offset:300,
            duration:1000,
        });
      }, [])


    return(
        <section id="section2" >
             <div className="sec2-div">
                   <h1 className=" sec2-h1">Skill set</h1>
                   <div className="col" data-aos="fade-up" >
                        <div className="row1" >
                            <h1>Programming languages</h1>
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className="row2" >
                            <h1> Web technology</h1>
                            <ul>
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                                <li>node.js</li>
                                <li>express.js</li>
                            </ul>
                        </div>
                            <div className="row1" >
                        <h1>Database</h1>
                        <ul>
                            <li>mysql</li>
                            <li>mongodb</li>
                        </ul>
    
                        </div>
                            <div className="row2" >
                            <h1>Tools</h1>
                          <ul>
                          
                                <li>figma</li>
                                <li>git</li>
                                <li>linux</li>
                          </ul>
                        </div>

                   </div>

             </div>
        </section>

    );
}

export default Skills;