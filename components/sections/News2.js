import Link from "next/link"
const News2 = () => {
    return (
        <>
            <section className="news-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Latest News</span>
                        <h2>Empowering your <br/>online presence</h2>
                    </div>
            
                    <div className="row">
                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-1.jpg" alt=""/></Link></figure>
                                    <span className="cat">NEWS</span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">Where creativity meets latest technology</Link></h4>
                                    <div className="text">Lorem Ipsum is simply is do omy is text Loremo Ipsum is simply is out no our o dummy</div>
                                </div>
                                <div className="bottom-box">
                                    <div className="author-info">
                                        <figure className="thumb"><img src="images/resource/avatar-1.jpg" alt=""/></figure>
                                        <h6 className="name">Eleanor Pena</h6>
                                        <span className="text">May 11,2022</span>
                                    </div>
                                    <div className="comments"><i className="fa fa-comments"></i> Comments (05)</div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-2.jpg" alt=""/></Link></figure>
                                    <span className="cat">NEWS</span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">Your digital journey starts here with our company</Link></h4>
                                    <div className="text">Lorem Ipsum is simply is do omy is text Loremo Ipsum is simply is out no our o dummy</div>
                                </div>
                                <div className="bottom-box">
                                    <div className="author-info">
                                        <figure className="thumb"><img src="images/resource/avatar-2.jpg" alt=""/></figure>
                                        <h6 className="name">Eleanor Pena</h6>
                                        <span className="text">May 11,2022</span>
                                    </div>
                                    <div className="comments"><i className="fa fa-comments"></i> Comments (05)</div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news2-3.jpg" alt=""/></Link></figure>
                                    <span className="cat">NEWS</span>
                                </div>
                                <div className="content-box">
                                    <h4 className="title"><Link href="news-details">Amplify your digital presence applying technology</Link></h4>
                                    <div className="text">Lorem Ipsum is simply is do omy is text Loremo Ipsum is simply is out no our o dummy</div>
                                </div>
                                <div className="bottom-box">
                                    <div className="author-info">
                                        <figure className="thumb"><img src="images/resource/avatar-3.jpg" alt=""/></figure>
                                        <h6 className="name">Eleanor Pena</h6>
                                        <span className="text">May 11,2022</span>
                                    </div>
                                    <div className="comments"><i className="fa fa-comments"></i> Comments (05)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News2