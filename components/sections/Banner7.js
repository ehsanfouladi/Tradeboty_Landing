import Link from "next/link"
const Banner7 = () => {
    return (
        <>            
            <section className="banner-section-seven">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-columnn col-xl-6">
                            <div className="content-box">
                                <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Digital Agency</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Digitally disrup <br/> the status quo</h1>
                                <div className="text wow fadeInUp" data-wow-delay="900ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. In Making Cultivation Business A Brand, Good Slogans</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-box">
                        <figure className="image wow fadeIn"><img src="images/banner/7.png" alt=""/></figure>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner7