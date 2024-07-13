import Link from "next/link"
const News3 = () => {
    return (
        <>
        <section className="news-section-three pt-0">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">blog and News</span>
                    <h2>Digitally disrupting the <br/>status quo</h2>
                </div>
                <div className="row">
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-1.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-folder"></i>Category</li>
                                    <li><i className="fa fa-calendar-alt"></i>October 19, 2022</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">The standard chunk of Lorem Ipsum.The standard chunk</Link></h4>
                                <Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-2.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa-solid fa-file"></i>Category</li>
                                    <li><i className="fa-solid fa-calendar-days"></i>October 19, 2022</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">The standard chunk of Lorem Ipsum.The standard chunk</Link></h4>
                                <Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news3-3.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa-solid fa-file"></i>Category</li>
                                    <li><i className="fa-solid fa-calendar-days"></i>October 19, 2022</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">The standard chunk of Lorem Ipsum.The standard chunk</Link></h4>
                                <Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default News3