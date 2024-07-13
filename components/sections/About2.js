import Link from "next/link"
const About2 = () => {
    return (
        <>
            <section className="about-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About us</span>
                                    <h2>Crafting digital strategies<br/>that work</h2>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry Loreaim Ipsum has been the industry's standard dummyLorem Ipsum is an oi simply dummy text of the printing and typesetting industry</div>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle"></i> Mistakes To Avoid to the dummy printing has bees ind</li>
                                    <li><i className="fa fa-check-circle"></i> Your Startup industry standard loream saum</li>
                                    <li><i className="fa fa-check-circle"></i> Knew About Fonts text the printing and something do</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More<i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <span className="icon-dots-4 bounce-y"></span>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about2-1.jpg" alt=""/></figure>
                                <div className="exp-box">
                                    <span className="count">25</span>
                                    <div className="text">Years<br/>experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About2