import Link from "next/link"
const Projects5 = () => {
    return (
        <>
			<section className="projects-section-five pt-0">
				<div className="large-container">
					<div className="sec-title text-center style-two">
						<span className="sub-title">Latest project</span>
						<h2>Take A Look Our Completed<br/> Projects</h2>
					</div>

					<div className="row">
						<div className="project-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-project-details"><img src="images/resource/project5-1.jpg " alt=""/></Link></figure>
								</div>
								<div className="caption-box">
									<h4 className="title"><Link href="page-project-details">Web Development</Link></h4>
									<Link href="page-project-details" className="read-more">View More <i className="fa fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>

						<div className="project-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-project-details"><img src="images/resource/project5-2.jpg " alt=""/></Link></figure>
								</div>
								<div className="caption-box">
									<h4 className="title"><Link href="page-project-details">Software Development</Link></h4>
									<Link href="page-project-details" className="read-more">View More <i className="fa fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>

						<div className="project-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-project-details"><img src="images/resource/project5-3.jpg " alt=""/></Link></figure>
								</div>
								<div className="caption-box">
									<h4 className="title"><Link href="page-project-details">Digital Marketing</Link></h4>
									<Link href="page-project-details" className="read-more">View More <i className="fa fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>

						<div className="project-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-project-details"><img src="images/resource/project5-4.jpg " alt=""/></Link></figure>
								</div>
								<div className="caption-box">
									<h4 className="title"><Link href="page-project-details">Digital Marketing</Link></h4>
									<Link href="page-project-details" className="read-more">View More <i className="fa fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Projects5