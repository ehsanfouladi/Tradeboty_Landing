import Link from "next/link"
const Banner5 = () => {
    return (
        <>            
            <section className="banner-section-five">
                <div className="bg" style={{ backgroundImage: 'url(images/banner/bg-3.png)' }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="content-columnn col-lg-6">
                            <div className="content-box">
                                <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Market analysis</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Digitally disrupting <br/>the status quo</h1>
                                <div className="text wow fadeInUp" data-wow-delay="900ms">And In Order To Make A Business, Brand Advertig And Marketing Plays An <br/>Important Role. Similarly, In Making Cultivation Business</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6">
                            <div className="image-box wow fadeInRight" data-wow-delay="1500ms">
                                <figure className="image overlay-anim"><img src="images/banner/5.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner5