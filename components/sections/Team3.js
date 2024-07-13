import Link from "next/link"
const Team3 = () => {
    return (
        <>
		<section className="team-section-three">    
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">team members</span>
					<h2>Unlocking your online <br/>potential</h2>
				</div>

				<div className="row">
					<div className="team-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<figure className="image"><Link href="page-team-details"><img src="images/resource/team2-1.jpg" alt=""/></Link></figure> 
							<h4 className="name"><Link href="page-team-details">Wade Warren</Link></h4>
							<span className="designation">Internet Security Assistant</span>
							<div className="social-links">
								<Link href="#"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								<Link href="#"><i className="fab fa-linkedin"></i></Link>
							</div>
						</div>
					</div>

					<div className="team-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<figure className="image"><Link href="page-team-details"><img src="images/resource/team2-2.jpg" alt=""/></Link></figure>
							<h4 className="name"><Link href="page-team-details">Theresa Webb</Link></h4>
							<span className="designation">WordPress</span>
							<div className="social-links">
								<Link href="#"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								<Link href="#"><i className="fab fa-linkedin"></i></Link>
							</div>
						</div>
					</div>

					<div className="team-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<figure className="image"><Link href="page-team-details"><img src="images/resource/team2-4.jpg" alt=""/></Link></figure>
							<h4 className="name"><Link href="page-team-details">Robert Fox</Link></h4>
							<span className="designation">Ux Architect</span>
							<div className="social-links">
								<Link href="#"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								<Link href="#"><i className="fab fa-linkedin"></i></Link>
							</div>
						</div>
					</div>

					<div className="team-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
						<div className="inner-box">
							<figure className="image"><Link href="page-team-details"><img src="images/resource/team2-3.jpg" alt=""/></Link></figure>
							<h4 className="name"><Link href="page-team-details">Savannah Nguyen</Link></h4>
							<span className="designation">Python Developer</span>
							<div className="social-links">
								<Link href="#"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								<Link href="#"><i className="fab fa-linkedin"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};
export default Team3