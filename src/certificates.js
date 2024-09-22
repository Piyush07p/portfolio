import { Cards } from './components/cards.js'
import React, { useState } from 'react'
import data from './data.js';
import './css/cards.css'

function Cert() {
        const [items, setItems] = useState(data.carrdData);
          const filteritem=(cat)=>{
                   const updateitem=data.carrdData.filter((curitem)=>{
                           return curitem.category===cat;
                   });
                   setItems(updateitem)

          }

          const [visible,setVisible]=useState(4)
          const [sizeFlag,setSizeflag]=useState(true)
          const expandDiv=()=>{
              
            if(sizeFlag){
              setVisible(prev=>prev+4)
            
            }else{
              setVisible(prev=>prev-4)
            }
            if(visible>=items.length-4){
                setSizeflag(false)
            }
            else if(visible==8){
              setSizeflag(true)
            }

          }
      
        return (
                <section data-aos="fade-up" id="section3">
                        <h1  className="section3-h1">Certificates</h1>

                        <div className="card_category">
                            <button onClick={()=> setItems(data.carrdData)}>All</button>
                            <button onClick={()=> filteritem('cisco')}>Cisco</button>
                            <button onClick={()=> filteritem('great-learning')} >Great Learning</button>
                            <button onClick={()=> filteritem('udemy')} >Udemy</button>
                            <button onClick={()=> filteritem('Aws')} >Aws</button>
                            <button onClick={()=> filteritem('others')} >Others</button>
                        </div>
         <div data-aos="fade-up" className="card_container">
            {
                items.slice(0,visible).map((elem) => {
                 const { id,img, title } = elem;
            return (
                   <>
                     <div data-aos="zoom-in" className="cards">
                     <div className="card-components">
                       <div className="card-img">
                        <img width="30px" src={elem.img} />
                      </div>
                    </div>
                      <h1>{elem.title}</h1>
                      <p>{elem.desc}</p>
                      <a target="_blank" href={elem.link}> <button>Visit</button></a>
                  </div>
                </>
                 )
              })
         }


         </div>
         <main className='expandBtn'>
            <button onClick={expandDiv}>{(sizeFlag) ? "See More" : "See Less"}</button>
          </main>

 </section>
        );
}

export default Cert;