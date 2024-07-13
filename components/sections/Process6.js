import Link from "next/link"
const Process6 = () => {
    return (
        <>
		<div className="combine-bg">
			<div className="bg bg-pattern-14"></div>
			
			<section className="process-section-three">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">working Process</span>
						<h2>Amplify your digital <br/>presence</h2>
					</div>
					<div className="row">
						<div className="process-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<span className="count">01</span>
								<h4 className="title">Analytics Reporting</h4>
								<div className="text">Lorem Ipsum is simply it text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum Lorem</div>
							</div>
						</div>
						<div className="process-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<span className="count">02</span>
								<h4 className="title">App Development</h4>
								<div className="text">Lorem Ipsum is simply it text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum Lorem</div>
							</div>
						</div>
						<div className="process-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<span className="count">03</span>
								<h4 className="title">Media Management</h4>
								<div className="text">Lorem Ipsum is simply it text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum Lorem</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="contact-section-six pt-0">
				<div className="auto-container">
					<div className="row">
						<div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="300ms">
							<div className="inner-column">
								<div className="sec-title light mb-0">
									<span className="sub-title">stay with us</span>
									<h2>Your partner in digital transformation</h2>
									<div className="text">Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum Lorem Ipsum is simply dummy text of the printing .</div>
									<Link href="page-about" className="theme-btn btn-style-one light-bg hover-dark"><span className="btn-title">Explore more</span></Link>
								</div>
							</div>
						</div>
	
						<div className="image-column col-lg-6 col-md-12 wow fadeInLeft">
							<div className="inner-column">
								<div className="image-box">
									<figure className="image overlay-anim"><img src="images/resource/contact6-1.jpg" alt=""/></figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="news-section-six pt-0">
				<div className="auto-container">
					<div className="sec-title">
						<span className="sub-title">news and blog</span>
						<h2>Digitally disrupting the <br/>status quo</h2>
						<div className="btn-box">
							<Link href="news-grid" className="theme-btn btn-style-one"><span className="btn-title">Explore more</span></Link>
						</div>
					</div>
					<div className="row">
						<div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news6-1.jpg" alt=""/></Link></figure>
								</div>
								<div className="content-box">
									<ul className="post-info">
										<li><i className="fa fa-user"></i> By admin</li>
										<li><i className="fas fa-calendar-alt"></i> October 19, 2022</li>
									</ul>
									<h4 className="title"><Link href="news-details">Helping you focus on what matters most focus on helping</Link></h4>
									<Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
								</div>
							</div>
						</div>
	
						<div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news6-2.jpg" alt=""/></Link></figure>
								</div>
								<div className="content-box">
									<ul className="post-info">
										<li><i className="fa fa-user"></i> By admin</li>
										<li><i className="fas fa-calendar-alt"></i> October 19, 2022</li>
									</ul>
									<h4 className="title"><Link href="news-details">Where creativity meets technology enhancing digital experiences</Link></h4>
									<Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
								</div>
							</div>
						</div>
	
						<div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="news-details"><img src="images/resource/news6-3.jpg" alt=""/></Link></figure>
								</div>
								<div className="content-box">
									<ul className="post-info">
										<li><i className="fa fa-user"></i> By admin</li>
										<li><i className="fas fa-calendar-alt"></i> October 19, 2022</li>
									</ul>
									<h4 className="title"><Link href="news-details">The digital you need transforming your digital landscape</Link></h4>
									<Link href="news-details" className="theme-btn btn-style-one read-more"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
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
export default Process6