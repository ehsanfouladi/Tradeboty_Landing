import Link from "next/link";
const ProjectGrid = () => {
	return (
	<>
	<section className="projects-section-five">
		<div className="auto-container">
			<div className="row">
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp">
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
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
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
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
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
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
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
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
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
				<div className="project-block-five col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
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
	
      <section className="subscribe-section alternate">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="title-column col-xl-6">
                <div className="inner-column">
                  <h2 className="title">Subscribe for any update information</h2>
                </div>
              </div>
              <div className="form-column col-xl-6">
                <div className="newsletter-form">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="email" name="email" className="email" placeholder="Type email id" required=""/>
                      <button type="button" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Submit</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	</>
	);
};
export default ProjectGrid