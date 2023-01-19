import './css/projects.css';
import Proj from './components/proj.jsx';
function Project(){
    return(
        <>
            <section id="section4"  >
                <h1 className="sec4-h1">My project</h1>
                <div className="sec4-div">
                    <Proj h1="Prepquizz" img="images/preplogo.PNG" link="https://prepquizz.cyclic.app"
                    para=" Prepquizz is placement preperation platform for college students
                    focussing on providing the placement related mcq quizes on various
                    subjects like reasoning, aptitude, coding etc."
                    />

                    <Proj h1="Box-Shadow-generator" para="Box shadow generator
                    is used set the shadow layout of the box and generates the code
                     of the related shadow
                    " link="https://box-shadow-genr.netlify.app/" 
                    />
                    
                    <Proj h1="coming soon" para="yet to come" />
                    <Proj h1="coming soon" para="yet to come" />
                </div>

            </section>

        </>
    )
}

export default Project;