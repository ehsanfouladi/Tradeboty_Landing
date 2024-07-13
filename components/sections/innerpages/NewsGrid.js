import Link from 'next/link';

const NewsGrid = () => {
  return (
    <>
    <section className="news-section">
      <div className="auto-container">
  
        <div className="row">
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp">
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
  
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
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
  
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
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
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news5-3.jpg" alt=""/></Link></figure>
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
  
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news5-2.jpg" alt=""/></Link></figure>
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
  
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt=""/></Link></figure>
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
    
    <section className="subscribe-section alternate">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="title-column col-xl-6">
              <div className="inner-column">
                <h2 className="title">Subscribe for any update information</h2>
              </div>
            </div>
            <div className="form-column col-xl-6">
              <div className="newsletter-form">
                <form method="post" action="#">
                  <div className="form-group">
                    <input type="email" name="email" className="email" placeholder="Type email id" required=""/>
                    <button type="button" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Submit</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* News Section */}
      
    </>
  );
};
export default NewsGrid
