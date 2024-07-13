import Link from "next/link"

export default function Footer6() {
    return (
        <>
        <footer className="main-footer footer-style-six">
		<div className="bg footer-bg-6"></div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget about-widget">
							<div className="widget-content">
								<div className="logo"><Link href="#"> <img src="images/logo-2.png" alt=""/></Link></div>
								<div className="text">Lorem Ipsum is simpl dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum</div>
								<h4 className="widget-title">Contact Info:</h4>
								<ul className="contact-list-five">
									<li>E-mail: <Link href="mailto:yourmail.com">yourmail.com</Link></li>
									<li>Address: strest road sta</li>
									<li>Phone: <Link href="tel:+12503650785">+125 036 50785</Link></li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget links-widget">
							<h4 className="widget-title">Important Links</h4>
							<div className="widget-content">
								<ul className="user-links style-two">
									<li><Link href="#">Get the design</Link></li>
									<li><Link href="#">Documantation</Link></li>
									<li><Link href="#">Help center</Link></li>
									<li><Link href="#">Privecy polecy</Link></li>
									<li><Link href="#">Pricing</Link></li>
									<li><Link href="#">Contact Us</Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget links-widget">
							<h4 className="widget-title">Pages</h4>
							<div className="widget-content">
								<ul className="user-links style-two">
									<li><Link href="page-about.html">About Us</Link></li>
									<li><Link href="page-services.html">Services</Link></li>
									<li><Link href="#">Work Process</Link></li>
									<li><Link href="#">Testimonial</Link></li>
									<li><Link href="#">Terms of use</Link></li>
									<li><Link href="#">Portfolio</Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget location-widget">
							<h4 className="widget-title">Our Location</h4>
							<div className="widget-content">
								<figure className="map-image"><img src="images/icons/footer-map.png" alt=""/></figure>
								<ul className="social-icon-five">
									<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
									<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
									<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
									<li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
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
