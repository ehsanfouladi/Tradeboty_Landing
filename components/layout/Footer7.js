import Link from "next/link"

export default function Footer7() {
    return (
        <>
        <footer className="main-footer footer-style-seven">
		<div class="bg footer-bg-7"></div>
		<div class="widgets-section">
			<div class="auto-container">

				<div class="subscribe-form-four">
					<form method="post" action="#">
						<div class="form-group">
							<input type="email" name="email" class="email" placeholder="Your mail address" required=""/>
							<button type="button" class="theme-btn btn-style-one hover-light"><span class="btn-title">Subscribe</span></button>
						</div>
					</form>
				</div>
				
				<div class="row">
					<div class="footer-column col-xl-3 col-lg-6 col-md-12">
						<div class="footer-widget about-widget">
							<div class="widget-content">
								<div class="logo"><Link href="#"> <img src="images/logo-2.png" alt=""/></Link></div>
								<div class="text">The construction iustry plays a vital role in shaping the world round us, providing the infrastructure and building</div>
								<ul class="social-icon-two">
									<li><Link href="#"><i class="fab fa-facebook-f"></i></Link></li>
									<li><Link href="#"><i class="fab fa-twitter"></i></Link></li>
									<li><Link href="#"><i class="fab fa-instagram"></i></Link></li>
									<li><Link href="#"><i class="fab fa-pinterest"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
	
					<div class="footer-column col-xl-3 col-lg-6 col-md-12">
						<div class="footer-widget links-widget">
							<h4 class="widget-title">Get Free Links</h4>
							<div class="widget-content">
								<ul class="user-links style-two">
									<li><Link href="#">Home</Link></li>
									<li><Link href="page-about.html">About Us</Link></li>
									<li><Link href="#">Our Project</Link></li>
									<li><Link href="#">Shop now</Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div class="footer-column col-xl-3 col-lg-6 col-md-12">
						<div class="footer-widget contact-widget">
							<h4 class="widget-title">Contact Us</h4>
							<div class="widget-content">
								<ul class="contact-list-six">
									<li><i class="fa fa-map-marker-alt"></i> 500 mohammudpur Rajasthan Road-45,House-17, Dhaka, bd</li>
									<li><i class="fa fa-phone"></i> <Link href="tel:+888123456765">(+888) 123 456 765</Link></li>
									<li><i class="fa fa-envelope"></i> <Link href="mailto:infoname@mail.com">infoname@mail.com</Link></li>
								</ul>
							</div>
						</div>
					</div>
	
					<div class="footer-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
						<div class="footer-widget blog-widget">
							<h4 class="widget-title">Popular Post</h4>
							<div class="widget-content">
								<article class="recent-post">
									<div class="inner">
										<figure class="post-thumb"><Link href="#"><img src="images/resource/post-thumb-8.jpg" alt=""/></Link></figure>
										<h6 class="post-title"><Link href="#">Better it company way this world</Link></h6>
										<div class="post-info"><i class="fas fa-calendar-alt"></i> October 20, 2023</div>
									</div>
								</article>
	
								<article class="recent-post">
									<div class="inner">
										<figure class="post-thumb"><Link href="#"><img src="images/resource/post-thumb-7.jpg" alt=""/></Link></figure>
										<h6 class="post-title"><Link href="#">Craftinal strategies that work</Link></h6>
										<div class="post-info"><i class="fas fa-calendar-alt"></i> October 20, 2023</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="footer-bottom">
			<div class="auto-container">
				<div class="inner-container">
					<div class="copyright-text">© <Link href="/">kodesolution</Link> All Rights Reserved</div>
	
					<ul class="footer-nav">
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
