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
      
        return (
                <section data-aos="fade-up" id="section3">
                        <h1 className="section3-h1">CERTIFICATES</h1>

                        <div className="card_category">
                            <button onClick={()=> setItems(data.carrdData)}>All</button>
                            <button onClick={()=> filteritem('cisco')}>Cisco</button>
                            <button onClick={()=> filteritem('great-learning')} >Great Learning</button>
                            <button onClick={()=> filteritem('udemy')} >Udemy</button>
                            <button onClick={()=> filteritem('coursera')} >Coursera</button>
                            <button onClick={()=> filteritem('others')} >Others</button>
                        </div>
         <div data-aos="fade-up" className="card_container">
            {
                items.map((elem) => {
                 const { id,img, title } = elem;
            return (
                   <>
                     <div className="cards">
                     <div className="card-components">
                       <div className="card-img">
                        <img width="30px" src={elem.img} />
                      </div>
                    </div>
                      <h1>{elem.title}</h1>
                      <p>{elem.desc}</p>
                      <a href=""> <button>visit</button></a>
                  </div>
                </>
                 )
              })
         }


         </div>

 </section>
        );
}

export default Cert;