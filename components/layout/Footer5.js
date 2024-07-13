import Link from "next/link"

export default function Footer5() {
    return (
        <>
        <footer className="main-footer footer-style-five">
		<div className="bg footer-bg-5"></div>

		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget about-widget">
							<div className="logo"><Link href="#"><img src="images/logo-5.png" alt=""/></Link></div>
							<div className="text">Lorem ipsum dolor sit amet consectetur. Hac tortor erat neque nid nibh. Pretium lectus risus eget mons interdum</div>
							<ul className="social-icon-three light">
								<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
								<li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
								<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
							</ul>
						</div>
					</div>

					

					<div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-6">
						<div className="footer-widget blog-widget">
							<h4 className="widget-title">Popular Posts</h4>
							<div className="widget-content">
								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-5.jpg" alt=""/></Link></figure>
										<h6 className="post-title"><Link href="#">Building your digital<br/> future.</Link></h6>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> 19/02/23</div>
									</div>
								</article>

								<article className="recent-post">
									<div className="inner">
										<figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-6.jpg" alt=""/></Link></figure>
										<h6 className="post-title"><Link href="#">Lorem ipsum dolor sit <br/>amet consectetur. </Link></h6>
										<div className="post-info"><i className="fas fa-calendar-alt"></i> 19/02/23</div>
									</div>
								</article>
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-2 col-lg-6 col-md-6">
						<div className="footer-widget links-widget">
							<h4 className="widget-title">Free Links</h4>
							<div className="widget-content">
								<ul className="user-links style-two">
									<li><Link href="#">Software Corner</Link></li>
									<li><Link href="#">Application Center</Link></li>
									<li><Link href="#">Research Section</Link></li>
									<li><Link href="#">Developing Corner</Link></li>
									<li><Link href="#">Application Center</Link></li>
								</ul>                                
							</div>
						</div>
					</div>
					
					<div className="footer-column col-xl-3 col-lg-6 col-md-6">
						<div className="footer-widget contact-widget">
							<h4 className="widget-title">Contact Us</h4>
							<div className="widget-content">
								<ul className="contact-list-four">
									<li className="contact-info">
										<span className="icon fa fa-phone"></span>
										<span className="title">Phone</span>
										<div className="text"><Link href="tel:+92880098670">+880 123 45 67 89</Link></div>
									</li>
									<li className="contact-info">
										<span className="icon fa fa-envelope"></span>
										<span className="title">E-mail</span>
										<div className="text"><Link href="mailto:help@company.com">yourmail@gmail.com</Link></div>
									</li>
									<li className="contact-info">
										<i className="icon fa fa-map-marker"></i>
										<span className="title">Location</span>
										<div className="text">The Veg Street, USA</div>
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
