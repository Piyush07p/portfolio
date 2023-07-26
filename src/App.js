
import './App.css';
import React,{useState} from 'react';

function App() {

  const[sidebar,setsidebar]=useState(false)
  const togle=()=>{
    setsidebar((prevState)=>!prevState)
  }

  let tablinks=document.getElementsByClassName('tab-links')
  let tabcontents=document.getElementsByClassName('tab-contents')

  // ----------opentab--------------

  function opentab(tabname,linkname){
    let tabl;
    let tabc;
       for(tabl of tablinks){
         tabl.classList.remove("active-link")
       }
       for(tabc of tabcontents)
       {
         tabc.classList.remove("active-tab");
       }
       document.getElementById(linkname).classList.add("active-link")
       document.getElementById(tabname).classList.add("active-tab");

}

  return (

    <section id="section1" className="section1">
      <div className="container">
        <div className="portlogo">
          <h1>Portfolio</h1>
        </div>
        <nav className="nav">
          <ul className={sidebar?"sider-open":"sider"}>
            <li> <a href="#section1">About</a> </li>
            <li><a href="#section2">Skills</a></li>
            <li><a href="#section4">Projects</a></li>
            <li><a href="#section3">Certificates</a></li>
            <li><a href="#section5">Contact</a></li>
            <i onClick={togle} className="fa-solid fa-xmark"></i>

          </ul>
         
        </nav>
        <i onClick={togle}  className="fa-solid fa-bars-staggered"></i>   
      </div>
      <div className="info-container">
        <div className="info">
          <p>web developer</p>
          <h1>Hello I'm <span className="span-name">Piyush</span><br/>Patel student of CSE</h1>

          <button>Download CV</button>
    
        </div>
        <div>
        <div className="profile">
              <img src="./images/rephoto.jpeg"></img>
        </div>
        </div>
      </div>
      <div className="about_me">
        <h1>About Me</h1>
        <p id="para"> Hi, I'm Piyush patel currently persuing B.tech in computer science engineering 
          branch from Gyan Ganga Institute of Technology and Sciences, Jabalpur.
          I am a web dev enthusiast with a tremendous knowledge of frontend development
         . My goal is to apply my skills and knowledge to create innovative
           solutions that address real-world challenges and improve the lives of individuals and communities.

        </p>
          <div className="tab-titles ">
            <p className="tab-links active-link" id="link1" onClick={()=>opentab('education','link1')}>Education</p>
            <p className="tab-links"  id="link2" onClick={()=>opentab('achievements','link2')}>Coding profile</p>
          </div>
          <div className="tab-contents active-tab" id="education">
                  <ul>
                    <li><span>Class 10th (Nachiketa H.S. school)</span><br/>percentage=88.8%</li>
                    <li><span>Class 12th (Nachiketa H.S. school)</span><br/>percentage=90.6%</li>

                    <li><span>Graduation- B.tech CSE (2020-24)</span><br/>current cgpa=8.74</li>
                  </ul>

          </div>
          <div className="tab-contents" id="achievements">
                  <ul>
                    <li><span>Leetcode</span><br/> 2.5star (300+ ques)  <a target="_blank" href="https://leetcode.com/Piyush07p/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li><span>GFG</span><br/>(300+) points</li>
                    <li><span>Hackerrank</span><br/> 4star(c++)</li>

                  </ul>

          </div>
      </div>
     
    </section>
       
  );
}

export default App;
