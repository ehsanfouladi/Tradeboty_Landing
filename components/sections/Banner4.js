import Link from "next/link"
const Banner4 = () => {
    return (
        <>            
            <section className="banner-section-four">
                <div className="bg" style={{ backgroundImage: 'url(images/banner/bg-2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6">
                            <div className="content-box">
                                <span className="sub-title wow fadeInUp">Grow business</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="300ms">Transforming your ideas into digital reality</h1>
                                <div className="text wow fadeInUp" data-wow-delay="600ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business Are Necessary.</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                    <Link href="page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6">
                            <div className="image-box">
                                <div className="bg-shape wow zoomIn" data-wow-delay="1500ms"></div>
                                <figure className="image wow zoomIn" data-wow-delay="1200ms"><img src="images/banner/4.png" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner4