import Link from "next/link"
const Banner6 = () => {
    return (
        <>            
            <section className="banner-section-six">
                <div className="bg" style={{ backgroundImage: 'url(images/banner/bg-4.png)' }}></div> 
                <div className="auto-container">
                    <div className="row">
                        <div className="content-columnn col-lg-6">
                            <div className="content-box">
                                <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Digital World</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Unlocking your <br/>online potential</h1>
                                <div className="text wow fadeInUp" data-wow-delay="900ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="image wow fadeIn"><img src="images/banner/6.jpg" alt=""/></figure>
            </section>
        </>
    );
};
export default Banner6