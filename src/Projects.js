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
                    <Proj h1="coming soon" para="yet to come" link="" />
                    <Proj h1="coming soon" para="yet to come" />
                    <Proj h1="coming soon" para="yet to come" />
                </div>

            </section>

        </>
    )
}

export default Project;