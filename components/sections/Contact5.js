import Link from "next/link"
const Contact5 = () => {
    return (
        <>
            <section className="contact-section-five pull-up pt-0">
                <div className="bg bg-pattern-6"></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="form-column col-lg-6 col-md-12 col-sm-12 order-2">
                                <div className="inner-column">
                                    <div className="contact-form wow fadeInLeft">
                                        <form method="post" action="get" id="contact-form">
                                            <div className="row">
                                                <div className="form-group col-lg-6 col-md-6">
                                                    <input type="text" name="full_name" placeholder="Your Name" required/>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6">
                                                    <input type="text" name="phone" placeholder="Phone Number" required/>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12">
                                                    <input type="email" name="email" placeholder="Your Email" required/>
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <textarea name="message" placeholder="Message" required></textarea>
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Request</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="content-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    <div className="sec-title style-two">
                                        <span className="sub-title">Talk to us</span>
                                        <h2>Crafting digital strategies<br/> that work</h2>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>    
                                    </div>
                                    <Link href="#" className="info-link"><i className="fa fa-phone"></i> +880 123 456 789</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact5