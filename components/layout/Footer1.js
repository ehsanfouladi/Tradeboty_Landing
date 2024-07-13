import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main-footer footer-style-one">
		<div className="bg footer-bg-1"></div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-lg-12 col-md-12">
						<div className="footer-widget about-widget">
							<div className="widget-content">
								<div className="logo"><Link href="#"> <img src="images/logo-2.png" alt=""/></Link></div>
								<div className="text">Lorem Ipsum is simply i dumiomy is text Lorem Ipsum is simply</div>
								<ul className="list-style-two light">
									<li><i className="fa fa-phone"></i> <Link href="tel:+888123456765">(+888) 123 456 765</Link></li>
									<li><i className="fa fa-envelope"></i> <Link href="mailto:infoname@mail.com">infoname@mail.com</Link></li>
								</ul>
								<ul className="social-icon-two">
									<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
									<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
									<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
									<li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-6 col-lg-8 col-md-12 mb-0">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="footer-widget links-widget">
									<h4 className="widget-title">Our services</h4>
									<div className="widget-content">
										<ul className="user-links">
											<li><Link href="#">Ui Design</Link></li>
											<li><Link href="#">Ux Design</Link></li>
											<li><Link href="#">Digital Marketing</Link></li>
											<li><Link href="#">Video Editing</Link></li>
											<li><Link href="#">Pc Repairs</Link></li>
										</ul>                                
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="footer-widget links-widget">
									<h4 className="widget-title">Pay links</h4>
									<div className="widget-content">
										<ul className="user-links">
											<li><Link href="#">Credit industrys</Link></li>
											<li><Link href="#">Reasearch sector</Link></li>
											<li><Link href="#">Finance Sector</Link></li>
											<li><Link href="#">Credit industrys</Link></li>
											<li><Link href="#">Reasearch sector</Link></li>
										</ul>                                
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
						<div className="footer-widget blog-widget">
							<h4 className="widget-title">Recent blog</h4>
							<div className="widget-content">
								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-1.jpg" alt=""/></Link></figure>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
										<h6 className="post-title"><Link href="#">Your online success is our priority</Link></h6>
									</div>
								</article>

								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-2.jpg" alt=""/></Link></figure>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
										<h6 className="post-title"><Link href="#">Your online success is our priority</Link></h6>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="auto-container">
				<div className="inner-container">
					<div className="copyright-text">© <Link href="/">kodesolution</Link> All Rights Reserved</div>

					<ul className="footer-nav">
						<li><Link href="#">Trams & Condition</Link></li>
						<li><Link href="#">Privacy Policy</Link></li>
						<li><Link href="#">Contact Us</Link></li>
					</ul>
				</div>
			</div>
		</div>
        </footer>

        </>
    )
}
