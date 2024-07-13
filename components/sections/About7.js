import Link from "next/link"
const About7 = () => {
    return (
        <>
			<section className="about-section-seven">
				<div className="auto-container">
					<div className="row">
						<div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
							<div className="inner-column">
								<div className="sec-title">
									<span className="sub-title">About us</span>
									<h2>Amplify your digital <br/>presence</h2>
									<div className="text">Aliquam eros justo, posuere lobortis viverr augue mattis fermentum non ullamcorper viverra laoreet augue. Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum non ullamcorper</div>
								</div>
								<h4 className="title">Business bottom line</h4>
								<ul className="list-style-two">
									<li><i className="fa fa-check-circle"></i> It is a long established fact that a reader will be distracted by the readable</li>
									<li><i className="fa fa-check-circle"></i> Lorem Ipsum is that it has a more-or-less normal distributio</li>
									<li><i className="fa fa-check-circle"></i> Various versions have evolved over the years</li>
								</ul>
								<div className="bottom-box">
									<div className="auther-info order-md-3">
										<h6 className="title">Alberlor J. William</h6>
										<span className="designation">Founder</span>
										<figure className="image"><img src="images/resource/sign.png" alt=""/></figure>
									</div>
									<Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">About Us</span></Link>
								</div>
							</div>
						</div>

						<div className="image-column col-xl-6 col-lg-6">
							<div className="inner-column wow fadeInLeft">
								<figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about7-1.jpg" alt=""/></figure>
								<figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about7-2.jpg" alt=""/></figure>
								<div className="exp-box bounce-y">
									<div className="inner">
										<i className="icon flaticon-title"></i>
										<h4 className="title">25+</h4>
										<span className="text">Services We Provide</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default About7