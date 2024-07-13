import Link from "next/link"

export default function Footer2() {
    return (
        <>
        <footer className="main-footer footer-style-two">
		<div className="bg footer-bg-2"></div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-6 col-lg-12 col-md-12">
						<div className="footer-widget newsletter-widget">
							<h4 className="widget-title">IF YOU WANT TO UPDATE ? <br/>STAY CONECTED!</h4>
							<div className="subscribe-form">
								<form method="post" action="#">
									<div className="form-group">
										<input type="email" name="email" className="email" placeholder="Your e-mail address" required=""/>
										<button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe Now</span></button>
									</div>
								</form>
							</div>

							<div className="contact-info-outer">
								<div className="contact-info-box">
									<h4 className="widget-title"><i className="icon fa fa-phone"></i> Contact Us</h4>
									<ul className="user-links style-two">
										<li><Link href="tel:+0144204200420">+ 014 420 4200420</Link></li>
										<li><Link href="tel:+0144204200420">+ 014 420 4200420</Link></li>
									</ul>
								</div>

								<div className="contact-info-box">
									<h4 className="widget-title"><i className="icon fa fa-phone"></i> Address</h4>
									<ul className="user-links style-two">
										<li>444 Broklyan, New York <br/>America.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget links-widget">
							<h4 className="widget-title">Useful Links</h4>
							<div className="widget-content">
								<ul className="user-links style-two">
									<li><Link href="#">Home Section</Link></li>
									<li><Link href="#">Our Team Section</Link></li>
									<li><Link href="#">About Us Section</Link></li>
									<li><Link href="#">Privacy section</Link></li>
									<li><Link href="#">Searvice section</Link></li>
									<li><Link href="#">FAQ section</Link></li>
									<li><Link href="#">Career</Link></li>
								</ul>                                
							</div>
						</div>
					</div>

					<div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget blog-widget">
							<h4 className="widget-title">Recent News</h4>
							<div className="widget-content">
								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-3.jpg" alt=""/></Link></figure>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> October 19, 2022</div>
										<h6 className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></h6>
									</div>
								</article>

								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-4.jpg" alt=""/></Link></figure>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> October 19, 2022</div>
										<h6 className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></h6>
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

					<ul className="social-icon-three">
						<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
						<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
						<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
						<li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
					</ul>
				</div>

			</div>
		</div>
        </footer>

        </>
    )
}
