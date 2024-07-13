import Link from "next/link"
const News5 = () => {
    return (
        <>
            <section className="news-section-five">
                <div className="auto-container">
                    <div className="sec-title text-center style-two">
                        <span className="sub-title">Latest blog and news</span>
                        <h2>Your partner in digital <br/>transformation</h2>
                    </div>
            
                    <div className="row">
                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt=""/></Link></figure>
                                    <span className="date">02 <small>Oct 2022</small></span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">Enhancing digital experiences</Link></h4>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur. Volut pat cursus amet convallis vitae.
                                        Porta.</div>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i>Admin</li>
                                        <li><i className="fa-solid fa-comment"></i>3 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            
                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-2.jpg" alt=""/></Link></figure>
                                    <span className="date">02 <small>Oct 2022</small></span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">Crafting digital strategies that work</Link></h4>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur. Volut pat cursus amet convallis vitae.
                                        Porta.</div>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i>Admin</li>
                                        <li><i className="fa-solid fa-comment"></i>3 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            
                        <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news5-3.jpg" alt=""/></Link></figure>
                                    <span className="date">02 <small>Oct 2022</small></span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">AI: Changing the Tech Landscape</Link></h4>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur. Volut pat cursus amet convallis vitae.
                                        Porta.</div>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i>Admin</li>
                                        <li><i className="fa-solid fa-comment"></i>3 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News5