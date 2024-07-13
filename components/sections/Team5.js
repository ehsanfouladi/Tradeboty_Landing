import Link from "next/link"
const Team5 = () => {
    return (
        <>
			<section className="team-section-five">    
				<div className="large-container">
					<div className="sec-title text-center style-two">
						<span className="sub-title">Experience team</span>
						<h2>Enhancing digital <br/>experiences</h2>
					</div>

					<div className="row">
						<div className="team-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-1.jpg" alt=""/></Link></figure> 
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">John Smith</Link></h4>
									<span className="designation">Founder/Founding Partner</span>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
									</div>
								</div>
							</div>
						</div>

						<div className="team-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-2.jpg" alt=""/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Marvin McKinney</Link></h4>
									<span className="designation">WordPress</span>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
									</div>
								</div>
							</div>
						</div>

						<div className="team-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-3.jpg" alt=""/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Courtney Henry</Link></h4>
									<span className="designation">Joomla Developer</span>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
									</div>
								</div>
							</div>
						</div>

						<div className="team-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-4.jpg" alt=""/></Link></figure>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Leslie Alexander</Link></h4>
									<span className="designation">Joomla Developer</span>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
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
export default Team5