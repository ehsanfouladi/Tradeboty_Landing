import Link from "next/link"
const Projects6 = () => {
    return (
        <>
			<section className="projects-section-six">
				<div className="auto-container">
		s			<div className="sec-title">
						<span className="sub-title">our Portfolio</span>
						<h2>There is a Big opportunity of <br/>Company</h2>
						<Link href="page-projects" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
					</div>

					<div className=" row">
						<div className="col-lg-8 col-md-6 col-sm-12">
							<div className="row">
								<div className="project-block col-lg-6 col-md-12 col-sm-12 wow fadeIn">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="images/resource/project6-1.jpg" alt=""/></Link></figure>
											<div className="info-box">
												<h4 className="title"><Link href="page-project-details">Affiliate Program</Link></h4>
												<p className="text">Our mission is there are many</p>
											</div>
										</div>
									</div>
								</div>

								<div className="project-block col-lg-6 col-md-12 col-sm-12 wow fadeIn">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="images/resource/project6-2.jpg" alt=""/></Link></figure>
											<div className="info-box">
												<h4 className="title"><Link href="page-project-details">Affiliate Program</Link></h4>
												<p className="text">Our mission is there are many</p>
											</div>
										</div>
									</div>
								</div>

								<div className="project-block col-lg-12 col-md-12 col-sm-12 wow fadeIn">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="images/resource/project6-3.jpg" alt=""/></Link></figure>
											<div className="info-box">
												<h4 className="title"><Link href="page-project-details">Affiliate Program</Link></h4>
												<p className="text">Our mission is there are many</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="project-block wow fadeInRight ">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link href="page-project-details"><img src="images/resource/project6-4.jpg" alt=""/></Link></figure>
										<div className="info-box">
											<h4 className="title"><Link href="page-project-details">Affiliate Program</Link></h4>
											<p className="text">Our mission is there are many</p>
										</div>
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
export default Projects6