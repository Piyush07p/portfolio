
import './App.css';
import React,{useState} from 'react';

function App() {

  const[sidebar,setsidebar]=useState(false)
  const togle=()=>{
    setsidebar((prevState)=>!prevState)
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
        <i onClick={togle}  className="fa-light fa-bars">open</i>   
      </div>
      <div className="info-container">
        <div className="info">
          <p>web developer</p>
          <h1>Hello I'm <span className="span-name">Piyush</span><br/>Patel from India</h1>

          <button>Download CV</button>
          <button>Connect</button>
        </div>
        <div>
        <div className="profile">
              <img src="./images/rephoto.jpeg"></img>
        </div>
        </div>
      </div>
     
    </section>
       
  );
}

export default App;
