import Link from "next/link"
const News1 = () => {
    return (
        <>
        <section className="news-section pt-0">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">news and blog</span>
                    <h2>Building your digital <br/>future</h2>
                    <div className="btn-box">
                        <Link href="news-grid" className="theme-btn btn-style-one"><span className="btn-title">View More</span></Link>
                    </div>
                </div>
        
        
                <div className="row">
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news1-1.jpg" alt=""/></Link></figure>
                                <span className="cat">Evaulation</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fas fa-calendar-alt"></i> 01 January 2023</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Your online success is our priority amplify your digital presence</Link></h4>
                                <div className="text">Our mission is there are variations passages of Lorem Ipsum available, but the majority have suffered alteration</div>
                                <Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news1-2.jpg" alt=""/></Link></figure>
                                <span className="cat">Evaulation</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fas fa-calendar-alt"></i> 01 January 2023</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Where creativity meets technology enhancing digital experiences</Link></h4>
                                <div className="text">Our mission is there are variations passages of Lorem Ipsum available, but the majority have suffered alteration</div>
                                <Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news1-3.jpg" alt=""/></Link></figure>
                                <span className="cat">Evaulation</span>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fas fa-calendar-alt"></i> 01 January 2023</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">The digital you need transforming your digital landscape</Link></h4>
                                <div className="text">Our mission is there are variations passages of Lorem Ipsum available, but the majority have suffered alteration</div>
                                <Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default News1