import Link from "next/link"

export default function Footer3() {
    return (
        <>
        <footer className="main-footer footer-style-three">
		<div className="bg footer-bg-3"></div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-lg-6 col-md-12">
						<div className="footer-widget about-widget-two">
							<div className="widget-content">
								<div className="logo"><Link href="#"> <img src="images/logo-4.png" alt=""/></Link></div>
								<div className="text">Conditions Terms of Use Ours feturesin Services ew Guests LisitThe Team List</div>
								<ul className="social-icon-two light rounded center">
									<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
									<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
									<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
									<li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-3 col-lg-6 col-md-12">
						<div className="footer-widget links-widget">
							<h4 className="widget-title">Page</h4>
							<div className="widget-content">
								<ul className="user-links style-two">
									<li><Link href="#">Credit industrys</Link></li>
									<li><Link href="#">Credit Consulting</Link></li>
									<li><Link href="#">Business Credit industry</Link></li>
									<li><Link href="#">Finance industry</Link></li>
									<li><Link href="#">Credit industrys</Link></li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-3 col-lg-12 col-md-12">
						<div className="footer-widget newsletter-widget">
							<h4 className="widget-title">Newsletter</h4>
							<div className="subscribe-form-two">
								<div className="text">It is a long established fact that a reader will be distracted</div>
								<form method="post" action="#">
									<div className="form-group">
										<input type="email" name="email" className="email" placeholder="Your e-mail address" required=""/>
										<button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe Now</span></button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="footer-column col-xl-3 col-lg-12 col-md-12">
						<div className="footer-widget contact-widget">
							<h4 className="widget-title">Contact Info</h4>
							<div className="widget-content">
								<ul className="contact-list-two">
									<li className="contact-info">
										<i className="icon fa fa-map-marker"></i>
										<span className="title">Address</span>
										<div className="text">66 Broklyant, New York India 3269</div>
									</li>
									<li className="contact-info">
										<span className="icon fa fa-phone"></span>
										<span className="title">Phone Number</span>
										<div className="text"><Link href="tel:+92880098670">+ 012 345 678 9101</Link></div>
									</li>
									<li className="contact-info">
										<span className="icon fa fa-envelope"></span>
										<span className="title">E-mail</span>
										<div className="text"><Link href="mailto:help@company.com">abcd@gmail.com</Link></div>
									</li>
								</ul>
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
