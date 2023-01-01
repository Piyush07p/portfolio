


export default function Proj(props){
    return(
        <>
            <div className="project_box" data-aos="fade-up">
                <center>
                  <div className="pro_logo">
                     <img src={props.img} alt=""/>
                  </div>
                </center>
                 <div data-aos="fade-up" className="pro_description">
                        <h3>Prepuizz</h3>
                        <p>
                           Prepquizz is placement preperation platform for college students
                           focussing on providing the placement related mcq quizes on various
                           subjects like reasoning, aptitude, coding etc.
                        </p>
                       <a href={props.link} target="_blank"> <button>visit</button></a>
                 </div>
            </div>

        </>
    )
}