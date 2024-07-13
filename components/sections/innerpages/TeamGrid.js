import Link from 'next/link';

const TeamGrid = () => {
  return (
    <>

    <section className="team-section">    
      <div className="auto-container">

        <div className="row">
          <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt=""/></Link></figure> 
                <div className="info-box">
                  <h4 className="name"><Link href="page-team-details">Jacob Jones</Link></h4>
                  <span className="designation">Internet Security Assistant</span>
                  <span className="share-icon fa fa-share-alt"></span>
                  <div className="social-links">
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-2.jpg" alt=""/></Link></figure>
              </div>
              <div className="info-box">
                <h4 className="name"><Link href="page-team-details">Kevin martin</Link></h4>
                <span className="designation">designer</span>
                <span className="share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-3.jpg" alt=""/></Link></figure>
              </div>
              <div className="info-box">
                <h4 className="name"><Link href="page-team-details">Christine eve</Link></h4>
                <span className="designation">designer</span>
                <span className="share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
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

    </>
  );
};
export default TeamGrid
