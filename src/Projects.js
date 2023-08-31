import './css/projects.css';
import Proj from './components/proj.jsx';
function Project(){
    return(
        <>
            <section id="section4"  >
                <h1 className="sec4-h1">My projects</h1>
                <div className="sec4-div">
                    <Proj h1="Prepquizz" img="images/preplogo.PNG" link="https://prepquizz.cyclic.app"
                    para=" Prepquizz is placement preperation platform for college students
                    focussing on providing the placement related mcq quizes on various
                    subjects like reasoning, aptitude, coding etc."
                    />
                    <Proj  h1="Brainer" img="images/brain_logo.avif" para="Brainer is a platform which contains multiple games 
                    helpful in brain training through memorization, visualization etc. " link="https://brain-games007.netlify.app/" />

                    <Proj h1="Document-maker" img="images/doc_maker.jpeg" para="Document maker is a website helpful in making the templates of the resume ,applications etc.
                    " link="https://document-maker.netlify.app/" />

                    <Proj h1="Box-Shadow-generator" img="images/box_shad.jfif" para="Box shadow generator
                    is used to generate the shadow of the box with several controls and produces the code of the related shadow.
                    " link="https://box-shadow-genr.netlify.app/" 
                    />
              
                </div>

            </section>

        </>
    )
}

export default Project;