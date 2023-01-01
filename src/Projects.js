import './css/projects.css';
import Proj from './components/proj.jsx';
function Project(){
    return(
        <>
            <section id="section4"  >
                <h1 className="sec4-h1">My project</h1>
                <div className="sec4-div">
                    <Proj img="images/preplogo.PNG" link="https://prepquizz.cyclic.app" />
                    <Proj link="" />
                    <Proj />
                    <Proj />
                </div>

            </section>

        </>
    )
}

export default Project;