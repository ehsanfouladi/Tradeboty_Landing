import Link from "next/link"
const Banner1 = () => {
    return (
        <>
        <section className="banner-section-two">
            <div className="auto-container">
                <div className="row">
                    <div className="content-columnn col-lg-6">
                        <div className="content-box">
                            <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Market Analysis</span>
                            <h1 className="title wow fadeInUp" data-wow-delay="600ms">We turn ideas <br/>into digital reality</h1>
                            <div className="text wow fadeInUp" data-wow-delay="900ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</div>
                            <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="image-box">
                            <span className="icon-dots-3 bounce-y"></span>
                            <figure className="image wow fadeInDown" data-wow-delay="1500ms"><img src="images/banner/2.png" alt=""/></figure>
                            <div className="info-box wow fadeInUp" data-wow-delay="1800ms">
                                <div className="icon-box"><img src="images/banner/circle.png" alt=""/><span className="count">70%</span></div>
                                <h6 className="title">Daily Activity</h6>
                                <div className="text">Lorem Ipsum</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner1