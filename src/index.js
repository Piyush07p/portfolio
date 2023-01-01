import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Skills from './skills.js'
import Cert from './certificates'
import Project from './Projects.js'
import Contact from './Contact.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <App />
     <Skills/>
     <Project/>
     <Cert/>
     <Contact/>
  </>
);

reportWebVitals();
