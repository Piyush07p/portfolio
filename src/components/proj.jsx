


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
                        <h3>{props.h1}</h3>
                        <p>
                          {props.para}
                        </p>
                       
                 </div>
                  <div className="visit">
                            <a href={props.link} target="_blank">
                                <button>visit</button>
                             </a>
                        </div>
            </div>

        </>
    )
}