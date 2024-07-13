import Link from "next/link"
const Team6 = () => {
    return (
        <>
			<section className="team-section-six">    
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Our experts</span>
						<h2>Your online success is our <br/> priority</h2>
					</div>

					<div className="row">
						<div className="team-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team6-1.jpg" alt=""/></Link></figure> 
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div>
									<span className="share-icon fa fa-share-alt"></span>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">Eleanor Pena</Link></h4>
									<span className="designation">WordPress</span>
								</div>
							</div>
						</div>

						<div className="team-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team6-2.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div>
									<span className="share-icon fa fa-share-alt"></span>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">Kathryn Murphy</Link></h4>
									<span className="designation">Python Developer</span>
								</div>
							</div>
						</div>

						<div className="team-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team6-3.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div>
									<span className="share-icon fa fa-share-alt"></span>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">Leslie Alexander</Link></h4>
									<span className="designation">UI UX Designer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Team6