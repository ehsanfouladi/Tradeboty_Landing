import Link from "next/link"
const Banner3 = () => {
    return (
        <>
            <section className="banner-section-three">
                <div className="bg" style={{ backgroundImage: 'url(images/banner/bg-1.png)' }}></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6">
                            <div className="content-box">
                                <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Grow business</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Your partner digital transformation</h1>
                                <div className="text wow fadeInUp" data-wow-delay="900ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary. </div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                    <Link href="page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6">
                            <div className="image-box">
                                <figure className="image wow fadeInUp" data-wow-delay="1500ms"><img src="images/banner/3.jpg" alt=""/></figure>
                                <span className="icon-triangle wow fadeInRight" data-wow-delay="1800ms"></span>
                                <span className="icon-line wow zoomIn" data-wow-delay="2100ms"></span>
                                <div className="info-box wow fadeInUp" data-wow-delay="1800ms">
                                    <div className="inner">
                                        <i className="icon flaticon-graph-1"></i>
                                        <h3 className="title">200+</h3>
                                        <p className="text">Website Lounged</p>
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
export default Banner3