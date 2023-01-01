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
                            <span><i class="fa-solid fa-envelope"></i> </span>
                            <span>piyushpatel27978@gmail.com</span>
                            <br/>
                           
                            <br/>
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

                                <a target="_blank" href="https://www.instagram.com/piyush_.patel_07">
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
                       <form>
                       <input name="name" type="text" placeholder="your name" />
                        <br />

                        <input name="email" type="email" placeholder="your email" />
                        <br />
                        <textarea name="tarea" placeholder="your message" type="text" />
                        <br />
                        <button  type="submit">Submit</button>
                       </form>
                    </div>
                </div>

                <footer className="footer">
    
                    <p>Copyright @ 2022 Made with love by Piyush Patel</p>
                </footer>

            </section>
        </>

    )
}
