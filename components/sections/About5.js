import Link from "next/link"
const About5 = () => {
    return (
        <>
            <section className="about-section-five">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title style-two">
                                    <span className="sub-title">About company</span>
                                    <h2>Where creativity meets technology</h2>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur. Amet ferm sapien montes mattis vulputate Bibendum a tortor faucibus eu risus dui. Erat ihabitasse ut scelerisque lectus euismod velit Egestas arcu tempus loren ipsum</div>
                                </div>
                                <ul className="list-style-two two-column">
                                    <li><i className="fa fa-check-circle"></i> Web Development</li>
                                    <li><i className="fa fa-check-circle"></i> Network Management</li>
                                    <li><i className="fa fa-check-circle"></i> Byte Busters</li>
                                    <li><i className="fa fa-check-circle"></i> Digital Dazzle</li>
                                    <li><i className="fa fa-check-circle"></i> Mobile Application</li>
                                    <li><i className="fa fa-check-circle"></i> Software Development</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More<i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <span className="bg-suqre wow zoomIn"></span>
                                <span className="icon-dots-6 bounce-y"></span>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about5-1.jpg" alt=""/></figure>
                                <div className="exp-box">
                                    <span className="count">10</span>
                                    <div className="text">Years of <br/>experiences</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About5