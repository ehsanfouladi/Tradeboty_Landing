import Link from "next/link"
const About4 = () => {
    return (
        <>
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-7 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About us</span>
                                    <h2>Innovative Technology for <br/>Modern Business</h2>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur Amet fermentum  sapien montes mattis vulputates Bibendum a tortor faucibus eu risus dui Erat id  habitasse ut scelerisque lectus euismod velit Egestas arcu tempus</div>
                                </div>

                                <div className="row">
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <i className="icon flaticon-settings-2"></i>
                                            <h6 className="title">Web Development</h6>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <i className="icon flaticon-workers"></i>
                                            <h6 className="title">Network Management</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="btn-box animate-2">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-5 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <div className="icon icon-dots-5 bounce-y"></div>
                                    <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about4-1.jpg" alt=""/></figure>
                                    <div className="exp-box">
                                        <h2 className="title">10</h2>
                                        <p className="text">years experiences</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About4