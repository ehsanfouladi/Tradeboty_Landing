import Link from "next/link"
const Process7 = () => {
    return (
        <>
		<div className="combine-bg">
			<div className="bg bg-pattern-15"></div>
		
			<section className="process-section-four">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Working process</span>
						<h2>Building your digital <br/>future</h2>
					</div>
					<div className="row">
						<div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInLeft">
							<div className="inner-box">
								<i className="icon flaticon-stats"></i>
								<span className="count">01</span>
								<h4 className="title"><Link href="page-about">Pixie Digital</Link></h4>
								<div className="text">It is long established fact that a reader will be distrol acted bioiiy.</div>
							</div>
						</div>
						<div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<i className="icon flaticon-approved"></i>
								<span className="count">02</span>
								<h4 className="title"><Link href="page-about">Fuse Agency</Link></h4>
								<div className="text">It is long established fact that a reader will be distrol acted bioiiy.</div>
							</div>
						</div>
						<div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
							<div className="inner-box">
								<i className="icon flaticon-promotion"></i>
								<span className="count">03</span>
								<h4 className="title"><Link href="page-about">Publishing packages</Link></h4>
								<div className="text">It is long established fact that a reader will be distrol acted bioiiy.</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="contact-section-seven pt-0">
				<div className="auto-container">
					<div className="row">
						<div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
							<div className="inner-column">
								<div className="contact-form wow fadeInLeft">
									<div className="sec-title">
										<span className="sub-title">send message</span>
										<h2>Crafting digital strategies that work</h2>
									</div>
	
									<form method="post" action="get" id="contact-form">
										<div className="row">
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="full_name" placeholder="Your Name" required/>
											</div>
											<div className="form-group col-lg-6 col-md-12">
												<input type="email" name="email" placeholder="Your Email" required/>
											</div>
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="phone" placeholder="Phone Number" required/>
											</div>
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="Subject" placeholder="Subject" required/>
											</div>
											<div className="form-group col-lg-12">
												<textarea name="message" placeholder="Message" required></textarea>
											</div>
											<div className="form-group col-lg-12">
												<button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Request</span></button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
	
						<div className="image-column col-lg-6 col-md-12">
							<div className="inner-column">
								<figure className="image overlay-anim"><img src="images/resource/contact-7.jpg" alt=""/></figure>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="news-section-seven pt-0">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Latest news</span>
						<h2>Your partner in digital <br/>transformation</h2>
					</div>
					<div className="row">
						<div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="400ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news7-1.jpg" alt=""/></Link></figure>
									<span className="date">31 <small>Feb</small></span>
								</div>
								<div className="content-box">
									<div className="auther-info">
										<figure className="thumb"><img src="images/resource/testi-thumb7-1.png" alt=""/></figure>
										<h6 className="auther-name"><Link href="news-details" title="">Devon Lane</Link></h6>
									</div>
									<h4 className="title"><Link href="news-details">Your online success is our priority amplify your digital presence</Link></h4>
									<Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
						<div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news7-2.jpg" alt=""/></Link></figure>
									<span className="date">31 <small>Feb</small></span>
								</div>
								<div className="content-box">
									<div className="auther-info">
										<figure className="thumb"><img src="images/resource/testi-thumb7-2.png" alt=""/></figure>
										<h6 className="auther-name"><Link href="news-details" title="">Guy Hawkins</Link></h6>
									</div>
									<h4 className="title"><Link href="news-details">Women Entrepreneurs ns cillum dolore cupidatat proident</Link></h4>
									<Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
						<div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="400ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news7-3.jpg" alt=""/></Link></figure>
									<span className="date">31 <small>Feb</small></span>
								</div>
								<div className="content-box">
									<div className="auther-info">
										<figure className="thumb"><img src="images/resource/testi-thumb7-3.png" alt=""/></figure>
										<h6 className="auther-name"><Link href="news-details" title="">Savannah Nguyen</Link></h6>
									</div>
									<h4 className="title"><Link href="news-details">The digital you need transforming your digital landscape</Link></h4>
									<Link href="news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
		</div>
        </>
    );
};
export default Process7