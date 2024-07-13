import Link from 'next/link';

const Pricing = () => {
  return (
    <>
    <section>
      <div className="container pb-70">
              <div className="row">
                  <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="400ms">
                      <div className="inner-box">
                          <div className="title-box">
                              <h3 className="title">Stater  Plan</h3>
                              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
                          </div>
                          <div className="price-box">
                              <h2 className="price">$23<sub>/Per month</sub></h2>
                          </div>
                          <ul className="features">
                              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
                              <li><i className="fa fa-circle-check"></i>Your Startup</li>
                              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
                              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
                          </ul>
                          <Link href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></Link>
                      </div>
                  </div>
  
                   <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                      <div className="inner-box">
                          <div className="title-box">
                              <h3 className="title">Standard Package</h3>
                              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
                          </div>
                          <div className="price-box">
                              <h2 className="price">$46<sub>/Per month</sub></h2>
                          </div>
                          <ul className="features">
                              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
                              <li><i className="fa fa-circle-check"></i>Your Startup</li>
                              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
                              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
                          </ul>
                          <Link href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></Link>
                      </div>
                  </div>
  
                   <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="400ms">
                      <div className="inner-box">
                          <div className="title-box">
                              <h3 className="title">Savings Plan</h3>
                              <div className="text">Lorem Ipsum is simply text of the printing Lorem Ipsum is simply dummy text</div>
                          </div>
                          <div className="price-box">
                              <h2 className="price">$19<sub>/Per month</sub></h2>
                          </div>
                          <ul className="features">
                              <li><i className="fa fa-circle-check"></i>Mistakes To Avoid</li>
                              <li><i className="fa fa-circle-check"></i>Your Startup</li>
                              <li><i className="fa fa-circle-check"></i>Knew About Fonts</li>
                              <li><i className="fa fa-circle-check"></i>Winning Metric for Your Startup</li>
                          </ul>
                          <Link href="#" className="theme-btn btn-style-one read-more"><span className="btn-title">Buy Now <i className="fa fa-arrow-right"></i></span></Link>
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
export default Pricing
