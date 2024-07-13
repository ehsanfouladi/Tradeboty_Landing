const Form1 = () => {
    return (
        <>
        <section className="contact-section p-0">
            <div className="auto-container">
                <div className="row">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="contact-form wow fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">talk to us</span>
                                    <h2>Creating online magic</h2>
                                </div>

                                <form method="post" action="get" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <input type="email" name="Email" placeholder="Your Email" required/>
                                                <span className="icon fa fa-envelope"></span>
                                            </div>
                                        </div>
                            
                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <input type="text" name="Phone" placeholder="Phone Number" required/>
                                                <span className="icon fa fa-phone"></span>
                                            </div>
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <div className="input-outer">
                                                <textarea name="message" placeholder="Message" required></textarea>
                                                <span className="icon fa fa-paper-plane"></span>
                                            </div>
                                        </div>
                        
                                        <div className="form-group col-lg-12">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12">
                        <div className="inner-column">
                            <figure className="image overlay-anim"><img src="images/resource/contact-1.jpg" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Form1