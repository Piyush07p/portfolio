import './App.css';
import './css/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skdata from './skilldata.js'
import React,{useEffect,useState} from "react";

function Skills(){

    
      const[skill,setSkill]=useState(skdata.skills);

    return(
        <section id="section2" >
             <div className="sec2-div">
                   <h1 className=" sec2-h1">Skill area</h1>
                   <div className="col" data-aos="fade-up" >
                       {
                           skill.map((elem)=>{
                               return(
                                   <>
                                       <div className="row1" >
                                           <div className="inner-box">
                                               <div className="card-front">
                                                   <h1>{elem.title}</h1>
                                                   <center>
                                                       <img className="skill-logo" width="40rem" src={elem.img} />
                                                   </center>
                                               </div>
                                               <div className="card-back">
                                                   <ul className='skill_ul'>
                                                       <li>
                                                        <img src={elem.arr[0]}/>
                                                       </li>
                                                       <li>
                                                       <img src={elem.arr[1]}/>
                                                      </li>
                                                       <li>
                                                         <img src={elem.arr[2]}/>
                                                       </li>
                                                       <li>
                                                         <img src={elem.arr[3]}/>
                                                       </li>
                                                       <li>
                                                         <img src={elem.arr[4]}/>
                                                       </li>
                                                       <li>
                                                         <img src={elem.arr[5]}/>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </>
                               )
                           })
                       }

                   </div>

             </div>
        </section>

    );
}

export default Skills;