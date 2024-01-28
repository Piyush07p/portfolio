import './css/contact.css';

export default function Contact(){
    return(
        <>
            <section id="section5">

                <div className="sec5-cont">
                    <div className="left-div">
                        <h1>Contact me</h1>
                        <br/>
                        <br/>
                        <div data-aos="fade-up" className="contact">
                            {/* <span><i class="fa-solid fa-envelope"></i> </span>
                            <span>piyushpatel27978@gmail.com</span> */}
                            <br/>
                            <br/>
                            <div className="social">
                                <h3>Connect with me</h3>
                                <p>
                                    Feel free to contact me for any kind of query
                                    regarding development
                                </p>
                                <br/>
                              
                                <div>
                                <a target="_blank" href="https://www.linkedin.com/in/piyush-patel-7ab18a209">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>

                                <a target="_blank" href="https://www.instagram.com/__piyush.py__">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a target="_blank" href="https://www.github.com/Piyush07p">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                </div>
                              
                            </div>

                        </div>
                    </div>
                    <div data-aos="fade-up" className="right-div">
                       <form action="https://formspree.io/f/xnqyqkgj" method="POST">
                       <input name="name" type="text" required placeholder="your name" />
                        <br />

                        <input name="email" type="email" required placeholder="your email" />
                        <br />
                        <textarea name="tarea" placeholder="your message" type="text" />
                        <br />
                        <button  type="submit">Submit</button>
                       </form>
                    </div>
                </div>

                <footer className="footer">
                            
                    <p style={{fontSize:"1rem"}}>Copyright &copy;  2024 Made  {/*<i style={{color:"red"}} class="fa-solid fa-heart"></i>*/} by Piyush Patel</p>
                </footer>

            </section>
        </>

    )
}
